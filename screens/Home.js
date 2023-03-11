import {ImageBackground, SafeAreaView, View} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import {Box, Center, Container, FlatList, Flex, HStack, Image, Text, VStack} from 'native-base';
import img1 from '../assets/img1.jpg';
import { categoris } from '../constants/categoryData';
import CategoryBox from '../components/CategoryBox';

export default function Home({navigation}) {
  
  const [category, setCategory] = useState(categoris)
  
  return (
    <Box flex={1} bg="primary.100">
      <Header name="Elden Logo" />

      <Box alignItems={'center'} mt={5} h={'25%'}>
        <Box w={'90%'}>
          <ImageBackground
            source={img1}
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 25,
            }}
            alt="iomg1">
            <VStack flex={1} justifyContent="space-between">
              <Text color="white" zIndex={1} p={6} fontWeight={'bold'}>
                Welcome to the{'\n'} Elden App
              </Text>
              <Text color="white" zIndex={1} p={2} pb={5} fontWeight={'bold'}>
                Here you can find everything you
                {'\n'}need for your playtrough{' '}
              </Text>
            </VStack>
          </ImageBackground>
        </Box>
      </Box>
      <Text color="white" fontSize={'2xl'} p={6} fontWeight={'bold'}>
       Pick your category
      </Text>
            
           
            
             
            <FlatList  
              data={category}
              numColumns={3}
              contentContainerStyle={{width:'100%'}}
        
              renderItem={({item}) => 
            
                <CategoryBox data={item} navigation={navigation} />
               
              }
              keyExtractor={(item)  => item.id}
              showsVerticalScrollIndicator={false}
            />
        
            
      
      {/* flex={1} flexDirection='row' w={'100%'} */}
      </Box>
      
      
    
  );
}
