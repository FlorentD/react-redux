"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array-buffer.slice.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.repeat.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.typed-array.uint8-array.js");

require("core-js/modules/es.typed-array.copy-within.js");

require("core-js/modules/es.typed-array.every.js");

require("core-js/modules/es.typed-array.fill.js");

require("core-js/modules/es.typed-array.filter.js");

require("core-js/modules/es.typed-array.find.js");

require("core-js/modules/es.typed-array.find-index.js");

require("core-js/modules/es.typed-array.for-each.js");

require("core-js/modules/es.typed-array.includes.js");

require("core-js/modules/es.typed-array.index-of.js");

require("core-js/modules/es.typed-array.iterator.js");

require("core-js/modules/es.typed-array.join.js");

require("core-js/modules/es.typed-array.last-index-of.js");

require("core-js/modules/es.typed-array.map.js");

require("core-js/modules/es.typed-array.reduce.js");

require("core-js/modules/es.typed-array.reduce-right.js");

require("core-js/modules/es.typed-array.reverse.js");

require("core-js/modules/es.typed-array.set.js");

require("core-js/modules/es.typed-array.slice.js");

require("core-js/modules/es.typed-array.some.js");

require("core-js/modules/es.typed-array.sort.js");

require("core-js/modules/es.typed-array.subarray.js");

require("core-js/modules/es.typed-array.to-locale-string.js");

require("core-js/modules/es.typed-array.to-string.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubscription = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var subscription = null;

function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

if (typeof window !== 'undefined') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      return registration.pushManager.getSubscription().then( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(validSubscription) {
          var response, vapidPublicKey, convertedVapidKey;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!validSubscription) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", validSubscription);

                case 2:
                  _context.next = 4;
                  return fetch('/vapidPublicKey');

                case 4:
                  response = _context.sent;
                  _context.next = 7;
                  return response.text();

                case 7:
                  vapidPublicKey = _context.sent;
                  convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
                  return _context.abrupt("return", registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidKey
                  }));

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }).then(function (validSubscription) {
      return subscription = validSubscription;
    });
  }
}

var getSubscription = function getSubscription() {
  return subscription;
};

exports.getSubscription = getSubscription;