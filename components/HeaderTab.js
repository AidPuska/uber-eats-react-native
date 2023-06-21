import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HeaderTab = ({activeTab, setActiveTab}) => {

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton
                text='Delivery'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <HeaderButton
                text='Pickup'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => {
    return (
        <View>
            <TouchableOpacity style={{
                backgroundColor: props.activeTab === props.text ? 'black' : 'white',
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
                marginTop: 5
            }}
                onPress={() => props.setActiveTab(props.text)}
            >
                <Text style={{ fontSize: 15, fontWeight: '900', color: props.activeTab === props.text ? 'white' : 'black' }}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderTab