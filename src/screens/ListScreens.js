import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [

        { name: "Ishan", Age: "21" },
        { name: "Aaku", Age: "19" },
        { name: "Abhishek", Age: "21" },
        { name: "Shweta" , Age: "20"},
        { name: "Keshav" , Age: "20"},
        { name: "Devanshi✨" , Age: "21"},
        { name: "Yuvika", Age: "21" },
    ]

    return (

        <FlatList

           keyExtractor={(friend)=> friend.name}

           showsVerticalScrollIndicator = {false}

            data={friends}

            renderItem={({ item }) => {

                return <Text style = {styles.ListStyle}>{item.name} - Age {item.Age}</Text>;

            }}

        />
    );


};


const styles = StyleSheet.create({

    ListStyle:{
        marginVertical: 50,
        marginLeft:"auto",
        marginRight:"auto"
    }

});

export default ListScreen;