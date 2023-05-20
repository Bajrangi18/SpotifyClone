import {View,Text,Pressable,Image,Animated} from 'react-native'
import {useRef,useState} from 'react'
import home from './Helpers/home.png'
import search from './Helpers/search.png'
import library from './Helpers/lib.png'
import homeBack from './Helpers/homeBack.png'
import searchBack from './Helpers/searchBack.png'
import libraryBack from './Helpers/libBack.png'
const NavBar = ({navigationRef,setButtonState,buttonState}) => {
    const homeButton = useRef(new Animated.Value(1)).current
    const searchButton = useRef(new Animated.Value(1)).current
    const libButton = useRef(new Animated.Value(1)).current

    const shifter = (value:number) => {
        Animated.sequence([
            Animated.timing(
                value==0?homeButton:value==1?searchButton:libButton,{
                    toValue: 0.95,
                    duration:40,
                    useNativeDriver:true
                }
            ),
            Animated.timing(
                value==0?homeButton:value==1?searchButton:libButton,{
                    toValue: 1,
                    duration:40,
                    useNativeDriver:true
                }
            )
        ]).start()
    }
    

    return(
        <View style={{height:"100%",width:"85%",flexDirection:'row',paddingTop:10,paddingBottom:6}}>
            <Animated.View style={{flex:1,transform:[{scale:homeButton}]}}>
            <Pressable 
                onPress={()=>{navigationRef.navigate("Home")
                    setButtonState(0);shifter(0)}}
                style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={buttonState==0?home:homeBack} style={{height:25,width:25,tintColor:'white'}}/>
                    <Text style={{color:'white',fontSize:10,marginTop:3}}>Home</Text>
                </Pressable>
            </Animated.View>
            <Animated.View style={{flex:1,transform:[{scale:searchButton}]}}>            
            <Pressable 
                onPress={()=>{navigationRef.navigate("Search")
                    setButtonState(1);shifter(1)}}
                style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image source={buttonState==1?searchBack:search} style={{height:25,width:25,tintColor:'white'}}/>
                    <Text style={{color:'white',fontSize:10,marginTop:3}}>Search</Text>
                </Pressable>            
            </Animated.View>
            <Animated.View style={{flex:1,transform:[{scale:libButton}]}}>            
            <Pressable 
                onPress={()=>{navigationRef.navigate("Library")
                    setButtonState(2);shifter(2)}}
                style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image source={buttonState==2?libraryBack:library} style={{height:25,width:25,tintColor:'white'}}/>
                <Text style={{color:'white',fontSize:10,marginTop:3}}>Your Library</Text>
                </Pressable>
            </Animated.View>

        </View>
    )
}

export default NavBar