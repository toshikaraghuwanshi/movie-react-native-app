import React from 'react-native'
import { View, Image, StyleSheet, Text } from 'react-native';


  const styles = StyleSheet.create({
    container: {
      backgroundColor:"#000000",
    },
    movieImage: {
      width: '100%',
      height: '600px',
      backgroundColor: '#000',
      maxWidth: '100%',
      textAlign:'center',
     
    },
    movieField: {
      color:'#DCDCDC',
      marginBottom: '10px',
      fontSize:'15px',
      marginLeft: '5px',
      fontWeight: '500',
    },

    movieName: {
      color: 'cyan',
      fontSize: "40px",
      marginBottom: '5px',
      marginLeft: '5px',
      

    }

  })

const selectedMovie = (props) => {
  return (
   <View style={styles.container}>
 
    <Image 
    source={require('../images/365-days.jpeg')}
    style={styles.movieImage}
    />

      <View style={styles.detail}>
        <Text style={styles.movieName}>{props.selectedMovie.name}</Text>
        <Text style={styles.movieField}>{props.selectedMovie.description}</Text>
        <Text style={styles.movieField}>Director:{props.selectedMovie.director}</Text>
        <Text style={styles.movieField}>Language:{props.selectedMovie.language}</Text>
        <Text style={styles.movieField}>Price:{props.selectedMovie.price}</Text>
        <Text style={styles.movieField}>Type:{props.selectedMovie.type}</Text>
      </View>
   </View>
  )
}

export default selectedMovie