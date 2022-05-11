import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BestImages from '../components/BestImages';

const VoteImages = () => {
    return (
        <View>
            <Text style={styles.title}>Vote now for the best Images !</Text>
            <BestImages title='Forest' source={require('../../assets/forest.jpg')} />
            <BestImages title='Beach' source={require('../../assets/beach.jpg')} />
            <BestImages title='Mountain' source={require('../../assets/mountain.jpg')} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>VOTE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightblue',
        width: 90,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        textTransform: 'uppercase',
        color: 'lightblue',
        paddingBottom: 20,
        paddingTop: 10,
        fontSize: 20,
        alignSelf: 'center',
    }
});

export default VoteImages;