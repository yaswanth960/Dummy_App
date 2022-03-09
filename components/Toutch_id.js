import React,{useState} from 'react'
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TouchID from 'react-native-touch-id';




const Toutch_id = () => {

    const optionalConfigObject = {
        title: 'Authentication Required', 
        imageColor: '#e00606', 
        imageErrorColor: '#ff0000', 
        sensorDescription: 'Touch sensor', 
        sensorErrorDescription: 'Failed',
        cancelText: 'Cancel', 
        fallbackLabel: 'Show Passcode',
        unifiedErrors: false, 
        passcodeFallback: false, 
      };
    
      const [isAuth,setIsAuth] = useState(false);
    
      React.useEffect(() => {
        handleBiometric();
      });
    
    const handleBiometric = () => {
      TouchID.isSupported(optionalConfigObject).then(biometryType => {
    
        if (biometryType === 'FaceID') {
            console.log('FaceID is supported.');
        } else {
            console.log('TouchID is supported.');
            TouchID.authenticate('',optionalConfigObject).then(success => {
              console.log('Success',success);
              alert('Authentication Successfull');
              setIsAuth(success);
            })
            . catch (err =>{
              console.log('error',err);
            }) 
        }
      })
    }

  return (
    <View>

    </View>
  )
}

export default Toutch_id