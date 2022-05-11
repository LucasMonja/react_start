import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1', age: 20},
        { name: 'Friend #2', age: 30},
        { name: 'Friend #3', age: 23},
        { name: 'Friend #4', age: 31},
        { name: 'Friend #5', age: 42},
        { name: 'Friend #6', age: 50},
        { name: 'Friend #7', age: 18}
    ];

    return <View>
            <FlatList 
                keyExtractor={(friend) => friend.name}
                data={friends}
                renderItem={({ item }) => { 
                    return <Text style={styles.textStyle}>{item.name} - Age {item.age} </Text>
                }}

                    /*
                        Dentro de una lista tenemos objetos de tipo 'element'
                        element = { item: {name: 'Friend #1'}, index=0}
                        Si usamos 'item' hacemos directamente referencia al contenido de cada elemento de la lista
                     */ 
            
            />
    </View>

};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 45
    }
})

export default ListScreen;