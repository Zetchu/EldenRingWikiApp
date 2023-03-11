import {View} from 'react-native';
import React from 'react';
import {Box, Button, Center, HStack, Image, Text, VStack} from 'native-base';

const CategoryBox = ({data, navigation}) => {
  return (
    <Button
      w={'31%'}
      h={'120px'}
      bg="primary.2"
      m={1}
      rounded={'xl'}
      colorScheme="gray"
      onPress={() => {
        navigation.push('UltimateComponent',{data, navigation});
        console.log(data);
      }}>
      <Box alignItems="center" justifyContent={'center'}>
        <Image
          source={data.thumbnail}
          alt={data.name}
          width={'80%'}
          height={'60%'}
        />
        <Text color="white" fontFamily={'Mantinia'} fontSize={'md'} pt={2}>
          {data.name}
        </Text>
      </Box>
    </Button>
  );
};

export default CategoryBox;
