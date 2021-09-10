"use strict";

require("core-js/modules/esnext.weak-map.delete-all.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const InserImageButton = ({
  editorState,
  setEditorState
}) => {
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', {
        src: 'https://vignette.wikia.nocookie.net/naruto/images/8/8b/Naruto_prof_1.png/revision/latest/scale-to-width-down/185?cb=20120304203839&path-prefix=pl'
      });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

      const newEditorState = _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');

      setEditorState(_draftJs.EditorState.forceSelection(newEditorState, newEditorState.getCurrentContent().getSelectionAfter()));
    }
  }, "Insert image");
};

const ChangeSelectionButton = ({
  editorState,
  setEditorState
}) => {
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      const contentState = editorState.getCurrentContent();
      const selectionState = editorState.getSelection();
      const nextBlock = contentState.getBlockAfter(selectionState.getAnchorKey());
      const nextBlockKey = nextBlock.getKey();

      const nextSelection = _draftJs.SelectionState.createEmpty(nextBlockKey);
    }
  }, "Change Selection");
};

const imageStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'IMAGE';
  }, callback);
};

const Image = ({
  contentState,
  entityKey
}) => {
  const {
    src
  } = contentState.getEntity(entityKey).getData();
  const [isTargeted, target] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    document.addEventListener('click', e => {
      target(e.target.id === 'MY_ID');
    });
  }, []);

  if (!src) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "MY_ID",
    style: {
      cursor: 'pointer',
      border: isTargeted ? '2px solid red' : 'none'
    }
  }, isTargeted && /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => console.log('DELETE')
  }, "DELETE"), /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: "",
    contentEditable: false
  }));
};

const imageDecorator = {
  strategy: imageStrategy,
  component: Image
};

const isPreviousBlockAnImage = editorState => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const beforeBlock = currentContent.getBlockBefore(anchorKey);
  const blockType = beforeBlock === null || beforeBlock === void 0 ? void 0 : beforeBlock.get('type');
  return blockType === 'atomic';
};

const isCurrentBlockAllSelected = editorState => {
  var _currentContentBlock$;

  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  const currentContentBlock = currentContent.getBlockForKey(anchorKey);
  const blockTextLength = currentContentBlock === null || currentContentBlock === void 0 ? void 0 : (_currentContentBlock$ = currentContentBlock.get('text')) === null || _currentContentBlock$ === void 0 ? void 0 : _currentContentBlock$.length;
  const start = (selectionState === null || selectionState === void 0 ? void 0 : selectionState.getStartOffset()) ?? 0;
  const end = (selectionState === null || selectionState === void 0 ? void 0 : selectionState.getEndOffset()) ?? 0;
  return blockTextLength === end - start;
};

const printSelection = editorState => {
  const selectionState = editorState.getSelection();
  const startOffset = (selectionState === null || selectionState === void 0 ? void 0 : selectionState.getStartOffset()) ?? 0;
  const endOffset = (selectionState === null || selectionState === void 0 ? void 0 : selectionState.getEndOffset()) ?? 0;
  const anchorOffset = (selectionState === null || selectionState === void 0 ? void 0 : selectionState.getAnchorOffset()) ?? 0;
  const focusOffset = (selectionState === null || selectionState === void 0 ? void 0 : selectionState.getFocusOffset()) ?? 0;
  const focusKey = (selectionState === null || selectionState === void 0 ? void 0 : selectionState.getFocusKey()) ?? 0;
  console.log({
    startOffset,
    endOffset,
    anchorOffset,
    focusOffset,
    focusKey
  });
};

const removeCurrentBlock = (editorState, blockKey) => {
  const contentState = editorState.getCurrentContent();
  const contentBlock = contentState.getBlockForKey(blockKey);

  let targetRange = _draftJs.SelectionState.createEmpty(contentBlock.getKey());

  targetRange = targetRange.merge({
    anchorKey: contentBlock.getKey(),
    anchorOffset: 0,
    focusKey: contentBlock.getKey(),
    focusOffset: contentBlock.getLength()
  });

  const newContentState = _draftJs.Modifier.removeRange(contentState, targetRange, 'backward');

  const blockMap = newContentState.getBlockMap().delete(blockKey);
  const newContentStateWithoutBlock = newContentState.merge({
    blockMap,
    selectionAfter: _draftJs.SelectionState.createEmpty(contentState.getKeyBefore(contentBlock.getKey()))
  });
  return _draftJs.EditorState.push(editorState, newContentStateWithoutBlock, 'remove-range');
};

const MyInput = () => {
  const [editorState, setEditorState] = (0, _react.useState)(() => _draftJs.EditorState.createEmpty(new _draftJs.CompositeDecorator([imageDecorator])));
  console.log((0, _draftJs.convertToRaw)(editorState.getCurrentContent()));
  printSelection(editorState);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "border-solid border-2 p-1"
  }, /*#__PURE__*/_react.default.createElement(_draftJs.Editor, {
    editorState: editorState,
    onChange: setEditorState,
    keyBindingFn: e => {
      return (0, _draftJs.getDefaultKeyBinding)(e);
    },
    handleKeyCommand: (command, editorState) => {
      if (command === 'backspace') {
        const contentState = editorState.getCurrentContent();
        const selectionState = editorState.getSelection();
        const nextBlock = contentState.getBlockAfter(selectionState.getAnchorKey());
        const nextBlockKey = nextBlock.getKey();

        let nextSelection = _draftJs.SelectionState.createEmpty(nextBlockKey);

        nextSelection = nextSelection.merge({
          focusOffset: nextBlock.getLength()
        });
        console.log(nextSelection.toJS());

        const nextEditorState = _draftJs.EditorState.forceSelection(editorState, nextSelection);

        setEditorState(nextEditorState); // setEditorState(
        //   EditorState.push(
        //     nextEditorState,
        //     nextEditorState.getCurrentContent(),
        //     'move-block'
        //   )
        // );

        return 'handled';
      }

      const newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        setEditorState(newState);
        return 'handled';
      }

      return 'not-handled';
    }
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(InserImageButton, {
    editorState: editorState,
    setEditorState: setEditorState
  }), /*#__PURE__*/_react.default.createElement(ChangeSelectionButton, {
    editorState: editorState,
    setEditorState: setEditorState
  })));
};

var _default = MyInput;
exports.default = _default;