/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {Context} from '../Context/BlogContext'
import Entypo from 'react-native-vector-icons/Entypo'

const IndexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    return (
        <View style = {{flex: 1}}>
            <View style = {{flex: 0.89}}>
                <FlatList 
                    data = {state}
                    keyExtractor = {blogPost => blogPost.title}
                    renderItem = {({item}) => {
                        return(
                            <TouchableOpacity onPress = {() => navigation.navigate('Show', {id: item.id})}>
                                <View style = {styles.row}>
                                    <Text style = {styles.title}>{item.title} - {item.id}</Text>
                                    <TouchableOpacity onPress = {() => {deleteBlogPost(item.id)}}>
                                        <Entypo style = {styles.icon} name = 'trash'/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            <TouchableOpacity style = {styles.touchableOpacityStyle} activeOpacity = {0.5} onPress = {() => navigation.navigate('Create')}>
                <Entypo style = {styles.floatingButtonStyle} name = 'plus'/>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    touchableOpacityStyle: {
        position: 'absolute', 
        width: 60, 
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        shadowOffset: {
            width: 1,
            height: 1
        },
        right: 20, 
        bottom: 20,
        elevation: 10,
        backgroundColor: '#ff0000'
    },
    floatingButtonStyle: {
        color: '#fff',
        fontSize: 25
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 5,
        marginVertical: 7,
        marginHorizontal: 5,
        borderWidth: 3,
        borderColor: 'blue'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 28,
        color: 'blue'
    }
});

export default IndexScreen;