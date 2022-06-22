import React from 'react-native'
import { View, Image, StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#000000",
    },
    tinyLogo: {
      width: '435px',
      height: '100px',
      backgroundColor: '#000',
      maxWidth: '100%',
      textAlign:'center',
     
    }
  });

const Header = () => {
  return (
    <View style={styles.container}>
    <Image
         style={styles.tinyLogo}
         source={require('../images/logo.svg')}
       />
    </View>
  )
}

export default Header