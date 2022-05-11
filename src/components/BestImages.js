import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const BestImages = ({title, source}) => {
    return (
        <View style={styles.align}>
            <Image source={source}/>
            <Text>{title} - Points:</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    align: {
        alignSelf: 'center',
        paddingBottom: 40,
    }
});

export default BestImages;