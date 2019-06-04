import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Header from './src/components/common/Header';
import LibraryList from './src/components/LibraryList';


const App = () => {
  return (
    <Provider store={createStore(reducers)}> 
      <View>
        <Header headerText="Tech Stack" />
        <LibraryList></LibraryList>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;