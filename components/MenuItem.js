import { View, Text, Image, ScrollViewBase, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

const MenuItem = ({ restaurantName, hideCheckbox, marginLeft, dishes, food }) => {

    const dispatch = useDispatch()

    const selectItem = (item, checkBoxValue) => dispatch({
        type: 'ADD_TO_CART',
        payload: { ...item, restaurantName: restaurantName, checkBoxValue: checkBoxValue }
    })

    const cartItems = useSelector(state => state.cartReducer.selectedItems.items)

    const isFoodInCart = (dish, cartItems) => {
        return Boolean(cartItems.find(item => item.title === dish.title))
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {dishes && dishes.map((dish, index) => (
                    <View key={index}>
                        <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                            {hideCheckbox ? (<></>) :
                                (
                                    <BouncyCheckbox
                                        isChecked={isFoodInCart(dish, cartItems)}
                                        iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
                                        fillColor='green'
                                        innerIconStyle={{ borderRadius: 5 }}
                                        onPress={(checkBoxValue) => selectItem(dish, checkBoxValue)}
                                    />
                                )}
                            <FoodInfo dish={dish} />
                            <FoodImage dish={dish} marginLeft={marginLeft ? marginLeft : 0} />
                        </View>
                        <Divider width={0.5} style={{ marginHorizontal: 20 }} />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const FoodInfo = ({ dish }) => {
    return (
        <View style={{ flex: 3, gap: 5 }}>
            <Text style={{ fontWeight: '600', fontSize: 20 }}>{dish.title}</Text>
            <Text>{dish.description}</Text>
            <Text style={{ fontWeight: '600' }}>{dish.price}</Text>
        </View>
    )
}

const FoodImage = ({ dish, marginLeft }) => (
    <View>
        <Image
            source={{ uri: dish.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                flex: 1,
                marginLeft: marginLeft
            }}
        />
    </View>
)

export default MenuItem