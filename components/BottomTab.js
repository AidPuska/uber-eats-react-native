import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

const BottomTab = () => {
    return (
        <View style={{
            flexDirection: 'row',
            margin: 10,
            marginHorizontal: 30,
            justifyContent: 'space-between'
        }}>
            <IconComponent icon='home' name='Home' />
            <IconComponent icon='search' name='Browse' />
            <IconComponent icon='shopping-basket' name='Grocery' />
            <IconComponent icon='receipt' name='Orders' />
            <IconComponent icon='user' name='Account' />
        </View>
    )
}

const IconComponent = ({name,icon}) => (
    <TouchableOpacity>
        <FontAwesome5 
            name={icon}
            size={20}
            style={{
                marginBottom: 3,
                alignSelf: 'center'
            }}
        />
        <Text>{name}</Text>
    </TouchableOpacity>
)

export default BottomTab