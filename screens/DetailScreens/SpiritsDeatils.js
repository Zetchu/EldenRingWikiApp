import {View} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Text,
  Image,
  Box,
  FavouriteIcon,
  Flex,
  Center,
  ScrollView,
} from 'native-base';
import Header from '../../components/Header';
const SpiritsDeatils = ({navigation, route}) => {
    const [text, setText] = useState(
        route.params.item.item.description
      );
      const [readMore, setReadMore] = useState(false);
  return (

    
    <Box flex={1}>
    <Header
      navigation={navigation}
      name={route.params.item.item.name}
      rightIcon={<FavouriteIcon color="white" />}
    />

    <ScrollView bg={'primary.100'} flex={1}>
    <Box bg="primary.100" p={12} rounded="lg">
        <Image
          source={{
            uri: route.params.item.item.image,
          }}
          alt="Alternate Text"
          size="2xl"
        />
      </Box>
          <Box px={4}>
      <Text color={'white'} fontSize={'2xl'} >
        {route.params.item.item.name}
      </Text>
      <Text color={'white'} fontSize={'xl'}>
          Effect: {route.params.item.item.effect}
        </Text>
      <Text color="gray.500"  >
        {text}
      </Text>

      <Flex  direction="row" justify={'space-between'} >
      <Text color={'white'} fontSize={'xl'}>
          Fp Cost: {route.params.item.item.fpCost}
        </Text>
        <Text color={'white'} fontSize={'xl'}>
          Hp Cost: {route.params.item.item.hpCost}
        </Text>
      </Flex>
      
    
       
      
       
       
        </Box>
        </ScrollView>
        </Box>
  )
}

export default SpiritsDeatils