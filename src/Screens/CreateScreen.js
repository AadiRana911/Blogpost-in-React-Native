/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../Context/BlogContext'

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);
    return (
        <View>
            <Text style = {styles.label}>Enter Title: </Text>
            <TextInput style = {styles.input} value = {title} onChangeText = {(text) => setTitle(text)} />

            <Text style = {styles.label}>Enter Content: </Text>
            <TextInput style = {[styles.input]} value = {content} onChangeText = {(text) => setContent(text)} multiline = {true}/>
        
            <TouchableOpacity style = {styles.button} 
            onPress = {() => {
                addBlogPost(title, content, () => {
                    navigation.navigate('Index')
                })
            }}>
                <Text style = {styles.buttonText}>Add Blogpost</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#000',
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 10,
    },
    label: {
        fontSize: 22,
        marginHorizontal: 10
    },
    button: {
        // backgroundColor: 'red',
        marginTop: 20,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: 'blue'
    }
});

export default CreateScreen;