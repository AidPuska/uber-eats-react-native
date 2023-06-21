import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const localRestaurants = [
    {
        name: 'Zeljo',
        image_url: 'https://korpa.ba/restaurant_uploads/xk0EEs8UKnWmSxjxpTXhe1mvTCBCwuC1.jpg',
        rating: 4.9,
    },
    {
        name: 'Beg',
        image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/22/3f/74/e0/hamburger.jpg',
        rating: 4.4,
    },
    {
        name: 'Kulin Dvor',
        image_url: 'https://s1.hocdn.com/cache/exp/max800xmax194/lodging/11000000/11000000/10992800/10992732/05eab094_b.jpg',
        rating: 5.0,
    },
]

const RestaurantItem = ({ restaurants, navigation }) => {



    return (
        <View>
            {restaurants ? restaurants.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.push('Details', {restaurant: item})} activeOpacity={1} style={{ marginBottom: 5 }}>
                    <View style={{ padding: 10, backgroundColor: 'white', marginTop: 5 }}>
                        <RestaurantImage item={item} />
                        <RestaurantText item={item} />
                    </View>
                </TouchableOpacity>
            )) : <View style={{ alignItems: 'center', marginTop: 50 }}><Text style={{ fontWeight: '700', padding: 10, backgroundColor: 'red', color: 'white', borderRadius: 20 }}>Not found...</Text></View>}
        </View>
    )
}

const RestaurantImage = ({ item }) => {
    return (
        <View style={{ position: 'relative' }}>
            <Image source={{
                uri: item.image_url,
            }}
                style={{ width: '100%', height: 200, resizeMode: 'cover', borderRadius: 5 }}
            />
            <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5 }}>
                <Ionicons name='heart' size={24} color={'red'} />
            </TouchableOpacity>
        </View>
    )
}

const RestaurantText = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
            <View>
                <Text style={{ fontSize: 16, fontWeight: '800' }}>{item.name}</Text>
                <Text style={{ fontWeight: '400', color: '#C0C0C0' }}>35-45 - min</Text>
            </View>

            <Text style={{ backgroundColor: '#eee', borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, fontWeight: '600' }}>{item.rating}</Text>
        </View>
    )
}

export default RestaurantItem