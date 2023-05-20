import {ScrollView,View,Text,Image,Pressable,Animated,Dimensions} from 'react-native'
import {useCallback,useState,useEffect} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'


const Player = ({navigation,setButtonState,route}) => {
    console.log(route.params)
    const [imgStr,setImgStr] = useState("")
    const [color,setColor] = useState("#000000")

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
            <ScrollView style={{flex:1,width:"100%"}} contentContainerStyle={{alignItems:'center'}}>
                {imgStr!=""?<Image source={{uri:imgStr}} style={{height:330,width:330,marginTop:80}}/>:<></>}
            </ScrollView>
        </LinearGradient>
        
    )
}

export default Player