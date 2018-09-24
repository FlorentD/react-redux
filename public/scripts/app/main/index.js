import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  Editor,
  convertToRaw,
  EditorState,
  RichUtils,
  CompositeDecorator,
} from 'draft-js';
import { getEditorState, updateEditorState } from './redux';
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
import EmojiControls from './controls/EmojiControls';
import linkify from './enhancers/linkify';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
    };
    props.updateEditorState(
      EditorState.set(EditorState.createEmpty(), {
        decorator: new CompositeDecorator([
          linkDecorator,
          mediaDecorator,
          imageDecorator,
          linkify,
        ]),
      })
    );
    this.onChange = editorState => props.updateEditorState(editorState);
  }
  logState = () => {
    const content = this.props.editorState.getCurrentContent();
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
      RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle)
    );
  };
  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.props.editorState, blockType));
  };
  updateEditorState = newEditorState => {
    this.onChange(newEditorState);
  };
  render() {
    return (
      <div style={{ border: '1px solid black' }}>
        {this.state.edit && (
          <div className="blocks-container">
            <div>
              <InlineStyleControls
                editorState={this.props.editorState}
                onToggle={this.toggleInlineStyle}
              />
            </div>
            <div>
              <BlockTypeControls
                editorState={this.props.editorState}
                onToggle={this.toggleBlockType}
              />
            </div>
            <div>
              <AlignementControls
                editorState={this.props.editorState}
                onToogle={this.updateEditorState}
              />
            </div>
            <div>
              <LinkControls
                editorState={this.props.editorState}
                onToggle={this.updateEditorState}
              />
            </div>
            <div>
              <MediaControls
                editorState={this.props.editorState}
                onToggle={this.updateEditorState}
              />
            </div>
            <div>
              <ImageControls
                editorState={this.props.editorState}
                onToggle={this.updateEditorState}
              />
            </div>
            <div>
              <EmojiControls />
            </div>
          </div>
        )}
        <div style={{ margin: 5, padding: 5 }}>
          <Editor
            editorState={this.props.editorState}
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

const mapStateToProps = createStructuredSelector({
  editorState: getEditorState,
});

const mapDispatchToProps = {
  updateEditorState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
