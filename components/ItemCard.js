import { View } from 'react-native'
import React from 'react'
import { Button, Image, Text, VStack } from 'native-base';

const ItemCard = ({item, navigation, route, texto}) => {
   
  return (
    <VStack>
              {console.log('data',item.name)}
    <Button
    
      bgColor={'primary.2'}
      rounded={'lg'}
      m={4}
      onPress={() => {
        navigation.navigate(texto + 'Deatils', {item});
      }}>
      <Text color="white" textAlign={'center'} p={2} fontSize={'lg'}>
        {item.name}
      </Text>
      <Image
        source={{
          uri: item.image,
        }}
        alt="Alternate Text"
        size="xl"
      />
  
    </Button>
    </VStack>
  )
}

export default ItemCard