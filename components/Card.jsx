import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')

const Card = ({item: newsItem}) => {
    console.log(newsItem)
    return (
        <View style={styles.card}>
            <Text style={styles.title}> {newsItem.title}</Text>
            <Text style={styles.author}>{newsItem.author} </Text>
            <Image style={styles.image} source={newsItem.urlToImage ? {uri: newsItem.urlToImage} : null}/>
            <Text style={styles.description}>{newsItem.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 18
    },
    image: {
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    author: {
        marginBottom: 0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'
    }
})

export default Card;