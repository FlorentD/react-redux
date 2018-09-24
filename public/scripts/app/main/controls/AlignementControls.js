import React, { Component } from 'react';
import { Modifier, EditorState } from 'draft-js';
import Button from '../Button';
import { Map } from 'immutable';

const ALIGN_TYPES = [
  { label: 'format_align_left' },
  { label: 'format_align_center' },
  { label: 'format_align_right' },
  { label: 'format_align_justify' },
];

class AlignementControls extends Component {
  constructor(props) {
    super(props);
    this.state = { currentAlign: 'format_align_left' };
  }
  componentDidUpdate() {
    const { editorState } = this.props;
    const currentContent = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const currentAlignmentStyle = currentContent
      .getBlockForKey(selection.getStartKey())
      .getData()
      .get('alignmentStyle');
    if (
      !currentAlignmentStyle &&
      this.state.currentAlign !== 'format_align_left'
    ) {
      this.setState({ currentAlign: 'format_align_left' });
    }
    if (
      currentAlignmentStyle &&
      this.state.currentAlign !== currentAlignmentStyle
    ) {
      this.setState({ currentAlign: currentAlignmentStyle });
    }
  }

  onToggle = label => {
    const { editorState, onToogle } = this.props;
    const currentContent = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    onToogle(
      EditorState.push(
        editorState,
        Modifier.setBlockData(
          currentContent,
          selection,
          Map({ alignmentStyle: label })
        ),
        'change-alignment'
      )
    );
  };

  render() {
    const { currentAlign } = this.state;
    return ALIGN_TYPES.map(type => (
      <Button
        key={type.label}
        label={type.label}
        active={currentAlign === type.label}
        onToggle={() => this.onToggle(type.label)}
      />
    ));
  }
}

export default AlignementControls;
