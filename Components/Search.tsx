import {View,Pressable,Image, ScrollView,Text} from 'react-native'
import {useCallback} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import {useEffect} from 'react'
import search from './Helpers/searchThick.png'

const Search = ({navigation,setButtonState}) => {
    useFocusEffect(
        useCallback(()=>{
            setButtonState(1)            
        },[])
)
return(
    <ScrollView style={{backgroundColor:'#121212',flex:1}} contentContainerStyle={{alignItems:'center'}}>
            <Pressable style={{backgroundColor:'white',width:"90%",height:50,borderRadius:5,justifyContent:'flex-start',flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}><Image source={search} style={{height:30,width:30}} /></View>
                <View style={{flex:8,justifyContent:'center',alignItems:'flex-start'}}><Text style={{fontFamily:'GothamMedium',fontSize:14,color:'black'}}>What do you want to Listen to ?</Text></View>
            </Pressable>
            <View style={{flex:1,width:"90%",marginTop:20,marginBottom:40}}>
                <Text style={{fontFamily:'GothamMedium',fontSize:16,color:'white'}}>Browse All</Text>
                <View style={{flex:1,width:"100%",flexDirection:'row',backgroundColor:'transparent',paddingTop:7.5,paddingBottom:7.5,marginTop:5}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                            <CardSuggest color='#415eca' text='Podcasts' imgSrc='https://storage.googleapis.com/production-eng/1/2022/02/0116-NerdOut_Podcast-Art_300x300.jpg' />
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                            <CardSuggest color='#a6a4d1' text='Live Events' imgSrc='https://i.insider.com/5e45b2783b62b778762710a4?width=1136&format=jpeg'/>
                        </View>
                </View>
                <View style={{flex:1,width:"100%",flexDirection:'row',backgroundColor:'transparent',paddingTop:7.5,paddingBottom:7.5}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                            <CardSuggest color='#1e3264' text='Made For You' imgSrc='https://i.scdn.co/image/ab67706f000000028d90dd98d40fd7fba2fd0223'/>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                            <CardSuggest color='#14504f' text='New releases' imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Tw8XXOn0bok5l3glUMA6IBRCFPml6KxHEagMf6zQKfYsnFDgkSItc8D8hEkV4SFrHQA&usqp=CAU' />
                        </View>
                </View>
                <View style={{flex:1,width:"100%",flexDirection:'row',backgroundColor:'transparent',paddingTop:7.5,paddingBottom:7.5}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                            <CardSuggest color='#af1c23' text='Tamil' imgSrc='https://i.scdn.co/image/ab67616d0000b27330b71411cc46528fcfb0c126'/>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                            <CardSuggest color='#a0ccb4' text='Hindi' imgSrc='https://i.scdn.co/image/ab67706f00000002698894ab14938696261d9cd5'/>
                        </View>
                </View>
                <View style={{flex:1,width:"100%",flexDirection:'row',backgroundColor:'transparent',paddingTop:7.5,paddingBottom:7.5}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                            <CardSuggest color='#c8c8b9' text='Telugu' imgSrc='https://i.scdn.co/image/ab67706f00000002d7ee437956f3b1a4b8f7429e'/>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                            <CardSuggest color='#1c2c3c' text='Charts' imgSrc='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg' />
                        </View>
                </View>
                <View style={{flex:1,width:"100%",flexDirection:'row',backgroundColor:'transparent',paddingTop:7.5,paddingBottom:7.5}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                            <CardSuggest color='#d298e7' text='Pop' imgSrc='https://i.scdn.co/image/ab67616d0000b273d48b3ca7ced155aa46324088'/>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                            <CardSuggest color='#046a50' text='Mix' imgSrc='data:image/png;base64,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'/>
                        </View>
                </View>
                <View style={{flex:1,width:"100%",flexDirection:'row',backgroundColor:'transparent',paddingTop:7.5,paddingBottom:7.5}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                            <CardSuggest color='#ad8e76' text='Trending' imgSrc='https://i.scdn.co/image/ab67706c0000da84d8a066e108c8552dc2dd98b7'/>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                            <CardSuggest color='#9db7cb' text='Discover' imgSrc='data:image/jpeg;base64,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' />
                        </View>
                </View>
                <View style={{flex:1,width:"100%",flexDirection:'row',backgroundColor:'transparent',paddingTop:7.5,paddingBottom:7.5}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                            <CardSuggest color='#323c34' text='Radio' imgSrc='https://seeded-session-images.scdn.co/v1/img/artist/7G1GBhoKtEPnP86X2PvEYO/en'/>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                            <CardSuggest color='#b1470a' text='Mood' imgSrc='https://i.scdn.co/image/ab67616d0000b27384c53fa832dfa265192419c5'/>
                        </View>
                </View>
            </View>
    </ScrollView>
)
}

export default Search

const CardSuggest = ({color,text,imgSrc}:{color:string,text:string,imgSrc:string}) => {
    return(
        <View style={{flexDirection:'row',width:"96%",backgroundColor:color,height:100,borderRadius:5,overflow:'hidden',alignItems:'flex-end'}}>
                <View style={{flex:1.5,height:"100%"}}>
                    <Text style={{fontFamily:'GothamBold',fontSize:14,color:'white',paddingLeft:10,paddingTop:15}}>{text}</Text>
                </View>
                <View style={{height:75,width:75,justifyContent:'flex-end',transform:[{rotate:'22deg'}],right:-20,elevation:10}}>
                    <Image source={{uri: imgSrc}} style={{height:75,width:75,borderRadius:5}}/>
                </View>
        </View>
    )
}