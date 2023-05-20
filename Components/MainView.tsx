
import { View, Text,Image,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigate, navigationRef } from './RootNavigation';
import {useState,useEffect} from 'react'
import Home from './Home'
import Search from './Search';
import Library from './Library';
import NavBar from './NavBar';
import Player from './Player';
import LinearGradient from 'react-native-linear-gradient'
import downArrow from './Helpers/downArrow.png'

const Stack = createNativeStackNavigator();

const MainView = () => {
    const [buttonState,setButtonState] = useState(0)

  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator >
        <Stack.Screen name="Home" options={{headerTitle:"Good Evening",animation:'fade',headerStyle:{backgroundColor:"#121212"},headerTintColor:'white',headerTitleStyle:{fontSize:20,fontFamily:'GothamBold'}}} >
            {(props)=><Home {...props} setButtonState={setButtonState}/>}
        </Stack.Screen>
        <Stack.Screen name="Search" options={{headerBackVisible:false,animation:'fade',headerStyle:{backgroundColor:"#121212"},headerTintColor:'white',headerTitleStyle:{fontSize:20,fontFamily:'GothamBold'}}}>
            {(props)=><Search {...props} setButtonState={setButtonState}/>}
        </Stack.Screen>
        <Stack.Screen name="Library" options={{headerBackVisible:false,animation:'fade',headerStyle:{backgroundColor:"#121212"},headerTintColor:'white',headerTitle:"Your Library",headerTitleStyle:{fontSize:20,fontFamily:'GothamBold'}}}>
            {(props)=><Library {...props} setButtonState={setButtonState}/>}
        </Stack.Screen>
        <Stack.Screen name="Player" options={({ navigation,route })=>({animation:'slide_from_bottom',headerStyle:{backgroundColor:route.params.color},headerTintColor:'white',headerTitle:" Player",headerTitleStyle:{fontSize:20,fontFamily:'GothamBold'},headerLeft: (props)=>(<Pressable {...props} onPress={()=>navigation.goBack()}><Image source={downArrow} style={{tintColor:'white',height:25,width:25}}/></Pressable>)})}>
            {(props)=><Player {...props} setButtonState={setButtonState}/> }
        </Stack.Screen>
      </Stack.Navigator>
      {buttonState==0||buttonState==1||buttonState==2?<LinearGradient 
      colors={['rgba(0,0,0,0)','rgba(0,0,0,0.2)','rgba(0,0,0,0.5)','rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']}
      style={{position:'absolute',bottom:0,width:"100%",justifyContent:'center',alignItems:'center'}}>
        <NavBar navigationRef={navigationRef} setButtonState={setButtonState} buttonState={buttonState} />
      </LinearGradient>:<></>}
    </NavigationContainer>
  );
}

export default MainView;