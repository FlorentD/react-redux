import webPush from 'web-push';

const vapidKeys = {
  publicKey:
    'BLDCqHnSteBvFmivU4jFZqMxMwtSm2vPuz4pzdxTtE0axpBTT_PxzNCAigDRDoxq-VZw_EURGHwfrSLzJq8USLs',
  privateKey: 'eLBRGf0hfEsVBhr1BL7mpt09Cqt-0kKy_mK46znuuBw',
};

webPush.setGCMAPIKey(
  'BIPorsgIUazuLSA52W61rkbbFNI7MwlMe9gtuGpxUVb9FQYO3JD4V41FPcH1u75sE9DbXUvMZoVHBGUG1aSY4vg'
);

webPush.setVapidDetails(
  'http://reactredux-fr.herokuapp.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

export const publicKey = vapidKeys.publicKey;
export const sendNotification = subscription =>
  webPush.sendNotification(subscription, null, { TTL: 10 });
