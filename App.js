/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from './src/Context/BlogContext';
import IndexScreen from './src/Screens/IndexScreen';
import ShowScreen from './src/Screens/ShowScreen'
import CreateScreen from './src/Screens/CreateScreen'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= 'Index' component={IndexScreen} options = {{title: "Blogs", headerStyle: {backgroundColor: '#f00',},headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold', fontSize: 25, alignSelf: 'center'},}}/>
        <Stack.Screen name= 'Show' component={ShowScreen} options = {{title: "My Blog", headerStyle: {backgroundColor: '#f00',},headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold', fontSize: 25, alignSelf: 'center'},}}/>
        <Stack.Screen name= 'Create' component={CreateScreen} options = {{title: "Create Blog", headerStyle: {backgroundColor: '#f00',},headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold', fontSize: 25, alignSelf: 'center'},}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default() => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}


