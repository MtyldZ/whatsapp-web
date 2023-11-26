import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from './src/utils/dimensions';

export const styles = StyleSheet.create({
  webview: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    width: screenWidth,
    height: screenHeight,
  },
});
