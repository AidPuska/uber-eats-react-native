import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/About'
import { Divider } from 'react-native-elements'
import MenuItem from '../components/MenuItem'
import ViewCart from '../components/ViewCart'

const dishes = [
  {
      id: 0,
      title: 'Tandoori Chicken',
      description: 'Amazing Indian dish with tedelrion chicken off the sizzles',
      price: '$19.20',
      image: 'https://royalpunjabi.com.au/wp-content/uploads/2023/03/Kadhai-Chicken.jpg',
  },
  {
      id: 1,
      title: 'Doner',
      description: 'Amazing Indian dish with tedelrion chicken off the sizzles',
      price: '$3.50',
      image: 'https://www.doner.haus/wp-content/uploads/2023/03/this-thing-2.jpg'
  },
  {
      id: 2,
      title: 'Margarita',
      description: 'Amazing Indian dish with tedelrion chicken off the sizzles',
      price: '$5.90',
      image: 'https://audikaresto.com/wp-content/uploads/2019/04/demo-pizza6.jpg'
  },
  {
      id: 3,
      title: 'Rizoto',
      description: 'Amazing Indian dish with tedelrion chicken off the sizzles',
      price: '$2',
      image: 'https://podravkaiovariations.blob.core.windows.net/89e2d9e2-6403-11eb-941d-0242ac120022/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp'
  },
  {
      id: 4,
      title: 'Chicken sandwich',
      description: 'Amazing Indian dish with tedelrion chicken off the sizzles',
      price: '$3.30',
      image: 'https://www.seriouseats.com/thmb/VL0ghw8gfbLCvhRvAWE22SNcMeo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-best-grilled-chicken-sandwich-ever-hero-04-6a1d2e743a87423bac1f4ff53bd2926b.jpg'
  },
]

const Details = ({route, navigation}) => {

  const {restaurant} = route.params;

  return (
    <View style={{flex: 1}}>
        <About route={route} />
        <Divider width={1.8} style={{marginVertical: 20}} />
        <MenuItem restaurantName={restaurant.name} dishes={dishes} />
        <ViewCart navigation={navigation} route={route} />
    </View>
  )
}

export default Details