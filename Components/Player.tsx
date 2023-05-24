import {ScrollView,View,Text,Image,Pressable,Animated,Dimensions} from 'react-native'
import {useCallback,useState,useEffect} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import heartOut from './Helpers/heartOut.png'
import heartIn from './Helpers/heartIn.png'
import shuffle from './Helpers/shuffle.png'
import startTo from './Helpers/startTo.png'
import playIcon from './Helpers/play.png'
import pause from './Helpers/pause.png'
import endTo from './Helpers/endTo.png'
import repeat from './Helpers/repeat.png'
const Player = ({navigation,setButtonState,route}) => {
    const [imgStr,setImgStr] = useState("")
    const [color,setColor] = useState("#000000")
    const [liked,setLiked] = useState(false)
    const [play,setPlay] = useState(false)

    useEffect(()=>{
        setColor(route.params.color)
        setImgStr(route.params.image)
    },[route])
    useFocusEffect(
        useCallback(()=>{
            setButtonState(3)            
        },[])
)
    return(
        
        <LinearGradient colors={[`${route.params.color}`,`#000000`]}
        style={{width:"100%",justifyContent:'center',alignItems:'center',height:Dimensions.get("window").height}}>
            <ScrollView style={{width:"100%"}} contentContainerStyle={{alignItems:'center'}}>
                {imgStr!=""?<Image source={{uri:imgStr}}  style={{height:330,width:330,marginTop:80}}/>:<></>}
                
                <View style={{justifyContent:'center',alignItems:'center',marginTop:80}}>
                    <View style={{flexDirection:'row',width:330,backgroundColor:'transparent'}}>
                        <View style={{flex:6,justifyContent:'center'}}>
                            <Text style={{color:'white',fontWeight:"600",fontSize:20}}>{route.params.text}</Text>
                            {route.params.subText?<Text style={{color:'white',fontWeight:"400",fontSize:15}}>{route.params.subText}</Text>:<></>}
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Pressable onPress={()=>setLiked(!liked)} style={{justifyContent:'center',alignItems:'center'}}>
                                <Image source={liked?heartIn:heartOut} style={{height:30,width:30,tintColor:'white'}}/>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{marginTop:30,width:"100%",flexDirection:'row'}}>
                        <View style={{borderWidth:2,borderColor:'white',width:130,borderTopLeftRadius:2,overflow:'visible',alignItems:'center',height:0,marginBottom:5}}>
                            <Text style={{position:'absolute',color:'white',fontSize:25,top:-18,right:-5}}>⦁</Text>
                        </View>
                        <View style={{borderWidth:2,borderColor:'rgba(255,255,255,0.3)',width:200,borderTopRightRadius:2,overflow:'visible',alignItems:'center',height:0,marginBottom:5}}>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',width:330}}>
                        <Text style={{flex:1}}>1:25</Text>
                        <Text style={{flex:1,textAlign:'right'}}>3:40</Text>
                    </View>
                    <View style={{flexDirection:'row',width:330,marginTop:30}}>
                        <Pressable style={{flex:1.5,justifyContent:'center',alignItems:'center'}}><Image source={shuffle} style={{height:30,width:30,tintColor:'white'}} /></Pressable>
                        <Pressable style={{flex:2,justifyContent:'center',alignItems:'center'}}><Image source={startTo} style={{height:30,width:30,tintColor:'white'}} /></Pressable>
                        <Pressable onPress={()=>setPlay(!play)} style={{flex:2.05,justifyContent:'center',alignItems:'center',backgroundColor:'white',paddingTop:22,paddingBottom:22,borderRadius:60}}><Image source={play?playIcon:pause} style={{height:30,width:30}} /></Pressable>
                        <Pressable style={{flex:2,justifyContent:'center',alignItems:'center'}}><Image source={endTo} style={{height:30,width:30,tintColor:'white'}} /></Pressable>
                        <Pressable style={{flex:1.5,justifyContent:'center',alignItems:'center'}}><Image source={repeat} style={{height:30,width:30,tintColor:'white'}} /></Pressable>
                    </View>

                </View>
            </ScrollView>
        </LinearGradient>
        
    )
}

export default Player