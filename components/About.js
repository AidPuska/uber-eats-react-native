import { View, Text, Image } from 'react-native'
import React from 'react'

const About = ({route}) => {
    const {restaurant} = route.params;

    const formatedCategories = restaurant.categories.map(cat => cat.title).join(" · ")
    const description = `${formatedCategories} ${restaurant.price ? ' · ' + restaurant.price : ''} · 💸 · ${restaurant.rating} ⭐ ${restaurant.review_count}`

    return (
        <View style={{flex: -1}}>
            <RestaurantImage image={restaurant.image_url} />

            <RestaurantTitle title={restaurant.name} />

            <RestaurantDescription description={description} />
        </View> 
    )
}

const RestaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{
            width: '100%',
            height: 200
        }}
    />
)

const RestaurantTitle = (props) => (
    <Text style={{ fontWeight: '600', fontSize: 23, paddingHorizontal: 10, paddingVertical: 5 }}>{props.title}</Text>
)

const RestaurantDescription = (props) => (
    <Text style={{ fontSize: 15, fontWeight: '400', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 2 }}>{props.description}</Text>
)

export default About