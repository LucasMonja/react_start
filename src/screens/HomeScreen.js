import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {


  return <View>
            <Text style={styles.text}>Hello!</Text> 
            <Button 
              onPress={ () => props.navigation.navigate('Components') }
              title="Go to Components Demo" 
            />
            <Button style={styles.button}
              onPress={ () => props.navigation.navigate('List') }
              title="Go to List Demo"
            />
            <Button
              onPress={ () => props.navigation.navigate('Image') }
              title="Go to Image Screen"
            />
            <Button
              onPress={ () => props.navigation.navigate('Counter') }
              title="Go to Counter Screen"
            />
            <Button
              onPress={ () => props.navigation.navigate('Vote') }
              title="Go to Vote Screen"
            />
            <Button
              onPress={ () => props.navigation.navigate('Color') }
              title="Go to Color Screen"
            />
            <Button
              onPress={ () => props.navigation.navigate('Square') }
              title="Go to Square Screen"
            />
          
          </View>
};

/* 
<TouchableOpacity onPress={ () => props.navigation.navigate('List') }>
  <Text>Go to List Demo</Text>
</TouchableOpacity>

*/

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'red',
    textAlign: 'center',
  },
});

export default HomeScreen;
