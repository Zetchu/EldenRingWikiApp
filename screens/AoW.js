import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'native-base';

const AoW = ({navigation}) => {
  return (
    <View>
      <Text>AoW</Text>
      <Button
        colorScheme="primary"
        onPress={()=>{
          navigation.goBack();
        }}
      
      >
        Primary
      </Button>
    </View>
  )
}

export default AoW