import {Alert} from 'react-native';
import Config from '@config';

class Toast {
  show = (title, message, button = null) => {
    if (Config.IS_DEBUG) {
      console.log('Toast.show', title, message, button);
    }

    if (button === null) {
      button = [
        {
          text: 'OK',
          onPress: () => {},
        },
      ];
    }

    Alert.alert(title, message, button);
  };
}

export default new Toast();
