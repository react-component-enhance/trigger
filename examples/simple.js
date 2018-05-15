webpackJsonp([0],{

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(153);


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rce_trigger__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rce_trigger_assets_index_less__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rce_trigger_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rce_trigger_assets_index_less__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-console:0 */






function getPopupAlign(state) {
  return {
    offset: [state.offsetX, state.offsetY],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  };
}

var builtinPlacements = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  }
};

function preventDefault(e) {
  e.preventDefault();
}

function getPopupContainer(trigger) {
  return trigger.parentNode;
}

var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      mask: false,
      maskClosable: false,
      placement: 'right',
      trigger: {
        hover: 1
      },
      offsetX: undefined,
      offsetY: undefined,
      stretch: ''
    }, _this.onPlacementChange = function (e) {
      _this.setState({
        placement: e.target.value
      });
    }, _this.onStretch = function (e) {
      _this.setState({
        stretch: e.target.value
      });
    }, _this.onTransitionChange = function (e) {
      _this.setState({
        transitionName: e.target.checked ? e.target.value : ''
      });
    }, _this.onTriggerChange = function (e) {
      var trigger = _extends({}, _this.state.trigger);
      if (e.target.checked) {
        trigger[e.target.value] = 1;
      } else {
        delete trigger[e.target.value];
      }
      _this.setState({
        trigger: trigger
      });
    }, _this.onOffsetXChange = function (e) {
      var targetValue = e.target.value;
      _this.setState({
        offsetX: targetValue || undefined
      });
    }, _this.onOffsetYChange = function (e) {
      var targetValue = e.target.value;
      _this.setState({
        offsetY: targetValue || undefined
      });
    }, _this.onVisibleChange = function (visible) {
      console.log('tooltip', visible);
    }, _this.onMask = function (e) {
      _this.setState({
        mask: e.target.checked
      });
    }, _this.onMaskClosable = function (e) {
      _this.setState({
        maskClosable: e.target.checked
      });
    }, _this.destroy = function () {
      _this.setState({
        destroyed: true
      });
    }, _this.destroyPopupOnHide = function (e) {
      _this.setState({
        destroyPopupOnHide: e.target.checked
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Test.prototype.render = function render() {
    var state = this.state;
    var trigger = state.trigger;
    if (state.destroyed) {
      return null;
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { margin: '10px 20px' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          'placement:',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            { value: state.placement, onChange: this.onPlacementChange },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              'right'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              'left'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              'top'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              'bottom'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              'topLeft'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              'topRight'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              'bottomRight'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              null,
              'bottomLeft'
            )
          )
        ),
        '\xA0\xA0\xA0\xA0',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          'Stretch:',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            { value: state.stretch, onChange: this.onStretch },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: '' },
              '--NONE--'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'width' },
              'width'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'minWidth' },
              'minWidth'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'height' },
              'height'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { value: 'minHeight' },
              'minHeight'
            )
          )
        ),
        '\xA0\xA0\xA0\xA0',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            value: 'rce-trigger-popup-zoom',
            type: 'checkbox',
            onChange: this.onTransitionChange,
            checked: state.transitionName === 'rce-trigger-popup-zoom'
          }),
          'transitionName'
        ),
        '\xA0\xA0\xA0\xA0 trigger:',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            value: 'hover',
            checked: !!trigger.hover,
            type: 'checkbox',
            onChange: this.onTriggerChange
          }),
          'hover'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            value: 'focus',
            checked: !!trigger.focus,
            type: 'checkbox',
            onChange: this.onTriggerChange
          }),
          'focus'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            value: 'click',
            checked: !!trigger.click,
            type: 'checkbox',
            onChange: this.onTriggerChange
          }),
          'click'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            value: 'contextMenu',
            checked: !!trigger.contextMenu,
            type: 'checkbox',
            onChange: this.onTriggerChange
          }),
          'contextMenu'
        ),
        '\xA0\xA0\xA0\xA0',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            checked: !!this.state.destroyPopupOnHide,
            type: 'checkbox',
            onChange: this.destroyPopupOnHide
          }),
          'destroyPopupOnHide'
        ),
        '\xA0\xA0\xA0\xA0',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            checked: !!this.state.mask,
            type: 'checkbox',
            onChange: this.onMask
          }),
          'mask'
        ),
        '\xA0\xA0\xA0\xA0',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            checked: !!this.state.maskClosable,
            type: 'checkbox',
            onChange: this.onMaskClosable
          }),
          'maskClosable'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          'offsetX:',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            type: 'text',
            onChange: this.onOffsetXChange,
            style: { width: 50 }
          })
        ),
        '\xA0\xA0\xA0\xA0',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          null,
          'offsetY:',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            type: 'text',
            onChange: this.onOffsetYChange,
            style: { width: 50 }
          })
        ),
        '\xA0\xA0\xA0\xA0',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.destroy },
          'destroy'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          style: {
            height: 300,
            overflow: 'auto',
            border: '1px solid red'
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { margin: 120, position: 'relative', height: 800 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rce_trigger__["a" /* default */],
            {
              getPopupContainer: undefined && getPopupContainer,
              popupAlign: getPopupAlign(state),
              popupPlacement: state.placement,
              destroyPopupOnHide: this.state.destroyPopupOnHide
              // zIndex={40}
              , mask: this.state.mask,
              maskClosable: this.state.maskClosable,
              stretch: this.state.stretch
              // maskAnimation="fade"
              // mouseEnterDelay={0.1}
              // mouseLeaveDelay={0.1}
              , action: Object.keys(state.trigger),
              builtinPlacements: builtinPlacements,
              popupStyle: {
                border: '1px solid red',
                padding: 10,
                background: 'white',
                boxSizing: 'border-box'
              },
              popup: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                'i am a popup'
              ),
              popupTransitionName: state.transitionName
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              {
                style: { margin: 20, display: 'inline-block', background: 'rgba(255, 0, 0, 0.05)' },
                href: '#',
                onClick: preventDefault
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'This is a example of trigger usage.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'You can adjust the value above'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'which will also change the behaviour of popup.'
              )
            )
          )
        )
      )
    );
  };

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ })

},[152]);
//# sourceMappingURL=simple.js.map