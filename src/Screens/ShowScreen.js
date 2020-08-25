/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../Context/BlogContext'

const ShowScreen = ({route}) => {
    const {state} = useContext(Context);
    const {id} = route.params;
    const blogPost = state.find((blogPost) => blogPost.id === id);
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>{blogPost.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    title: {
        fontSize: 25,
        alignSelf: 'center',
        color: '#fff'
    },
});

export default ShowScreen;