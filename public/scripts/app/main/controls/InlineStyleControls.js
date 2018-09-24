import React from 'react';
import Button from '../Button';

const INLINE_STYLES = [
  { label: 'format_bold', style: 'BOLD' },
  { label: 'format_italic', style: 'ITALIC' },
  { label: 'format_underlined', style: 'UNDERLINE' },
];

const InlineStyleControls = props => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return INLINE_STYLES.map(type => (
    <Button
      key={type.label}
      active={currentStyle.has(type.style)}
      label={type.label}
      onToggle={props.onToggle}
      style={type.style}
    />
  ));
};

export default InlineStyleControls;
