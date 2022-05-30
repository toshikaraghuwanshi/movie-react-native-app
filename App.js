import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import clsx from 'clsx';

const movies = [
  {
    name: '365 Days this day',
    description: 'Laura and Massimo attempt to piece their lives back together following the inter-mafia conflict. However, Massimo\'s family ties and a mysterious man bidding for Laura\'s heart complicate the lovers\' lives.',
    releaseDate: '2022',
    director: 'Barbara Białowąs',
    language: 'English',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
    image: 'images/365-days.jpeg',
    imageLandscape: '365-days-large.webp',
    type: 'Action, Drama',
    rating: 4,
  },
  {
    name: 'The Takedown',
    description: 'Ousmane and François are two cops with very different styles. The unlikely pair are reunited once again for a new investigation. What seemed to be a simple drug deal turns out to be a high-scale criminal case wrapped in danger.',
    director: 'Louis Leterrier',
    language: 'French',
    releaseDate: '6 May 2022',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
    image: 'images/takedown.jpeg',
    type: 'Comedy, Family',
    rating: 5,
  },
  {
    name: 'A Perfect Pairing',
    description: 'To win over a major client, a go-getter LA wine executive signs on to work at an Australian sheep farm, where she sparks with a rugged and mysterious local.',
    director: 'Stuart McDonald',
    releaseDate: '19 May 2022',
    language: 'English',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
    image: 'images/A-perfect-pairing.jpeg',
    type: 'Family, Drama',
    rating: 6.1,
  },
  {
    name: 'De-Laurte',
    description: 'A married couple on the brink of disillusion allows a stranger to live with them in their idyllic cottage. Will this stranger push their fragile state over.',
    director: 'Tom Hughes',
    releaseDate: '23 May 2021',
    language: 'English',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
    image: 'images/de-lautre.webp',
    type: 'Comedy, Drama',
    rating: 5,
  },
  {
    name: 'Captain India',
    description: 'Captain India is an unreleased computer-animated film. In this film Yuvraj Singh has given his voice, and the fantasy story is loosely based on the life of this cricketer.',
    director: 'Manny Bains',
    releaseDate: '2010',
    language: 'English',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
    image: 'images/captain-india.jpeg',
    type: 'Action, Drama',
    rating: 8,
  },
  {
    name: 'Metal Lords',
    description: 'For teenage misfits Hunter and Kevin, the path to glory is clear: devote themselves to metal, win Battle of the Bands, and be worshipped like gods.',
    director: 'Peter Sollett',
    releaseDate: '8 April 2022',
    language: 'English',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
    image: 'images/metal-lords.jpeg',
    type: 'Drama, Thriller',
    rating: 6.7,
  },
  {
    name: 'RRR',
    description: 'A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s.',
    director: 'Stuart McDonald',
    releaseDate: '19 May 2022',
    language: 'English',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
    image: 'images/rrr.webp',
    type: 'Comedy, Drama',
    rating: 1,
  },
  {
    name: 'Yodha',
    description: 'Bunny falls in love with Mahalaxmi, whose father Somaraju is a rich businessman. When Somaraju agrees to let them marry, Bunny puts forth the condition that he wants Somaraju\'s entire wealth as dowry.',
    director: 'Sangeeth Sivan',
    releaseDate: '3 September 1992',
    language: 'Malayalam',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
    image: 'images/yodha.jpeg',
    type: 'Thriller, Drama',
    rating: 8.2,
  },
  {
    name: 'The Presence of Love',
    description: 'An adjunct professor bonds with a single father after traveling to England to visit the farm where her late mother grew up.',
    director: 'Maclain Nelson',
    releaseDate: '19 May 2022',
    language: 'English',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
    image: 'images/presence.jpg',
    type: 'Thriller, Drama',
    rating: 7.2,
  },
]

const seats = Array.from({ length: 8 * 8 }, (_, i) => i)


