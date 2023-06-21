import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({handlePress}) => {

  const google_api = 'AIzaSyCg18eE5cHN9YKJDp6q8ZSKPb3zntiZIHc';

  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyCg18eE5cHN9YKJDp6q8ZSKPb3zntiZIHc'}}
        placeholder='Search'
        fetchDetails={true}
        onPress={(data, details) => {
          const city = data.terms[0]['value']
          handlePress(city)
        }}
        styles={{
            textInput: {
                backgroundColor: '#eee',
                borderRadius: 20,
                fontWeight: '700',
                marginTop: 7
            },
            textInputContainer: {
                borderRadius: 50,
                backgroundColor: '#eee',
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 10
            }
        }}
        
        renderLeftButton={() => (
            <View style={{marginLeft: 10}}>
                <Ionicons name='location-sharp' size={24} />
            </View>
        )}

        renderRightButton={() => (
                <View style={{flexDirection: 'row', marginRight: 10, alignItems: 'center', gap: 2, backgroundColor: 'white', borderRadius: 20, padding: 10}}>
                    <Ionicons name='time-outline' size={18} />
                    <Text>Search</Text>
                </View>
        )}
      />
    </View>
  )
}

export default SearchBar