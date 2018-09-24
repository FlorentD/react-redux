import React, { Component } from 'react';
import {
  Editor,
  convertToRaw,
  EditorState,
  RichUtils,
  CompositeDecorator,
} from 'draft-js';
import InlineStyleControls from './controls/InlineStyleControls';
import BlockTypeControls from './controls/BlockTypeControls';
import AlignementControls from './controls/AlignementControls';
import LinkControls, {
  decorator as linkDecorator,
} from './controls/LinkControls';
import MediaControls, {
  decorator as mediaDecorator,
} from './controls/MediaControls';
import ImageControls, {
  decorator as imageDecorator,
} from './controls/ImageControls';
import linkify from './enhancers/linkify';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.set(EditorState.createEmpty(), {
        decorator: new CompositeDecorator([
          linkDecorator,
          mediaDecorator,
          imageDecorator,
          linkify,
        ]),
      }),
      edit: true,
    };
    this.onChange = editorState => this.setState({ editorState });
  }
  logState = () => {
    const content = this.state.editorState.getCurrentContent();
    console.log(convertToRaw(content));
  };
  toggleReadMode = () => {
    this.setState({ edit: !this.state.edit });
  };
  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };
  toggleInlineStyle = inlineStyle => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };
  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };
  updateEditorState = newEditorState => {
    this.onChange(newEditorState);
  };
  render() {
    return (
      <div style={{ border: '1px solid black' }}>
        <div className="blocks-container">
          <div>
            <InlineStyleControls
              editorState={this.state.editorState}
              onToggle={this.toggleInlineStyle}
            />
          </div>
          <div>
            <BlockTypeControls
              editorState={this.state.editorState}
              onToggle={this.toggleBlockType}
            />
          </div>
          <div>
            <AlignementControls
              editorState={this.state.editorState}
              onToogle={this.updateEditorState}
            />
          </div>
          <div>
            <LinkControls
              editorState={this.state.editorState}
              onToggle={this.updateEditorState}
            />
          </div>
          <div>
            <MediaControls
              editorState={this.state.editorState}
              onToggle={this.updateEditorState}
            />
          </div>
          <div>
            <ImageControls
              editorState={this.state.editorState}
              onToggle={this.updateEditorState}
            />
          </div>
        </div>
        <div style={{ margin: 5, padding: 5 }}>
          <Editor
            editorState={this.state.editorState}
            readOnly={!this.state.edit}
            decorator={new CompositeDecorator([linkDecorator, mediaDecorator])}
            onChange={this.onChange}
            textAlignment={['center']}
            handleKeyCommand={this.handleKeyCommand}
            blockStyleFn={contentBlock => {
              let style = '';
              if (contentBlock.getData().get('alignmentStyle')) {
                style += contentBlock.getData().get('alignmentStyle');
              }
              return style;
            }}
          />
        </div>
        <br />
        <br />
        <button onClick={this.logState}>Log state</button>
        <button onClick={this.toggleReadMode}>
          edit mode: {`${this.state.edit}`}
        </button>
      </div>
    );
  }
}

export default Main;
