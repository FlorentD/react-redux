import React, { Component, Fragment } from 'react';
import { AtomicBlockUtils } from 'draft-js';
import qs from 'qs';

import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import LinkButton from '../Button';

const EMBEDLY_API_URL = 'https://api.embed.ly/1/';

export const oembed = customConfig => {
  return fetch(
    `${EMBEDLY_API_URL}oembed?${qs.stringify({
      key: '8b7d8dd6504d41af9a77662672aabc2a',
      secure: document.location.protocol === 'https:',
      scheme: document.location.protocol.replace(':', ''),
      ...customConfig,
    })}`
  ).then(response => response.json());
};

const mediaStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'MEDIA'
    );
  }, callback);
};

const Media = props => {
  const { html, style } = props.contentState
    .getEntity(props.entityKey)
    .getData();
  return (
    <div
      className="video-container"
      style={style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const decorator = {
  strategy: mediaStrategy,
  component: Media,
};

class MediaControls extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpened: false, mediaUrl: '' };
  }

  toggleModal = () => {
    this.setState({ modalOpened: !this.state.modalOpened, mediaUrl: '' });
  };

  onMediaChange = e => {
    this.setState({ mediaUrl: e.target.value });
  };

  onValidation = () => {
    const { editorState } = this.props;
    const contentState = editorState.getCurrentContent();
    oembed({ url: this.state.mediaUrl }).then(response => {
      const contentStateWithEntity = contentState.createEntity(
        'MEDIA',
        'MUTABLE',
        {
          html: response.html,
          style: {},
        }
      );
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      this.props.onToggle(
        AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ')
      );
      this.toggleModal();
    });
  };

  render() {
    return (
      <Fragment>
        <LinkButton label="movie_creation" onToggle={this.toggleModal} />
        <div className="static-modal">
          <Modal show={this.state.modalOpened} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un media</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <ControlLabel>Entrez le lien du média</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.mediaUrl}
                  placeholder="Entrez votre lien..."
                  onChange={this.onMediaChange}
                />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.toggleModal}>Fermer</Button>
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

export default MediaControls;
