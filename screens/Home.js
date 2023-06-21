import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTab from '../components/HeaderTab'
import SearchBar from '../components/SearchBar'
import AndroidSafeArea from '../components/AndroidSafeArea'
import Categories from '../components/Categories'
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem'
import BottomTab from '../components/BottomTab'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const api_key = ENV.YELP_API_KEY;

const Home = ({route, navigation}) => {

    const [restaurants, setRestaurants] = useState([])
    const [city, setCity] = useState('Los Angeles');
    const [activeTab, setActiveTab] = useState('Delivery')

    const getRestaurants = async () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
        
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }
        
        return fetch(yelpUrl, apiOptions)
            .then(res => res.json())
            .then(res => setRestaurants(res.businesses.filter(bus => bus.transactions.includes(activeTab.toLowerCase()))))
    }

    useEffect(() => {
        getRestaurants()
    }, [city, activeTab])

    const handlePress = (name) => {
        setCity(name)
    }

    return (
        <View /* style={AndroidSafeArea.AndroidSafeArea} */>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar handlePress={handlePress} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem navigation={navigation} restaurants={restaurants} />
            </ScrollView>

            <Divider width={1} />

            <BottomTab />
        </View>
    )
}

export default Home
