import {View} from 'react-native'
import {useCallback} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import {useEffect} from 'react'
const Library = ({navigation,setButtonState}) => {
    useFocusEffect(
        useCallback(()=>{
            setButtonState(2)            
        },[])
)
return(
    <View style={{backgroundColor:'#121212',flex:1}}>

    </View>
)
}

export default Library