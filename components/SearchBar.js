import {View, TextInput} from 'react-native';
import React from 'react';

import {
  Button,
  FlatList,
  Icon,
  IconButton,
  ChevronLeftIcon,
  Image,
  Box,
  Flex,
  Center,
  Text,
  VStack,
  HStack,
  Divider,
  Heading,
  Input,
  SearchIcon,
} from 'native-base';

const SearchBar = ({onSearch, texto}) => {
  return (
    <View >
      <VStack
        px={4}
        my="4"
        space={5}
        w="100%" 
        divider={
          <Box px="2">
            <Divider />
          </Box>
        }>
        <VStack w="100%" space={5} alignSelf="center">
          <Heading color={'white'} fontSize="xl">
            {texto} 
          </Heading>
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1"
            px="2"
            onChangeText={onSearch}
            InputLeftElement={<SearchIcon ml="2" size="4" color="gray.400" />}
          />        
          
        </VStack>
      </VStack>
    </View>
  );
};

export default SearchBar;