export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])
  return (
    <View style={styles.container}>
       <Image
            style={styles.tinyLogo}
            source={require('./images/logo.svg')}
          />
        <View style={styles.movieBlock}>
          <View style={styles.movieImage}>
            <View style={styles.movieDescription}>
              <Text style={styles.movieDescriptionHeading}>{selectedMovie.name}</Text>
              <Text style={styles.movieDetails}>{selectedMovie.description}</Text>
              <Text style={styles.movieDetails}>{selectedMovie.type}</Text>
              <Text style={styles.movieDetails}>IMDB Rating: {selectedMovie.rating}</Text>
              <Text style={styles.movieDetails}>Director: {selectedMovie.director}</Text>
              <Text style={styles.movieDetails}>Release Date: {selectedMovie.releaseDate}</Text>
              <Text style={styles.movieDetails}>Language: {selectedMovie.language}</Text>
              <Text style={styles.movieDetails}>Price: ${selectedMovie.price}</Text>
              <Button style={styles.watchTrailer} color="red" title="Watch Trailer" accessibilityLabel="Watch Trailer" />

            </View>
          </View>
          <View className='mt-10'>
            <Text style={styles.reserveSeat}>Reserve Seat of {selectedMovie.name} &#8595;</Text>

            {/* <ShowCase /> */}
            <Cinema
              movie={selectedMovie}
              selectedSeats={selectedSeats}
              onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
            />

            
            {selectedSeats.length > 0 && (
              <Text>
                <Text>Congratulations,</Text> <Text className="count">{selectedSeats.length}</Text>{' '}
                <Text>seats are reserved for the price of {' '}</Text>
                <Text className="total">
                  ${selectedSeats.length * selectedMovie.price}  {' '}
                </Text>
                <Text>Enjoy watching {selectedMovie.name}</Text>
                </Text>
            )}
            
          
          </View>
        </View>

      <Text style={styles.latestMovies}>Change movie:</Text>

      <FlatList
        data={movies}
        renderItem={({item, index}) => <Item movie={item} index={index} onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
        }} />}
      />



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    color: '#fff',
  },
  movieBlock: {
    display: 'flex',
    marginLeft: '10px',
    marginRight: '10px',
    paddingBottom: '4px',
    marginBottom: '3px',
  },
  movieImage: {
    display: 'grid',
  },
  movieDescription: {
    padding: '16px',
    gridColumn: 'span 2 / span 2',
    color: '#fff',
  },
  movieDescriptionHeading: {
    fontSize: '2rem',
    lineHeight: '1',
    color: '#fff',
  },
  movieDetails: {
    fontSize: '16px',
    marginBottom: '4px',
    color: '#fff',
  },
  watchTrailer: {
    fontSize: '1rem',
    lineHeight: '1rem',
    backgroundColor: 'red',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    textAlign: 'center',
    color: '#fff',
  },
  tinyLogo: {
    width: '435px',
    height: '100px',
    backgroundColor: '#000',
    maxWidth: '100%',
  },
  reserveSeat: {
    fontSize: '1rem',
    color: 'red',
    backgroundColor: '#ccc',
    fontWeight: 'bold',
    paddingLeft: '4px',
    paddingRight: '4px',
    paddingTop: '3px',
    paddingBottom: '2px',
    borderRadius: '3px',
    TextAlign: 'center',
  },
  movieList: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  latestMovies: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '10px',
    marginBottom: '10px',
    color: '#fff',
  },
  cinema: {
    marginBottom: '18px',
    perspective: '400px',
    display: 'grid',
    placeItems: 'center',
    gridGap: '24px',
  },
  screen: {
    height: '57px',
    backgroundColor: '#fff',
    width: '78%',
    transform: 'rotateX(-30deg) scale(1.1)',
    boxShadow: '0 3px 10px 2px'
  },
  seats: {
    display: 'grid',
    gridGap: '6px',
    gridTemplateColumns: 'repeat(8, min-content)',
    alignItems: 'center',
  },
  seat: {
    display: 'inline-block',
    width: '32px',
    height: '24px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    transition: 'transform 0.3s ease-in-out',
    position: 'relative',
    top: '1px',
  },
  selected: {
    backgroundColor: '#7bc47f',
  },
  occupied: {
    backgroundColor: '#cfcfcf',
  },
  title: {
    fontSize: '20px',
    color: '#fff',
    cursor: 'pointer',
  }

});







const Item = ({ movie, index, onChange }) => {
  const source = movie.image
  const changeMovie = (movie) => {
    onChange(movie)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
  <View style={styles.item}>
    <Text style={styles.title} onClick={() => changeMovie(movie)}>{movie.name}</Text>
  </View>
)}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {

      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {

      onSelectedSeatsChange([...selectedSeats, seat])
    }

    const isOccupied = movie.occupied.includes(seat)

    

  }

  return (
    <View style={styles.cinema}>
      <View style={styles.seats}>
        {seats.map(seat => {
          let backgroundColor = '#626262'

          const isOccupied = movie.occupied.includes(seat)
          const isSelected = selectedSeats.includes(seat)

          if (isOccupied) {
            backgroundColor= 'blue'
          } else if(isSelected) {
            backgroundColor="green"
          } else {
            backgroundColor="#626262"
          }
          return (
            <View
              tabIndex="0"
              key={seat}
              style={
                [
                  styles.seat, {backgroundColor: backgroundColor}
                ]
              }
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </View>
    </View>
  )
}