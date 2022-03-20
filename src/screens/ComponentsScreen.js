import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponetsScreen = () => {

    const name = 'Lucas';
    const greeting2 = <Text>Un tag dentro de una constante</Text>

    return <View>
                <Text style={styles.textStyleBig}>Getting started with React Native!</Text>
                <Text style={styles.textStyleLittle}>My name is {name}</Text>
                {greeting2}
            </View>
    
};

const styles = StyleSheet.create({
    textStyleBig: {
        fontSize: 45
    },
    textStyleLittle: {
        fontSize: 20
    }
})

export default ComponetsScreen;