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



const ArmorsDeatils = ({navigation,route}) => {
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
        <Text color={'white'} fontSize={'sm'} px={4} fontWeight={300}>
          Weight: {route.params.item.item.weight}
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


        <Center flex={1} w={'100%'}>
          <Box bg="primary.2" w={'94%'} rounded="lg">
            <Text textAlign={'center'} py={3} fontSize={'xl'} color={'white'}>
              Demage negation
            </Text>


               {/* {DMGNEG} */}

            <Box flex={1} flexDirection="row" flexWrap={'wrap'} justifyContent={'center'} w={'100%'}  >
              {route.params.item.item.dmgNegation.map((item, index) => (
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

        <Center flex={1} w={'100%'} my={5}>
          <Box bg="primary.2" w={'94%'} rounded="lg">
            <Text textAlign={'center'} py={3} fontSize={'xl'} color={'white'}>
              Resistance
            </Text>


               {/* {RES} */}

            <Box flex={1} flexDirection="row" flexWrap={'wrap'} justifyContent={'center'} w={'100%'}  >
              {route.params.item.item.resistance.map((item, index) => (
                <Box p={3} key={item.id}  w={'33%'}>
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
  );
}

export default ArmorsDeatils