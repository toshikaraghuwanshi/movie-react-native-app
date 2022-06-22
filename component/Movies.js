import React from 'react'
import { View, StyleSheet,  FlatList, Text} from 'react-native';
import Movie from './Movie';

const Movies = (props) => {
  return (
    <View>

<FlatList
        data={props.movies}
        renderItem={({item, index}) => <Movie movie={item} index={index} onChange={movie => props.onMovieSelection(movie)} />}
      />
    </View>
  )
}

export default Movies