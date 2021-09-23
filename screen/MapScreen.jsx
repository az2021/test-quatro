import React, { useState, useEffect } from 'react';
import {View, StyleSheet,Alert} from 'react-native';
import MapView,{Marker } from 'react-native-maps';
import BottomSheetCard from '../components/BottomSheetCard';
import SearchInput from '../components/SearchInput';
import BaseScreen from './BaseScreen';
import * as Location from 'expo-location';


const getPermission = async () =>{
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.Alert("Permission", "Veuillez activer la permission pour récuperer la position actuel de l'appareil",[
            {text:"activer", onPress: () => getPermission()}
        ])
      }else{
        return await Location.getCurrentPositionAsync({});
      }

}
const renderMarker = (location) => {
    if(location!=null){
        return (
        <Marker
        coordinate={{ latitude : location.coords.latitude , longitude : location.coords.longitude }}
        />
    )
}
}
const MapScreen = () => {

    const [location, setLocation] = useState(null);
    const [region, setRegion] = useState({
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            });
    useEffect(() => {
        console.log(process.env.NODE_ENV );
        (async () => {
            let location = await getPermission();
            setLocation(location);
            setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            })
        })();
    }, []);

    return (
       <BaseScreen>
            <MapView
            style={{
            flex: 1
            }}
            region={region}
            >
                 {renderMarker(location)}
            </MapView>
             <BottomSheetCard/>
            <View style={styles.search}>
                <SearchInput/>
            </View>
       </BaseScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    search:{
      position: "absolute",
      backgroundColor:"white",
      top:15,
      borderRadius: 15,
      width:"90%",
      height:50,
      alignSelf:"center",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center"
    }
})

export default MapScreen;
