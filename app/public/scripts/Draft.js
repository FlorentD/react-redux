"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InserImageButton = function InserImageButton(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      var contentState = editorState.getCurrentContent();
      var contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', {
        src: 'https://vignette.wikia.nocookie.net/naruto/images/8/8b/Naruto_prof_1.png/revision/latest/scale-to-width-down/185?cb=20120304203839&path-prefix=pl'
      });
      var entityKey = contentStateWithEntity.getLastCreatedEntityKey();

      var newEditorState = _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');

      setEditorState(_draftJs.EditorState.forceSelection(newEditorState, newEditorState.getCurrentContent().getSelectionAfter()));
    }
  }, "Insert image");
};

var ChangeSelectionButton = function ChangeSelectionButton(_ref2) {
  var editorState = _ref2.editorState,
      setEditorState = _ref2.setEditorState;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      var contentState = editorState.getCurrentContent();
      var selectionState = editorState.getSelection();
      var nextBlock = contentState.getBlockAfter(selectionState.getAnchorKey());
      var nextBlockKey = nextBlock.getKey();

      var nextSelection = _draftJs.SelectionState.createEmpty(nextBlockKey);
    }
  }, "Change Selection");
};

var imageStrategy = function imageStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'IMAGE';
  }, callback);
};

var Image = function Image(_ref3) {
  var contentState = _ref3.contentState,
      entityKey = _ref3.entityKey;

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      src = _contentState$getEnti.src;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isTargeted = _useState2[0],
      target = _useState2[1];

  (0, _react.useEffect)(function () {
    document.addEventListener('click', function (e) {
      target(e.target.id === 'MY_ID');
    });
  }, []);

  if (!src) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "MY_ID",
    style: {
      cursor: 'pointer',
      border: isTargeted ? '2px solid red' : 'none'
    }
  }, isTargeted && /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return console.log('DELETE');
    }
  }, "DELETE"), /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: "",
    contentEditable: false
  }));
};

var imageDecorator = {
  strategy: imageStrategy,
  component: Image
};

var isPreviousBlockAnImage = function isPreviousBlockAnImage(editorState) {
  var currentContent = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();
  var anchorKey = selectionState.getAnchorKey();
  var beforeBlock = currentContent.getBlockBefore(anchorKey);
  var blockType = beforeBlock === null || beforeBlock === void 0 ? void 0 : beforeBlock.get('type');
  return blockType === 'atomic';
};

var isCurrentBlockAllSelected = function isCurrentBlockAllSelected(editorState) {
  var _currentContentBlock$, _selectionState$getSt, _selectionState$getEn;

  var selectionState = editorState.getSelection();
  var anchorKey = selectionState.getAnchorKey();
  var currentContent = editorState.getCurrentContent();
  var currentContentBlock = currentContent.getBlockForKey(anchorKey);
  var blockTextLength = currentContentBlock === null || currentContentBlock === void 0 ? void 0 : (_currentContentBlock$ = currentContentBlock.get('text')) === null || _currentContentBlock$ === void 0 ? void 0 : _currentContentBlock$.length;
  var start = (_selectionState$getSt = selectionState === null || selectionState === void 0 ? void 0 : selectionState.getStartOffset()) !== null && _selectionState$getSt !== void 0 ? _selectionState$getSt : 0;
  var end = (_selectionState$getEn = selectionState === null || selectionState === void 0 ? void 0 : selectionState.getEndOffset()) !== null && _selectionState$getEn !== void 0 ? _selectionState$getEn : 0;
  return blockTextLength === end - start;
};

