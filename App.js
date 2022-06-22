import { StatusBar, Text ,StyleSheet , View} from "react-native";
import React, { useState } from "react";
import movies from "./data/movies";
import Header from "./component/Header";
import SelectedMovie from "./component/SelectedMovie";
import Movies from "./component/Movies";
import Cinema from "./component/Cinema";


const styles = StyleSheet.create({
  movieApp:{
    paddingLeft:"10px",
    paddingRight:"10px",
    backgroundColor:"black",

  },

  seatConfirm:{
    backgroundColor:"black",
  },

text: {
  color:'greenyellow',
  backgroundColor: 'black',
  fontSize: '20px',

},

price: {
  color:'pink',
  backgroundColor: 'black',
  fontSize: '20px',
} 
});





export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const onMovieSelection = (item) => {
    setSelectedSeats([])
    setSelectedMovie(item)
  }
  const onSeatSelection = (seats) => {
    setSelectedSeats(seats)
  }
  return (
    <View style={styles.movieApp}>
      <Header />
      <SelectedMovie selectedMovie={selectedMovie} />
      <Cinema selectedMovie={selectedMovie} selectedSeats={selectedSeats} onSeatSelection={onSeatSelection} />
       
      {selectedSeats.length > 0 && (
              <Text style={styles.seatConfirm}>
                <Text style={styles.text}>Congratulations,</Text> <Text style={styles.text}>{selectedSeats.length}</Text>{' '}
                <Text style={styles.text}>seats are reserved for the price of {' '}</Text>
                <Text style={styles.price}>
                  ${selectedSeats.length * selectedMovie.price}  {' '}
                </Text>
                <Text style={styles.text}>Enjoy watching {selectedMovie.name}</Text>
                </Text>
            )}
      <Movies movies={movies} onMovieSelection={onMovieSelection} />
    </View>
  );
}
