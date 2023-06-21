import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import { useEffect } from 'react'
import { collection, getColl, getDoc, getDocs, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useState } from 'react'
import MenuItem from '../components/MenuItem'


const OrderCompleted = () => {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                id: 4,
                title: 'Chicken sandwich',
                description: 'Amazing Indian dish with tedelrion chicken off the sizzles',
                price: '$3.30',
                image: 'https://www.seriouseats.com/thmb/VL0ghw8gfbLCvhRvAWE22SNcMeo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-best-grilled-chicken-sandwich-ever-hero-04-6a1d2e743a87423bac1f4ff53bd2926b.jpg'
            },
        ]
    })
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)

    const total = items.map(item => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0)

    const totalUsd = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })

    useEffect(() => {

        async function getData() {

            const q = query(collection(db, "orders"), orderBy('createdAt', 'desc'), limit(1));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setLastOrder(doc.data())
            });
        }

        return () => getData()

        
    }, [])


    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{
                margin: 15
            }}>
                <LottieView
                    style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
                    source={require('../assets/animations/check-mark.json')}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text>Your order at {restaurantName} has been placed for {totalUsd}</Text>
                <MenuItem hideCheckbox={true} food={lastOrder.items} />
                <LottieView
                    style={{ height: 200, alignSelf: 'center' }}
                    source={require('../assets/animations/cooking.json')}
                    autoPlay
                    speed={0.5}
                />
            </View>
        </View>
    )
}

export default OrderCompleted