import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    return (state.counter + action.payload < 0 
    ? state
    : {...state, counter: state.counter + action.payload}
    );
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter:0});

    return <View>
        <Button title="Increase" onPress={()=> dispatch({type:'counter', payload: 1})}/>
        <Button title="Decrease" onPress={()=> dispatch({type:'counter', payload: -1})}/>
        <Text>Curren Count: {state.counter} </Text>

    </View>
};

const styleSheet = StyleSheet.create({

});

export default CounterScreen;