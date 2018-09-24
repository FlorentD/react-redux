import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getEditorState, updateEditorState } from '../redux';
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import { EditorState, RichUtils, Modifier } from 'draft-js';
import LinkButton from '../Button';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = { showCommands: false };
  }

  showInlineCommands = () => {
    this.setState({ showCommands: true });
  };

  left = 0;
  top = 0;

  deleteLink = () => {
    const { editorState, contentState, updateEditorState } = this.props;
    const newContentState = Modifier.applyEntity(
      contentState,
      contentState.getSelectionAfter(),
      null
    );
    updateEditorState(
      EditorState.push(editorState, newContentState, 'remove-link')
    );
  };

  getLink = () => {
    const { contentState, entityKey } = this.props;
    const entity = contentState.getEntity(entityKey).getData();
    return entity.url;
  };

  openTarget = e => {
    e.preventDefault();
    window.open(this.getLink(), '_blank');
  };

  closeInlineCommads = () => {
    this.setState({ showCommands: false });
  };

  componentDidUpdate(prevProps) {
    const { width, height } = this.target.getBoundingClientRect();
    this.left = width + 5;
    this.top = height + 5;

    setTimeout(() => {
      if (this.hasFocus(prevProps) && !this.hasFocus(this.props)) {
        this.closeInlineCommads();
      }
    }, 0);
  }

  hasFocus = ({ contentState, editorState }) => {
    const linkSelection = contentState.getSelectionAfter();
    const editorSelector = editorState.getSelection();
    const hasSameContent =
      linkSelection.getStartKey() === editorSelector.getStartKey();
    const hasSameSelectionContent =
      editorSelector.getStartOffset() >= linkSelection.getStartOffset();
    return hasSameContent && hasSameSelectionContent;
  };

  render() {
    const { contentState, entityKey, children } = this.props;
    const { url } = contentState.getEntity(entityKey).getData();
    return (
      <Fragment>
        <div style={{ display: 'inline-block' }}>
          <a
            href={url}
            target="_blank"
            ref={link => (this.target = link)}
            onClick={this.showInlineCommands}
          >
            {children}
          </a>
          {this.state.showCommands && (
            <div
              className="link-deletion"
              style={{ marginLeft: this.left, marginTop: `-${this.top}px` }}
            >
              <a
                className="link-preview"
                href={this.getLink()}
                onClick={this.openTarget}
              >
                {this.getLink()}
              </a>{' '}
              | <a onClick={this.deleteLink}>Supprimer</a>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const linkStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'LINK'
    );
  }, callback);
};

const mapStateToProps = createStructuredSelector({
  editorState: getEditorState,
});

const mapDispatchToProps = {
  updateEditorState,
};

export const decorator = {
  strategy: linkStrategy,
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Link),
};

class LinkControls extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpened: false, linkValue: '' };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.modalOpened && !prevState.modalOpened) {
      this.setState({ linkValue: this.getCurrentLink() });
    }
  }

  onToggle = () => {
    this.setState({ modalOpened: !this.state.modalOpened, linkValue: '' });
  };

  onLinkChange = e => {
    this.setState({ linkValue: e.target.value });
  };

  onValidation = () => {
    this.props.onToggle(
      this.getEntityKey() ? this.updateLink() : this.createLink()
    );
    this.onToggle();
  };

  createLink() {
    const { editorState } = this.props;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      { url: this.state.linkValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    return RichUtils.toggleLink(
      newEditorState,
      newEditorState.getSelection(),
      entityKey
    );
  }

  updateLink() {
    const { editorState } = this.props;
    const existingEntity = this.getEntityKey();
    const contentState = editorState.getCurrentContent();
    const newContentState = contentState.replaceEntityData(existingEntity, {
      url: this.state.linkValue,
    });
    return EditorState.push(editorState, {
      currentContent: newContentState,
    });
  }

  removeLink = () => {
    const { editorState } = this.props;
    const contentState = editorState.getCurrentContent();
    const newContentState = Modifier.applyEntity(
      contentState,
      editorState.getSelection(),
      null
    );
    this.props.onToggle(
      EditorState.push(editorState, newContentState, 'remove-link')
    );
  };

  getEntityKey() {
    const { editorState } = this.props;
    const contentState = editorState.getCurrentContent();
    const startKey = editorState.getSelection().getStartKey();
    const startOffset = editorState.getSelection().getStartOffset();
    const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
    return blockWithLinkAtBeginning.getEntityAt(startOffset);
  }

  getEntity() {
    const { editorState } = this.props;
    const contentState = editorState.getCurrentContent();
    const entityKey = this.getEntityKey();
    return !entityKey ? undefined : contentState.getEntity(entityKey);
  }

  getCurrentLink = () => {
    const entity = this.getEntity();
    let url = '';
    if (entity) {
      url = entity.getData().url;
    }
    return url;
  };

  getCurrentSelection = () => {
    const { editorState } = this.props;
    const selectionState = editorState.getSelection();
    const anchorKey = selectionState.getAnchorKey();
    const currentContent = editorState.getCurrentContent();
    const currentContentBlock = currentContent.getBlockForKey(anchorKey);
    const start = selectionState.getStartOffset();
    const end = selectionState.getEndOffset();
    return currentContentBlock.getText().slice(start, end);
  };

  render() {
    return (
      <Fragment>
        <LinkButton label="insert_link" onToggle={this.onToggle} />
        <LinkButton label="format_clear" onToggle={this.removeLink} />
        <div className="static-modal">
          <Modal show={this.state.modalOpened} onHide={this.onToggle}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un Lien</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.getCurrentSelection()}
              <FormGroup>
                <ControlLabel>Entrez le lien</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.linkValue}
                  placeholder="Entrez votre lien..."
                  onChange={this.onLinkChange}
                />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.onToggle}>Fermer</Button>
              <Button bsStyle="primary" onClick={this.onValidation}>
                Ajouter
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Fragment>
    );
  }
}

export default LinkControls;
