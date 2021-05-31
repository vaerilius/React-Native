import { Platform } from 'react-native';

export const PlatformSpecificButton = Platform.select({
  ios: () => require('./Button.ios'),
  android: () => require('./Button.android'),
})();

