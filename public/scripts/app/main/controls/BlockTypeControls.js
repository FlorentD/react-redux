import React, { Component, Fragment } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import find from 'lodash/fp/find';
import prop from 'lodash/fp/prop';
import flow from 'lodash/fp/flow';
import Button from '../Button';

const TITLE_STYLE_TYPES = [
  { label: 'Normal', style: 'unstyled' },
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
];

const BLOCK_TYPES = [
  { label: 'format_quote', style: 'blockquote' },
  { label: 'format_list_bulleted', style: 'unordered-list-item' },
  { label: 'format_list_numbered', style: 'ordered-list-item' },
];

class BlockTypesControls extends Component {
  constructor(props) {
    super(props);
    this.state = { defaultTitle: 'unstyled' };
  }

  componentDidUpdate() {
    const { editorState } = this.props;
    const currentContent = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const currentBlock = currentContent
      .getBlockForKey(selection.getStartKey())
      .get('type');
    if (this.state.defaultTitle === currentBlock) {
      return;
    }
    this.setState({ defaultTitle: currentBlock });
  }

  getTitle = () => {
    const label = flow(
      find(title => title.style === this.state.defaultTitle),
      prop('label')
    )(TITLE_STYLE_TYPES);
    return label || 'Normal';
  };

  render() {
    const { onToggle } = this.props;

    return (
      <Fragment>
        {BLOCK_TYPES.map(type => (
          <Button
            key={type.label}
            active={false}
            label={type.label}
            onToggle={onToggle}
            style={type.style}
          />
        ))}
        <DropdownButton
          title={this.getTitle()}
          id="title-style-types"
          onSelect={onToggle}
        >
          {TITLE_STYLE_TYPES.map(type => {
            return (
              <MenuItem
                eventKey={type.style}
                key={type.label}
                id={type.label}
                active={type.label === this.getTitle()}
              >
                {type.label}
              </MenuItem>
            );
          })}
        </DropdownButton>
      </Fragment>
    );
  }
}

export default BlockTypesControls;
