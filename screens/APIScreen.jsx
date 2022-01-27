import React, {useState, useEffect} from 'react'
import {View, FlatList} from 'react-native'
import Card from '../components/Card'
import newAPI from '../api/index'

const APIScreen = () => {

    // const [news, setNews] = useState([])
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    function getNewsFromAPI() {
        newAPI.get('top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1')
            .then(async function (response) {
                setNews(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    if (!news) {
        return null
    }

    return (
        <View>
            <FlatList
                data={news.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <Card item={item}/>
                }}
            />
        </View>
    )
}

export default APIScreen