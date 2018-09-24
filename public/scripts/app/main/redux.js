import { EditorState } from 'draft-js';

const NAME = 'EDITOR';

const UPDATE_EDITOR_STATE = `${NAME}/UPDATE_EDITOR_STATE`;

const initialState = {
  editorState: EditorState.createEmpty(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EDITOR_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const updateEditorState = editorState => dispatch =>
  dispatch({ type: UPDATE_EDITOR_STATE, payload: { editorState } });

export const getEditorState = state => state[NAME].editorState;

export default { [NAME]: reducer };
