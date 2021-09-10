"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNotification = exports.publicKey = void 0;

var _webPush = _interopRequireDefault(require("web-push"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const vapidKeys = {
  publicKey: 'BLDCqHnSteBvFmivU4jFZqMxMwtSm2vPuz4pzdxTtE0axpBTT_PxzNCAigDRDoxq-VZw_EURGHwfrSLzJq8USLs',
  privateKey: 'eLBRGf0hfEsVBhr1BL7mpt09Cqt-0kKy_mK46znuuBw'
};

_webPush.default.setGCMAPIKey('BIPorsgIUazuLSA52W61rkbbFNI7MwlMe9gtuGpxUVb9FQYO3JD4V41FPcH1u75sE9DbXUvMZoVHBGUG1aSY4vg');

_webPush.default.setVapidDetails('http://reactredux-fr.herokuapp.com', vapidKeys.publicKey, vapidKeys.privateKey);

const publicKey = vapidKeys.publicKey;
exports.publicKey = publicKey;

const sendNotification = subscription => _webPush.default.sendNotification(subscription, null, {
  TTL: 10
});

exports.sendNotification = sendNotification;