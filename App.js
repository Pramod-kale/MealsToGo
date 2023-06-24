import { appStyles } from './App.styles';
import { SafeAreaView, StyleSheet, } from 'react-native';
import SearchBar from './src/components/SearchBar/SearchBar';
import List from './src/components/List/List';

export default function App() {

  return (

    <SafeAreaView style={appStyles.container}>
      <SearchBar />
      <List />
    </SafeAreaView>
  );
}


  // <View>
    //   <StatusBar
    //     hidden={true}
    //   />
    // the above snipper for hiding the status bar