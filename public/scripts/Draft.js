import React, { useState, useEffect } from 'react';
import {
  Editor,
  EditorState,
  ContentState,
  SelectionState,
  Modifier,
  AtomicBlockUtils,
  CompositeDecorator,
  RichUtils,
  getDefaultKeyBinding,
  convertToRaw,
} from 'draft-js';

const InserImageButton = ({ editorState, setEditorState }) => {
  return (
    <button
      onClick={() => {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
          'IMAGE',
          'IMMUTABLE',
          {
            src: 'https://vignette.wikia.nocookie.net/naruto/images/8/8b/Naruto_prof_1.png/revision/latest/scale-to-width-down/185?cb=20120304203839&path-prefix=pl',
          }
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = AtomicBlockUtils.insertAtomicBlock(
          editorState,
          entityKey,
          ' '
        );
        setEditorState(
          EditorState.forceSelection(
            newEditorState,
            newEditorState.getCurrentContent().getSelectionAfter()
          )
        );
      }}
    >
      Insert image
    </button>
  );
};

const ChangeSelectionButton = ({ editorState, setEditorState }) => {
  return (
    <button
      onClick={() => {
        const contentState = editorState.getCurrentContent();
        const selectionState = editorState.getSelection();
        const nextBlock = contentState.getBlockAfter(
          selectionState.getAnchorKey()
        );
        const nextBlockKey = nextBlock.getKey();
        const nextSelection = SelectionState.createEmpty(nextBlockKey);
      }}
    >
      Change Selection
    </button>
  );
};

const imageStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'IMAGE'
    );
  }, callback);
};

const Image = ({ contentState, entityKey }) => {
  const { src } = contentState.getEntity(entityKey).getData();
  const [isTargeted, target] = useState(false);
  useEffect(() => {
    document.addEventListener('click', (e) => {
      target(e.target.id === 'MY_ID');
    });
  }, []);
  if (!src) {
    return null;
  }
  return (
    <div
      id="MY_ID"
      style={{
        cursor: 'pointer',
        border: isTargeted ? '2px solid red' : 'none',
      }}
    >
      {isTargeted && (
        <button onClick={() => console.log('DELETE')}>DELETE</button>
      )}
      <img src={src} alt="" contentEditable={false} />
    </div>
  );
};

const imageDecorator = {
  strategy: imageStrategy,
  component: Image,
};

const isPreviousBlockAnImage = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const beforeBlock = currentContent.getBlockBefore(anchorKey);
  const blockType = beforeBlock?.get('type');
  return blockType === 'atomic';
};

const isCurrentBlockAllSelected = (editorState) => {
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  const currentContentBlock = currentContent.getBlockForKey(anchorKey);
  const blockTextLength = currentContentBlock?.get('text')?.length;
  const start = selectionState?.getStartOffset() ?? 0;
  const end = selectionState?.getEndOffset() ?? 0;
  return blockTextLength === end - start;
};

const printSelection = (editorState) => {
  const selectionState = editorState.getSelection();
  const startOffset = selectionState?.getStartOffset() ?? 0;
  const endOffset = selectionState?.getEndOffset() ?? 0;
  const anchorOffset = selectionState?.getAnchorOffset() ?? 0;
  const focusOffset = selectionState?.getFocusOffset() ?? 0;
  const focusKey = selectionState?.getFocusKey() ?? 0;
  console.log({ startOffset, endOffset, anchorOffset, focusOffset, focusKey });
};

const removeCurrentBlock = (editorState, blockKey) => {
  const contentState = editorState.getCurrentContent();
  const contentBlock = contentState.getBlockForKey(blockKey);
  let targetRange = SelectionState.createEmpty(contentBlock.getKey());
  targetRange = targetRange.merge({
    anchorKey: contentBlock.getKey(),
    anchorOffset: 0,
    focusKey: contentBlock.getKey(),
    focusOffset: contentBlock.getLength(),
  });
  const newContentState = Modifier.removeRange(
    contentState,
    targetRange,
    'backward'
  );
  const blockMap = newContentState.getBlockMap().delete(blockKey);
  const newContentStateWithoutBlock = newContentState.merge({
    blockMap,
    selectionAfter: SelectionState.createEmpty(
      contentState.getKeyBefore(contentBlock.getKey())
    ),
  });
  return EditorState.push(
    editorState,
    newContentStateWithoutBlock,
    'remove-range'
  );
};

const MyInput = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(new CompositeDecorator([imageDecorator]))
  );
  console.log(convertToRaw(editorState.getCurrentContent()));
  printSelection(editorState);

  return (
    <>
      <div className="border-solid border-2 p-1">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          keyBindingFn={(e) => {
            return getDefaultKeyBinding(e);
          }}
          handleKeyCommand={(command, editorState) => {
            if (command === 'backspace') {
              const contentState = editorState.getCurrentContent();
              const selectionState = editorState.getSelection();
              const nextBlock = contentState.getBlockAfter(
                selectionState.getAnchorKey()
              );
              const nextBlockKey = nextBlock.getKey();
              let nextSelection = SelectionState.createEmpty(nextBlockKey);
              nextSelection = nextSelection.merge({
                focusOffset: nextBlock.getLength(),
              });
              console.log(nextSelection.toJS());
              const nextEditorState = EditorState.forceSelection(
                editorState,
                nextSelection
              );
              setEditorState(nextEditorState);
              // setEditorState(
              //   EditorState.push(
              //     nextEditorState,
              //     nextEditorState.getCurrentContent(),
              //     'move-block'
              //   )
              // );
              return 'handled';
            }
            const newState = RichUtils.handleKeyCommand(editorState, command);
            if (newState) {
              setEditorState(newState);
              return 'handled';
            }
            return 'not-handled';
          }}
        />
      </div>
      <div>
        <InserImageButton
          editorState={editorState}
          setEditorState={setEditorState}
        />
        <ChangeSelectionButton
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </div>
    </>
  );
};

export default MyInput;
