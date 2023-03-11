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
const ShieldsDeatils = ({route, navigation}) => {
    const [text, setText] = useState(
        route.params.item.item.description.slice(0, 75),
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
            {/* <Button
           w={100}
            colorScheme="primary"
            onPress={()=>{
         
              console.log('OVO JE TIEM U WEPON DEATILS',route.params.item.item);
            }}
          
          >
            Log The Item
          </Button> */}
            <Box bg="primary.100" p={12} rounded="lg">
              <Image
                source={{
                  uri: route.params.item.item.image,
                }}
                alt="Alternate Text"
                size="2xl"
              />
            </Box>
    
            {/* {console.log('WEPON DETAILS KURAC', route.params.weapon)} */}
            <Text color={'white'} fontSize={'2xl'} px={4}>
              {route.params.item.item.name}
            </Text>
            <Text color={'white'} fontSize={'xl'} px={4}>
              {route.params.item.item.category}
            </Text>
            <Text color="gray.500" px={4} py={2}>
              {text}
              {!readMore && '...'}
    
              <Text
                color={'gray.300'}
                onPress={() => {
                  if (!readMore) {
                    setText(route.params.item.item.description);
                    setReadMore(true);
                  } else {
                    setText(route.params.item.item.description.slice(0, 75));
                    setReadMore(false);
                  }
                }}>
                {readMore ? ' Show Less' : ' Read More'}
              </Text>
            </Text>
    
            <Flex direction="row" justifyContent={'space-evenly'} mx={5} my={3}>
              {/* REQUIRED ATTRIBUTES BOX HERE  */}
    
              <Box bgColor={'primary.2'} rounded={'lg'} w={'46%'} mr={6}>
                <Text color={'white'} textAlign={'center'} fontSize={'md'} p={2}>
                  Required Attributes
                </Text>
                {route.params.item.item.requiredAttributes.map((item, index) => (
                  <Box
                    flex={1}
                    p={2}
                    key={item.id}
                    flexDirection="row"
                    justifyContent={'space-between'}
                    px={10}>
                    <Text color="white" textAlign={'center'} fontSize={'lg'}>
                      {item.name}
                    </Text>
                    <Text color="white" textAlign={'center'} fontSize={'lg'}>
                      {item.amount}
                    </Text>
                  </Box>
                ))}
              </Box>
    
              {/* SCALING ATTRIBUTES BOX HERE  */}
    
    
                 
              <Box bg="primary.2" rounded="lg" w={'46%'} ml={6}>
                <Text color={'white'} textAlign={'center'} fontSize={'md'} p={2}>
                  Scaling Attributes
                </Text>
    
                {route.params.item.item.scalesWith.map((item, index) => (
                  <Box
                    flex={1}
                    p={2}
                    key={item.id}
                    flexDirection="row"
                    justifyContent={'space-between'}
                    px={10}>
                    <Text color="white" textAlign={'center'} fontSize={'lg'}>
                      {item.name}
                    </Text>
                    <Text color="white" textAlign={'center'} fontSize={'lg'}>
                      {item.scaling}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Flex>
    
            {/* SCALING ENDS */}
            <Center flex={1} w={'100%'}>
              <Box bg="primary.2" w={'94%'} rounded="lg">
                <Text textAlign={'center'} py={3} fontSize={'2xl'} color={'white'}>
                  Attack
                </Text>
    
    
                   {/* {ATTAK} */}
    
                <Box flex={1} flexDirection="row" justifyContent={'center'}>
                  {route.params.item.item.attack.map((item, index) => (
                    <Box p={3} key={item.id}>
                      <Text color="white" fontSize={'lg'} textAlign={'center'}>
                        {item.name}
                      </Text>
                      <Text color="white" fontSize={'2xl'} textAlign={'center'} py={3}>
                        {item.amount}
                        {console.log(item.name)}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </Box>
                    
    
            </Center>
    
                   {/* {DEFENSE} */}
    
            <Center flex={1} w={'100%'} my={5}>
              <Box bg="primary.2" w={'94%'} rounded="lg">
                <Text textAlign={'center'} py={3} fontSize={'2xl'} color={'white'}>
                  Defense
                </Text>
    
    
    
                <Box flex={1} flexDirection="row" justifyContent={'center'}>
                  {route.params.item.item.attack.map((item, index) => (
                    <Box p={3} key={item.id}>
                      <Text color="white" fontSize={'lg'} textAlign={'center'}>
                        {item.name}
                      </Text>
                      <Text color="white" fontSize={'2xl'} textAlign={'center'} py={3}>
                        {item.amount}
                        {console.log(item.name)}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </Box>
                    
    
            </Center>
    
    
            
            {/* 
      DEFENSE
    
    <FlatList
            bg={'blueGray.100'}
            color="amber.500"
            numColumns={4}
            data={route.params.item.item.defence}
            contentContainerStyle={{width: '100%', margin: 0}}
            renderItem={item => (
              <Box>
                <Text color="black">{item.item.name}</Text>
                <Text color="black">{item.item.amount}</Text>
             
              </Box>
            )}
            keyExtractor={item => item.name}
          />
    
    
     
    
    
    
    
     */}
          </ScrollView>
        </Box>
      );
    };

export default ShieldsDeatils