'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutobind = require('react-autobind');

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

    (0, _reactAutobind2.default)(_this);
    return _this;
  }

  _createClass(Radio, [{
    key: 'handle',
    value: function handle(e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      e.target.name = this.props.name;
      e.target.value = this.props.value;
      this.props.onChange(e);
    }
  }, {
    key: 'render',
    value: function render() {

      /*
         this didn't work -- inital state matched the visible, after click
         the selected radio button disapeared.
         const val = {
                checked: this.props.match === this.props.value,
                value: this.props.value
              };
         console.log('Radio rendered: ', this.props.name, val.value, val.checked);
      return <input type="radio" {...val} onChange={this.props.onChange} />;
      */

      /*
        9737   Sun
        183     &middot;
        ⚪	9898	26AA	 	MEDIUM WHITE CIRCLE
        ⚫	9899	26AB	 	MEDIUM BLACK CIRCLE
         U+26AA	⚪	e2 9a aa	MEDIUM WHITE CIRCLE
        U+26AB	⚫	e2 9a ab	MEDIUM BLACK CIRCLE
        U+1F534	🔴	f0 9f 94 b4	LARGE RED CIRCLE
        U+1F535	🔵	f0 9f 94 b5	LARGE BLUE CIRCLE
      */

      var st = { border: 'none', backgroundColor: 'white', borderRadius: '25px' };
      var checked = this.props.match === this.props.value;
      var symbol = checked ? String.fromCharCode(9899) : String.fromCharCode(9898);
      return _react2.default.createElement(
        'button',
        { type: 'button', onClick: this.handle, style: st },
        symbol
      );
    }
  }]);

  return Radio;
}(_react2.default.Component);

exports.default = Radio;
