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

const IncantationsDeatils = ({navigation,route}) => {
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
      <Text color={'white'} fontSize={'xl'} >
        {route.params.item.item.category}
      </Text>
     
      <Text color="gray.500"  >
        {text}
      </Text>
      <Box flex={1} flexDir="row" justifyContent={'space-between'} mr={5}>
      <Text color={'white'} fontSize={'2xl'} py={3}>Cost {route.params.item.item.cost}</Text>
          <Text color={'white'} fontSize={'2xl'} py={3}> Slots {route.params.item.item.slots}</Text>
      </Box>
         
          <Text color={'white'} fontSize={'xl'} >Effects: {route.params.item.item.effects}</Text>
          </Box>
  
          <Center flex={1} w={'100%'} my={3}>
          <Box bg="primary.2" w={'94%'} rounded="lg">
            <Text textAlign={'center'} py={3} fontSize={'xl'} color={'white'}>
              Requires
            </Text>


               {/* {DMGNEG} */}

            <Box flex={1} flexDirection="row" flexWrap={'wrap'}  justifyContent={'center'} w={'100%'}  >
              {route.params.item.item.requires.map((item, index) => (
                <Box p={3} key={item.id}  w={'25%'}>
                  <Text color="white" fontSize={'md'} textAlign={'center'}>
                    {item.name}
                  </Text>
                  <Text color="white" fontSize={'2xl'} fontWeight={600} textAlign={'center'} py={3}>
                    {item.amount}
                    {console.log(item.name)}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
                

        </Center>

      
    </ScrollView>
  </Box>
  )
}

export default IncantationsDeatils