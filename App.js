
// inbuilt components
import { SafeAreaView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

// styles 
import { appStyles } from './App.styles';

// components
import SearchBar from './src/components/SearchBar/SearchBar';
import List from './src/components/List/List';

export default function App() {

  return (
    <>

      <SafeAreaView style={appStyles.container}>
        <SearchBar />
        <List />
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}


  // <View>
    //   <StatusBar
    //     hidden={true}
    //   />
    // the above snipper for hiding the status bar