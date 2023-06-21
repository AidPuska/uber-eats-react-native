import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import OrderItem from './OrderItem';
import { db } from '../firebase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

const ViewCart = ({ navigation, route }) => {

  const { restaurant } = route.params;

  const [modalVisible, setModalVisible] = useState(false)

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
  const total = items.map(item => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0)

  const totalUsd = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD'
  })

  const addOrderToFirebase = () => {
    addDoc(collection(db, 'orders'), {
      items: items,
      restaurantName: restaurantName,
      createdAt: Timestamp.now()
    })
    setModalVisible(false);
    navigation.navigate('OrderCompleted')
  }

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1
    },

    restaurantName: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10
    },

    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },

    subtotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10
    }
  })

  const chechkoutModalContext = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalUsd}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity style={{
                marginTop: 20,
                backgroundColor: 'black',
                padding: 10,
                borderRadius: 25,
                width: 300,
                alignItems: 'center',
                position: 'relative'
              }}
                onPress={() => {
                  addOrderToFirebase()
                }}
              >
                <Text style={{color: 'white', fontSize: 17}}>Checkout</Text>
                <Text style={{color: 'white', position: 'absolute', right: 10, bottom: '50%'}}>{totalUsd ? totalUsd : ' '}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )
  }

  return (
    <>
      <Modal
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {chechkoutModalContext()}
      </Modal>
      {total ? (
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={{
            marginTop: 20,
            backgroundColor: 'black',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            borderRadius: 30,
            alignItems: 'center',
            position: 'absolute',
            zIndex: 999,
            width: 300,
            bottom: 10
          }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ width: 40 }}></Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '300' }}>View Cart</Text>
            <Text style={{ color: 'white', fontSize: 14, textAlign: 'right', fontWeight: '300' }}>{totalUsd}</Text>
          </TouchableOpacity>
        </View>) : (
        <></>
      )}
    </>
  )
}

export default ViewCart