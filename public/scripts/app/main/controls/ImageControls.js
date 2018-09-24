import React, { Component, Fragment } from 'react';
import { AtomicBlockUtils } from 'draft-js';
import LinkButton from '../Button';
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

const Image = props => {
  const { src } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <div className="image-container">
      <img src={src} />
    </div>
  );
};

const imageStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'IMAGE'
    );
  }, callback);
};

export const decorator = {
  strategy: imageStrategy,
  component: Image,
};

class ImageControls extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpened: false, imageUrl: '' };
  }

  toggleModal = () => {
    this.setState({ modalOpened: !this.state.modalOpened, imageUrl: '' });
  };

  onImageChange = e => {
    this.setState({ imageUrl: e.target.value });
  };

  onValidation = () => {
    const { editorState } = this.props;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'IMAGE',
      'IMMUTABLE',
      {
        src: this.state.imageUrl,
      }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    this.props.onToggle(
      AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ')
    );
    this.toggleModal();
  };

  render() {
    return (
      <Fragment>
        <LinkButton label="image" onToggle={this.toggleModal} />
        <div className="static-modal">
          <Modal show={this.state.modalOpened} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter une image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <ControlLabel>Entrez le lien de l'image</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.imageUrl}
                  placeholder="Entrez votre lien..."
                  onChange={this.onImageChange}
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

export default ImageControls;
