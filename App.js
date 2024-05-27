import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Homescreen from './screens/Homescreen';
import 'react-native-gesture-handler';
import { ColorProvider } from './ColorContext';


const Stack = createNativeStackNavigator();


import { useState, useEffect } from "react";

import SplashScreenComponent from './screens/SplashScreenComponent';


import Children from './screens/Children';
import Youth from './screens/Youth';
import Intermediate from './screens/Intermediate';
import Adult from './screens/Adult';
import { Lessontab } from './screens/Lessontab';
import { Daily } from './screens/Daily';
import Lessondetails from './screens/Lessondetails';


import NoteScreen from './screens/NoteScreen';
import NoteDetail from './Components/NoteDetail';
import NoteProvider from './contexts/NoteProvider';
import Anthem from './screens/Anthem';
import Gettdata from './screens/Gettdata';



export default function App() {


  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  



  const lightModeColors = {
    background: 'white',
    text: 'black',
    statusBar: 'dark-content',
  };

  const darkModeColors = {
    background: 'black',
    text: 'white',
    statusBar: 'light-content',
  };

  // Determine current color scheme based on mode
  const colors = isDarkMode ? darkModeColors : lightModeColors;






    
  return (
   
    <ColorProvider isDarkMode={isDarkMode}>
    <NavigationContainer>
  <NoteProvider>
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerTitle: '', headerTransparent: true }}>
      <Stack.Screen component={NoteScreen} name='NoteScreen' />
      <Stack.Screen component={NoteDetail} name='NoteDetail' />

    <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreenComponent} />
    <Stack.Screen options={{ headerShown: false }} name="Home" >
    {props => (
      <Homescreen {...props} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    )}
  </Stack.Screen>
    <Stack.Screen options={{ headerShown: false }} name="child" >
    {props => (
      <Children {...props} isDarkMode={isDarkMode} />
    )}
  </Stack.Screen>
    <Stack.Screen options={{ headerShown: false }} name="youth" >
    {props => (
      <Youth {...props} isDarkMode={isDarkMode} />
    )}
  </Stack.Screen>

    <Stack.Screen options={{ headerShown: false }} name="intermediate" >
    {props => (
      <Intermediate {...props} isDarkMode={isDarkMode} />
    )}
  </Stack.Screen>
    <Stack.Screen options={{ headerShown: false }} name="adult"  >
    {props => (
      <Adult {...props} isDarkMode={isDarkMode} />
    )}
  </Stack.Screen>
    <Stack.Screen options={{ headerShown: false }} name="lessontab" >
    {props => (
      <Lessontab {...props} isDarkMode={isDarkMode} />
    )}
  </Stack.Screen>


    <Stack.Screen options={{ headerShown: false }} name="daily" >
    {props => (
      <Daily {...props} isDarkMode={isDarkMode} />
    )}
  </Stack.Screen>

    <Stack.Screen options={{ headerShown: false }} name="details" >
    {props => (
      <Lessondetails {...props} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    )}
  </Stack.Screen>

    <Stack.Screen options={{ headerShown: false }} name="anthem" >
    {props => (
      <Anthem {...props} isDarkMode={isDarkMode} />
    )}
  </Stack.Screen>

  <Stack.Screen options={{ headerShown: false }} name="getdata" >
  {props => (
    <Gettdata {...props} isDarkMode={isDarkMode} />
  )}
</Stack.Screen>
    
    </Stack.Navigator>
    </NoteProvider>
</NavigationContainer>
</ColorProvider>
   
  );
};

