import 'emoji-mart/css/emoji-mart.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ReactDOM from 'react-dom';
import { Overlay } from 'react-bootstrap';
import { Picker } from 'emoji-mart';
import { Modifier, EditorState } from 'draft-js';
import LinkButton from '../Button';
import { updateEditorState, getEditorState } from '../redux';

class EmojiControls extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  getTarget = () => {
    return ReactDOM.findDOMNode(this.target);
  };

  showEmojis = () => {
    this.setState({ show: true });
  };

  chooseEmoji = emoji => {
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const ncs = Modifier.insertText(contentState, selection, emoji.native);
    this.props.updateEditorState(
      EditorState.push(editorState, ncs, 'insert-fragment')
    );
    this.hideEmojis();
  };

  hideEmojis = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <LinkButton
          label="insert_emoticon"
          ref={link => (this.target = link)}
          onToggle={this.showEmojis}
        />
        <Overlay
          container={this}
          target={this.getTarget}
          show={this.state.show}
          placement="right"
        >
          <div
            style={{
              position: 'absolute',
              backgroundColor: '#FFF',
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
              border: '1px solid #CCC',
              borderRadius: 3,
              marginLeft: 0,
              marginTop: 5,
              padding: 10,
              zIndex: 100,
            }}
          >
            <Picker title="" onSelect={this.chooseEmoji} />
          </div>
        </Overlay>
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
)(EmojiControls);
