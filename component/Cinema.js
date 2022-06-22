import React from 'react';
import { View, StyleSheet, } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        color: '#fff',
    },
    cinema: {
        color: '#00FF00',

    },
    seats: {
        display: 'grid',
        gridGap: '6px',
        gridTemplateColumns: 'repeat(8, min-content)',
        alignItems: 'center',
        marginBottom:'32px',
        marginTop:'8px',


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
        backgroundColor: 'white',
    },
});

const Cinema = (props) => {
    const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

    const reserveSeatSelection = (seat) => {
        if (props.selectedSeats.includes(seat)) {
            props.onSeatSelection(props.selectedSeats.filter(selectedSeat => (selectedSeat !== seat)))
        } else {
            props.onSeatSelection([...props.selectedSeats, seat])
        }

    }

    

    return (
        <View style={styles.container}>
            <View style={styles.seats}>
                

                {
                    seats.map((seat) => {
                         let backgroundColor

                        const occupied=props.selectedMovie.occupied.includes(seat)
                        const selected = props.selectedSeats.includes(seat);

                        if (occupied) {
                            backgroundColor= 'grey'
                          } else if (selected) {
                            backgroundColor= 'green'

                          } else {
                            backgroundColor="white"
                          }
                        return (<View onClick={occupied ? null : () => reserveSeatSelection(seat)}
                            style={
                                [
                                  styles.seat, {backgroundColor: backgroundColor}
                                ]
                              } key={seat} />)

                    })
                }
            </View>
        </View>)
}
export default Cinema