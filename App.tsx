import {SafeAreaView, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from './App';

function App() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <WebView
          style={styles.webview}
          source={{uri: 'https://web.whatsapp.com/'}}
          userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        />
      </SafeAreaView>
    </View>
  );
}

export default App;