var printSelection = function printSelection(editorState) {
  var _selectionState$getSt2, _selectionState$getEn2, _selectionState$getAn, _selectionState$getFo, _selectionState$getFo2;

  var selectionState = editorState.getSelection();
  var startOffset = (_selectionState$getSt2 = selectionState === null || selectionState === void 0 ? void 0 : selectionState.getStartOffset()) !== null && _selectionState$getSt2 !== void 0 ? _selectionState$getSt2 : 0;
  var endOffset = (_selectionState$getEn2 = selectionState === null || selectionState === void 0 ? void 0 : selectionState.getEndOffset()) !== null && _selectionState$getEn2 !== void 0 ? _selectionState$getEn2 : 0;
  var anchorOffset = (_selectionState$getAn = selectionState === null || selectionState === void 0 ? void 0 : selectionState.getAnchorOffset()) !== null && _selectionState$getAn !== void 0 ? _selectionState$getAn : 0;
  var focusOffset = (_selectionState$getFo = selectionState === null || selectionState === void 0 ? void 0 : selectionState.getFocusOffset()) !== null && _selectionState$getFo !== void 0 ? _selectionState$getFo : 0;
  var focusKey = (_selectionState$getFo2 = selectionState === null || selectionState === void 0 ? void 0 : selectionState.getFocusKey()) !== null && _selectionState$getFo2 !== void 0 ? _selectionState$getFo2 : 0;
  console.log({
    startOffset: startOffset,
    endOffset: endOffset,
    anchorOffset: anchorOffset,
    focusOffset: focusOffset,
    focusKey: focusKey
  });
};

var removeCurrentBlock = function removeCurrentBlock(editorState, blockKey) {
  var contentState = editorState.getCurrentContent();
  var contentBlock = contentState.getBlockForKey(blockKey);

  var targetRange = _draftJs.SelectionState.createEmpty(contentBlock.getKey());

  targetRange = targetRange.merge({
    anchorKey: contentBlock.getKey(),
    anchorOffset: 0,
    focusKey: contentBlock.getKey(),
    focusOffset: contentBlock.getLength()
  });

  var newContentState = _draftJs.Modifier.removeRange(contentState, targetRange, 'backward');

  var blockMap = newContentState.getBlockMap().delete(blockKey);
  var newContentStateWithoutBlock = newContentState.merge({
    blockMap: blockMap,
    selectionAfter: _draftJs.SelectionState.createEmpty(contentState.getKeyBefore(contentBlock.getKey()))
  });
  return _draftJs.EditorState.push(editorState, newContentStateWithoutBlock, 'remove-range');
};

var MyInput = function MyInput() {
  var _useState3 = (0, _react.useState)(function () {
    return _draftJs.EditorState.createEmpty(new _draftJs.CompositeDecorator([imageDecorator]));
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      editorState = _useState4[0],
      setEditorState = _useState4[1];

  console.log((0, _draftJs.convertToRaw)(editorState.getCurrentContent()));
  printSelection(editorState);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "border-solid border-2 p-1"
  }, /*#__PURE__*/_react.default.createElement(_draftJs.Editor, {
    editorState: editorState,
    onChange: setEditorState,
    keyBindingFn: function keyBindingFn(e) {
      return (0, _draftJs.getDefaultKeyBinding)(e);
    },
    handleKeyCommand: function handleKeyCommand(command, editorState) {
      if (command === 'backspace') {
        var contentState = editorState.getCurrentContent();
        var selectionState = editorState.getSelection();
        var nextBlock = contentState.getBlockAfter(selectionState.getAnchorKey());
        var nextBlockKey = nextBlock.getKey();

        var nextSelection = _draftJs.SelectionState.createEmpty(nextBlockKey);

        nextSelection = nextSelection.merge({
          focusOffset: nextBlock.getLength()
        });
        console.log(nextSelection.toJS());

        var nextEditorState = _draftJs.EditorState.forceSelection(editorState, nextSelection);

        setEditorState(nextEditorState); // setEditorState(
        //   EditorState.push(
        //     nextEditorState,
        //     nextEditorState.getCurrentContent(),
        //     'move-block'
        //   )
        // );

        return 'handled';
      }

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        setEditorState(newState);
        return 'handled';
      }

      return 'not-handled';
    }
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(InserImageButton, {
    editorState: editorState,
    setEditorState: setEditorState
  }), /*#__PURE__*/_react.default.createElement(ChangeSelectionButton, {
    editorState: editorState,
    setEditorState: setEditorState
  })));
};

var _default = MyInput;
exports.default = _default;