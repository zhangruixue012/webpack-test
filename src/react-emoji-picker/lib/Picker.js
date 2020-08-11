"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _emojione = _interopRequireDefault(require("emojione"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 0.35rem;\n  padding: 0.8rem\n  margin: 0;\n  cursor: pointer;\n\n  img {\n    opacity: ", ";\n    height: 24px !important;\n    width: 24px !important;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n  float: left;\n  width: 15%;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.21rem;\n  img {\n    height: 26px !important;\n    width: 26px !important;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.8rem;\n  padding-right: 0;\n  border-radius: 2px;\n  align-items: baseline;\n  float: left;\n  width: 75%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  border: 1px solid #eee;\n  padding: 0.4rem 0.8rem;\n  margin: 0;\n  border-radius: 2px;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: ", ";\n  opacity: ", ";\n  transition: opacity 300ms linear;\n  margin-top: 1rem;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background: white;\n  box-shadow: 3px 3px 5px #BFBDBD;\n  width: 340px;\n  height: 350px;\n  overflow-y: scroll;\n  z-index: 100;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* list of emoji's sourced from http://getemoji.com */
var PEOPLE_EMOJIS = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '😇', '🤣', '☺️', '😊', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😵', '😳', '😱', '😨', '😰', '😢', '😥', '🤤', '😭', '😓', '😪', '😴', '🙄', '🤔', '🤥', '😬', '🤐', '🤢', '🤧', '😷', '🤒', '🤕', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👐', '🙌', '👏', '🙏', '🤝', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '✌️', '🤘', '👌', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🖐', '🖖', '👋', '🤙', '💪', '🖕', '✍️', '🤳', '💅', '🖖', '💄', '💋', '👄', '👅', '👂', '👃', '👣', '👁', '👀', '👗', '👠', '👞', '👟', '👒', '🎩', '🎓', '👑', '⛑', '🎒', '👝', '👛', '👜', '💼', '👓', '🕶', '☂️'];
var ANIMALS_NATURE_EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙊', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐚', '🐞', '🐜', '🕷', '🕸', '🐢', '🐍', '🦎', '🦂', '🦀', '🦑', '🐙', '🦐', '🐠', '🐟', '🐡', '🐬', '🦈', '🐳', '🐋', '🐊', '🐆', '🐅', '🐃', '🐂', '🐄', '🦌', '🐪', '🐫', '🐘', '🦏', '🦍', '🐎', '🐖', '🐐', '🐏', '🐑', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊', '🐇', '🐁', '🐀', '🐿', '🐾', '🐉', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🌾', '💐', '🌷', '🌹', '🥀', '🌻', '🌼', '🌸', '🌺', '🌎', '🌍', '🌏', '🌕', '🌖', '🌔', '🌚', '🌝', '🌞', '🌛', '🌜', '🌙', '💫', '⭐️', '🌟', '✨', '⚡️', '🔥', '💥', '☄️', '☀️', '🌤', '⛅️', '🌥', '🌦', '🌈', '☁️', '🌧', '⛈', '🌩', '🌨', '☃️', '⛄️', '❄️', '🌬', '💨', '🌪', '🌫', '🌊', '💧', '💦', '☔️'];
var FOOD_SPORTS_EMOJIS = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥝', '🥑', '🍅', '🍆', '🥒', '🥕', '🌽', '🌶', '🥔', '🍠', '🌰', '🥜', '🍯', '🥐', '🍞', '🥖', '🧀', '🥚', '🍳', '🥓', '🥞', '🍤', '🍗', '🍖', '🍕', '🌭', '🍔', '🍟', '🥙', '🌮', '🌯', '🥗', '🥘', '🍝', '🍜', '🍲', '🍥', '🍣', '🍱', '🍛', '🍚', '🍙', '🍘', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥛', '🍼', '☕️', '🍵', '🍶', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🍾', '🥄', '🍴', '🍽', '⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🥅', '🏒', '🏑', '🏏', '⛳️', '🏹', '🎣', '🥊', '🥋', '⛸', '🎿', '⛷', '🏂', '🏋', '🤺', '⛹️', '🏌', '🏄', '🏊', '🤽', '🚣', '🏇', '🚴', '🚵', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎳', '🎮', '🏳', '🏴', '🏁', '🚩', '🎽', '🥇', '🥈', '🥉', '🏆'];
var TRAVEL_PLACES_EMOJIS = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🛴', '🚲', '🛵', '🏍', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '🚁', '🛩', '✈️', '🛫', '🛬', '🚀', '🛰', '💺', '🛶', '⛵️', '🛥', '🚤', '🛳', '⛴', '🚢', '⚓️', '🚧', '⛽️', '🚏', '🚦', '🚥', '🗺', '🗿', '🗽', '⛲️', '🗼', '🏰', '🏯', '🏟', '🎡', '🎢', '🎠', '⛱', '🏖', '🏝', '⛰', '🏔', '🗻', '🌋', '🏜', '🏕', '⛺️', '🛤', '🛣', '🏗', '🏭', '🏠', '🏡', '🏘', '🏚', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛', '⛪️', '🕌', '🕍', '🕋', '⛩', '🗾', '🎑', '🏞', '🌅', '🌄', '🌠', '🎇', '🎆', '🌇', '🌆', '🏙', '🌃', '🌌', '🌉', '🌁', '🎭', '🎨'];
var OBJECTS_EMOJIS = ['🆓', '📗', '📕', '⌚️', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '🕹', '🗜', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽', '🎞', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙', '🎚', '🎛', '⏱', '⏲', '⏰', '🕰', '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯', '🗑', '🛢', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🔧', '🔨', '⚒', '⛏', '⚙️', '💣', '🔪', '🗡', '⚔️', '🛡', '🚬', '⚰️', '⚱️', '🏺', '🔮', '📿', '💈', '⚗️', '🔭', '🔬', '🕳', '💊', '💉', '🌡', '🚽', '🚰', '🚿', '🛁', '🛀', '🛎', '🔑', '🗝', '🚪', '🛋', '🛏', '🖼', '🛍', '🛒', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🎎', '🏮', '🎐', '✉️', '📪', '📮', '📯', '📜', '📃', '📄', '📑', '📊', '📈', '📉', '🗒', '🗓', '📆', '📅', '📇', '🗃', '🗳', '🗄', '📋', '🗞', '📰', '📘', '📚', '📖', '🔖', '🔗', '📎', '📐', '📏', '📍', '📌', '🖊', '🖌', '🖍', '📝', '✏️', '🔍', '🔓'];
var SYMBOLS_FLAGS_EMOJIS = ['❤️', '💛', '💚', '💙', '💜', '🖤', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❕', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️', '🔰', '♻️', '✅', '🈯', '💹', '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🚺', '🚼', '🎵', '🎶', '➕', '➖', '➗', '✖️', '💲', '💱', '™️', '©️', '®️', '〰️', '➰', '➿', '🔚', '🔙', '🔛', '🔝', '✔️', '☑️', '🔈', '🔇', '🔉', '🔊', '🔔', '🔕', '📣', '📢', '🗨', '💬', '💭', '🗯', '♠️', '♣️', '♥️', '♦️', '🃏', '🎴', '🀄'];

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      emojis: PEOPLE_EMOJIS,
      emojiCategory: 'PEOPLE_EMOJIS'
    };
    return _this;
  }

  _createClass(_default, [{
    key: "toggleEmojis",
    value: function toggleEmojis(emoji) {
      switch (emoji) {
        case 'PEOPLE_EMOJIS':
          this.setState({
            emojis: PEOPLE_EMOJIS,
            emojiCategory: 'PEOPLE_EMOJIS'
          });
          break;

        case 'ANIMALS_NATURE_EMOJIS':
          this.setState({
            emojis: ANIMALS_NATURE_EMOJIS,
            emojiCategory: 'ANIMALS_NATURE_EMOJIS'
          });
          break;

        case 'FOOD_SPORTS_EMOJIS':
          this.setState({
            emojis: FOOD_SPORTS_EMOJIS,
            emojiCategory: 'FOOD_SPORTS_EMOJIS'
          });
          break;

        case 'TRAVEL_PLACES_EMOJIS':
          this.setState({
            emojis: TRAVEL_PLACES_EMOJIS,
            emojiCategory: 'TRAVEL_PLACES_EMOJIS'
          });
          break;

        case 'OBJECTS_EMOJIS':
          this.setState({
            emojis: OBJECTS_EMOJIS,
            emojiCategory: 'OBJECTS_EMOJIS'
          });
          break;

        case 'SYMBOLS_FLAGS_EMOJIS':
          this.setState({
            emojis: SYMBOLS_FLAGS_EMOJIS,
            emojiCategory: 'SYMBOLS_FLAGS_EMOJIS'
          });
          break;

        default:
          this.setState({
            emojis: PEOPLE_EMOJIS,
            emojiCategory: 'PEOPLE_EMOJIS'
          });
      }
    }
  }, {
    key: "onEmojiSelect",
    value: function onEmojiSelect(e) {
      if (e.target.alt === undefined) {
        return;
      }

      var emoji = {
        image: e.target,
        unicode: e.target.alt,
        shortname: e.target.title
      };
      this.props.onEmojiSelected(emoji);
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var emojiCategory = this.state.emojiCategory;
      return _react.default.createElement(Tabs, null, _react.default.createElement(Title, {
        selected: emojiCategory === 'PEOPLE_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('PEOPLE_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('😀')
        }
      }), _react.default.createElement(Title, {
        selected: emojiCategory === 'ANIMALS_NATURE_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('ANIMALS_NATURE_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('🦊')
        }
      }), _react.default.createElement(Title, {
        selected: emojiCategory === 'FOOD_SPORTS_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('FOOD_SPORTS_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('🍏')
        }
      }), _react.default.createElement(Title, {
        selected: emojiCategory === 'TRAVEL_PLACES_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('TRAVEL_PLACES_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('🚗')
        }
      }), _react.default.createElement(Title, {
        selected: emojiCategory === 'OBJECTS_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('OBJECTS_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('💎')
        }
      }), _react.default.createElement(Title, {
        selected: emojiCategory === 'SYMBOLS_FLAGS_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('SYMBOLS_FLAGS_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('❤️')
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var emojis = this.state.emojis;
      var _this$props = this.props,
          visible = _this$props.visible,
          modal = _this$props.modal;
      return _react.default.createElement(Wrapper, null, _react.default.createElement(EmojiPickerWrapper, {
        visible: visible,
        modal: modal
      }, this.renderTabs(), _react.default.createElement(EmojiWrapper, null, emojis.map(function (emoji, index) {
        return _react.default.createElement(Emoji, {
          className: "ld-emoji",
          key: index,
          role: "presentation",
          onClick: _this3.onEmojiSelect.bind(_this3),
          dangerouslySetInnerHTML: {
            __html: _emojione.default.unicodeToImage(emoji)
          }
        });
      }))));
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        onEmojiSelected: _propTypes.default.func.isRequired,
        visible: _propTypes.default.bool,
        modal: _propTypes.default.bool
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        visible: true,
        modal: false
      };
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

var Wrapper = _styledComponents.default.div(_templateObject());

var EmojiPickerWrapper = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.modal ? 'absolute' : 'static';
}, function (props) {
  return props.visible ? 1 : 0;
});

var EmojiPicker = _styledComponents.default.div(_templateObject3());

var EmojiWrapper = _styledComponents.default.div(_templateObject4());

var Emoji = _styledComponents.default.span(_templateObject5());

var Tabs = _styledComponents.default.div(_templateObject6());

var Title = _styledComponents.default.p(_templateObject7(), function (props) {
  return props.selected ? '1' : '0.5';
});
