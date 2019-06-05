'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_React$Component) {
    _inherits(Logo, _React$Component);

    function Logo(props) {
        _classCallCheck(this, Logo);

        var _this = _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).call(this, props));

        _this.state = {
            color: '#4C7076'
        };

        _this.logoHover = _this.logoHover.bind(_this);
        _this.logoNotHover = _this.logoNotHover.bind(_this);
        return _this;
    }

    _createClass(Logo, [{
        key: 'logoHover',
        value: function logoHover() {
            this.setState({ color: '#2E4347' });
        }
    }, {
        key: 'logoNotHover',
        value: function logoNotHover() {
            this.setState({ color: '#4C7076' });
        }
    }, {
        key: 'render',
        value: function render() {
            switch (this.props.use) {
                case 'login':
                    return React.createElement(
                        'svg',
                        { viewBox: '0 0 117.9 44.77', width: '300', height: '170' },
                        React.createElement(
                            'g',
                            null,
                            React.createElement('path', { fill: this.state.color, d: 'M117.78,3.49c-0.55-0.08-1.07-0.16-1.58-0.23c-0.51-0.07-1.06-0.1-1.66-0.1c-3.61,0-6.3,1.29-8.08,3.85\r c-1.5,2.19-2.25,5.17-2.25,8.94c0,0.46,0.05,3.09,0.16,7.87c0.03,1.2,0.04,2.76,0.04,4.67c-0.33-0.52-0.55-0.9-0.66-1.15\r c-0.19-0.38-0.37-0.78-0.53-1.19l-4.8,4.8c1.56,1.86,3.37,3.33,5.43,4.41c2.06,1.08,4.22,1.62,6.46,1.62h0.62l-0.37-20.66v-0.33\r c0-2.02,0.37-3.61,1.11-4.76c0.9-1.39,2.28-2.09,4.14-2.09c0.79,0,1.49,0.1,2.09,0.29L117.78,3.49z' }),
                            React.createElement('path', { fill: this.state.color, d: 'M35.43,22.03l-0.05-0.62H16.7v7.14h9.24c-1.57,2.23-4.56,3.99-8.12,3.99c-2.7,0-4.92-0.81-6.8-2.47\r c-1.91-1.66-2.83-3.62-2.83-5.96s0.93-4.29,2.83-5.96c1.89-1.68,4.12-2.49,6.8-2.49c2.62,0,4.86,0.88,6.81,2.7l0.52,0.49l5.91-5.62\r l-0.51-0.5c-2.86-2.66-7.07-4.84-12.24-4.98l-0.02-0.07h-0.53c-4.97,0-9.26,1.62-12.75,4.83C1.69,15.73,0,19.62,0,24.1\r c0,4.52,1.69,8.41,5.01,11.57c3.47,3.18,7.76,4.79,12.74,4.79c4.94,0,9.23-1.62,12.76-4.81C33.81,32.51,35.92,28.11,35.43,22.03z'
                            }),
                            React.createElement('path', { fill: this.state.color, d: 'M42.16,8.18C42.46,3.06,43.91,2,43.91,2l-1.15-0.74c-0.76,0.6-1.12,2.13-1.28,3.74c-0.17-0.4-1.62-3.69-4.45-4.69\r C34.03-0.74,30.6,1.2,30.6,1.2s1.45,3.67,4.46,4.73c2.87,1.01,6.13-0.71,6.42-0.87c-0.1,1.07-0.12,2.17-0.1,3.06\r c-0.28-0.01-0.57-0.02-0.85-0.02c-3.36,0-6.48,1.02-9.07,2.78c0.15,0.13,0.31,0.26,0.46,0.4l2.02,1.98l-6.47,6.15h9.76l0.19,2.47\r c0.49,6.13-1.37,11.26-5.52,15.23c-0.19,0.17-0.39,0.32-0.58,0.48c2.61,1.81,5.78,2.88,9.21,2.88c8.94,0,16.18-7.25,16.18-16.18\r C56.71,15.89,50.33,9,42.16,8.18z' }),
                            React.createElement('path', { fill: this.state.color, d: 'M74.47,16.48l-5.21,3.03c1.04,0.96,1.86,1.93,2.46,2.91c0.76,1.23,1.15,2.43,1.15,3.61v0.62l-6.71,3.77\r c-1.07-1.15-1.93-2.43-2.59-3.85c-0.66-1.42-0.99-2.85-0.99-4.3c0-2.24,0.81-4.34,2.42-6.3c1.28-1.58,3.14-3.1,5.58-4.54\r c1.72-1.04,3.77-2.03,6.15-2.99L73.6,3.78c-0.88,0.27-1.76,0.6-2.64,0.98c-0.89,0.38-1.72,0.76-2.48,1.15\r c-3.64,1.8-6.52,3.85-8.65,6.14c-1.28,1.38-2.25,2.82-2.93,4.31c1.15,2.4,1.8,5.08,1.8,7.91c0,1.74-0.26,3.43-0.72,5.02\r c0.23,0.42,0.47,0.84,0.74,1.26c1.5,2.43,3.57,4.89,6.19,7.37l13.33-7.91c0.57-1.37,0.86-2.72,0.86-4.06\r c0-1.67-0.49-3.38-1.48-5.13C76.94,19.6,75.89,18.15,74.47,16.48z' }),
                            React.createElement('polygon', { fill: this.state.color, points: '80.65,44.77 87.21,44.77 87.21,20.75 80.65,22.02 \t' }),
                            React.createElement('path', { fill: this.state.color, d: 'M95.72,30.84l4.51-4.51l1.57-4.41c-2.13-3.06-4.85-5.58-8.16-7.57c-3.06-1.83-6.52-3.18-10.37-4.05\r c-1.37-0.3-2.23-0.48-2.58-0.53c-0.88-0.14-1.74-0.21-2.58-0.21l-0.33,6.07c3.14,0,6.23,0.63,9.27,1.88\r c3.03,1.26,5.62,2.99,7.75,5.2l-5.25,14.36h6.85l1.38-3.87c-0.3-0.31-0.6-0.62-0.88-0.96L95.72,30.84z' })
                        )
                    );
                default:
                    return React.createElement(
                        'svg',
                        { onMouseEnter: this.logoHover, onMouseLeave: this.logoNotHover, viewBox: '0 0 117.9 44.77', width: '117.9', height: '44.77' },
                        React.createElement(
                            'g',
                            null,
                            React.createElement('path', { fill: this.state.color, d: 'M117.78,3.49c-0.55-0.08-1.07-0.16-1.58-0.23c-0.51-0.07-1.06-0.1-1.66-0.1c-3.61,0-6.3,1.29-8.08,3.85\r c-1.5,2.19-2.25,5.17-2.25,8.94c0,0.46,0.05,3.09,0.16,7.87c0.03,1.2,0.04,2.76,0.04,4.67c-0.33-0.52-0.55-0.9-0.66-1.15\r c-0.19-0.38-0.37-0.78-0.53-1.19l-4.8,4.8c1.56,1.86,3.37,3.33,5.43,4.41c2.06,1.08,4.22,1.62,6.46,1.62h0.62l-0.37-20.66v-0.33\r c0-2.02,0.37-3.61,1.11-4.76c0.9-1.39,2.28-2.09,4.14-2.09c0.79,0,1.49,0.1,2.09,0.29L117.78,3.49z' }),
                            React.createElement('path', { fill: this.state.color, d: 'M35.43,22.03l-0.05-0.62H16.7v7.14h9.24c-1.57,2.23-4.56,3.99-8.12,3.99c-2.7,0-4.92-0.81-6.8-2.47\r c-1.91-1.66-2.83-3.62-2.83-5.96s0.93-4.29,2.83-5.96c1.89-1.68,4.12-2.49,6.8-2.49c2.62,0,4.86,0.88,6.81,2.7l0.52,0.49l5.91-5.62\r l-0.51-0.5c-2.86-2.66-7.07-4.84-12.24-4.98l-0.02-0.07h-0.53c-4.97,0-9.26,1.62-12.75,4.83C1.69,15.73,0,19.62,0,24.1\r c0,4.52,1.69,8.41,5.01,11.57c3.47,3.18,7.76,4.79,12.74,4.79c4.94,0,9.23-1.62,12.76-4.81C33.81,32.51,35.92,28.11,35.43,22.03z'
                            }),
                            React.createElement('path', { fill: this.state.color, d: 'M42.16,8.18C42.46,3.06,43.91,2,43.91,2l-1.15-0.74c-0.76,0.6-1.12,2.13-1.28,3.74c-0.17-0.4-1.62-3.69-4.45-4.69\r C34.03-0.74,30.6,1.2,30.6,1.2s1.45,3.67,4.46,4.73c2.87,1.01,6.13-0.71,6.42-0.87c-0.1,1.07-0.12,2.17-0.1,3.06\r c-0.28-0.01-0.57-0.02-0.85-0.02c-3.36,0-6.48,1.02-9.07,2.78c0.15,0.13,0.31,0.26,0.46,0.4l2.02,1.98l-6.47,6.15h9.76l0.19,2.47\r c0.49,6.13-1.37,11.26-5.52,15.23c-0.19,0.17-0.39,0.32-0.58,0.48c2.61,1.81,5.78,2.88,9.21,2.88c8.94,0,16.18-7.25,16.18-16.18\r C56.71,15.89,50.33,9,42.16,8.18z' }),
                            React.createElement('path', { fill: this.state.color, d: 'M74.47,16.48l-5.21,3.03c1.04,0.96,1.86,1.93,2.46,2.91c0.76,1.23,1.15,2.43,1.15,3.61v0.62l-6.71,3.77\r c-1.07-1.15-1.93-2.43-2.59-3.85c-0.66-1.42-0.99-2.85-0.99-4.3c0-2.24,0.81-4.34,2.42-6.3c1.28-1.58,3.14-3.1,5.58-4.54\r c1.72-1.04,3.77-2.03,6.15-2.99L73.6,3.78c-0.88,0.27-1.76,0.6-2.64,0.98c-0.89,0.38-1.72,0.76-2.48,1.15\r c-3.64,1.8-6.52,3.85-8.65,6.14c-1.28,1.38-2.25,2.82-2.93,4.31c1.15,2.4,1.8,5.08,1.8,7.91c0,1.74-0.26,3.43-0.72,5.02\r c0.23,0.42,0.47,0.84,0.74,1.26c1.5,2.43,3.57,4.89,6.19,7.37l13.33-7.91c0.57-1.37,0.86-2.72,0.86-4.06\r c0-1.67-0.49-3.38-1.48-5.13C76.94,19.6,75.89,18.15,74.47,16.48z' }),
                            React.createElement('polygon', { fill: this.state.color, points: '80.65,44.77 87.21,44.77 87.21,20.75 80.65,22.02 \t' }),
                            React.createElement('path', { fill: this.state.color, d: 'M95.72,30.84l4.51-4.51l1.57-4.41c-2.13-3.06-4.85-5.58-8.16-7.57c-3.06-1.83-6.52-3.18-10.37-4.05\r c-1.37-0.3-2.23-0.48-2.58-0.53c-0.88-0.14-1.74-0.21-2.58-0.21l-0.33,6.07c3.14,0,6.23,0.63,9.27,1.88\r c3.03,1.26,5.62,2.99,7.75,5.2l-5.25,14.36h6.85l1.38-3.87c-0.3-0.31-0.6-0.62-0.88-0.96L95.72,30.84z' })
                        )
                    );
            }
        }
    }]);

    return Logo;
}(React.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
})(Logo);