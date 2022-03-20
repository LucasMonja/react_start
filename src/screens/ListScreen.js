import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1'},
        { name: 'Friend #2'},
        { name: 'Friend #3'},
        { name: 'Friend #4'},
        { name: 'Friend #5'}
    ];

    return <View>
            <FlatList 
                keyExtractor={(friend) => friend.name}
                data={friends}
                renderItem={({ item }) => { 
                    return <Text>{item.name}</Text>
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

})

export default ListScreen;