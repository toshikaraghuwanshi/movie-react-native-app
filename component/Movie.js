import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },
  movieImage: {
    width: '500px',
    height: '550px',
    backgroundColor: 'white',
    maxWidth: '100%',
    textAlign: 'center',


  },
  moviefield: {
    color: '#fff',
  },
  movie: {
    backgroundColor: 'black',
  

  },
  movieName: {
    color: '#0AFFFF',
    fontSize: '25px',
    textAlign:'center',
    marginTop:'4px',
    textDecorationLine:"underline",
    lineHeight: '1.5',
    textDecorationColor:'#dcdcdcad',
    textUnderlineOffset: '5px',
  },
  movieType: {
    color: '#E0FFFF',
    fontSize: '15px',
    marginBottom:'32px',
    textAlign:'center',
    marginTop:'4px',

  }

})

const Movie = ({ movie, index, onChange }) => {
  const changeMovie = (movie) => {
    onChange(movie)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <View style={styles.movie} onClick={() => changeMovie(movie)}>
      <Image
        source={require('../images/365-days.jpeg')}
        style={styles.movieImage}
      />
      <Text style={styles.movieName}>{movie.name}</Text>
      <Text style={styles.movieType}>Type:{movie.type}</Text>
    </View>
  )
}

export default Movie