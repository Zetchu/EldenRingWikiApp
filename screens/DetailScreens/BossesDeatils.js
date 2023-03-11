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

const BossesDeatils = ({route, navigation}) => {
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
             HP: {route.params.item.item.healthPoints}
            </Text>
            <Text color={'white'} fontSize={'xl'} px={4}>
              {route.params.item.item.location}
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
            <Text color={'white'} fontSize={'xl'} px={4}>
             Loot:  
             </Text>
             {route.params.item.item.drops.map((item, index) => (
            

         
                
                <Text color="white" px={4} fontSize={'xl'}>
                  {item}
                </Text>
              
          
            
               
                ))}


            
    
           
              
    
    
            
       
          </ScrollView>
        </Box>
      );
    };

export default BossesDeatils