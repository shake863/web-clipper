interface WebClipperConfig {
  icon: string;
  iconDark: string;
  yuqueClientId: string;
  yuqueCallback: string;
  yuqueScope: string;
  oneNoteCallBack: string;
  oneNoteTenantId: string;
  oneNoteClientId: string;
}

export interface RemoteConfig {
  iconfont: string;
  chromeWebStoreVersion: string;
}

let config: WebClipperConfig = {
  icon: 'icon.png',
  iconDark: 'icon-dark.png',
  yuqueClientId: 'D1AwzCeDPLFWGfcGv7ze',
  yuqueCallback: 'http://webclipper-oauth.yfd.im/yuque_oauth',
  yuqueScope: 'doc,group,repo,attach_upload',
  oneNoteClientId: '92ba8f79-3e54-4edc-8e37-bce94b90f12e',
  oneNoteTenantId: '60b31ed9-a184-4711-82bf-bed9d9088086',
  oneNoteCallBack: 'https://oauth.shake863.workers.dev/rsssave/redirect',
};

if (process.env.NODE_ENV === 'development') {
  config = Object.assign({}, config, {
    icon: 'icon.png',
  });
}

export default config;
