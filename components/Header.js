import { View } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Center,
  ChevronLeftIcon,
  FavouriteIcon,
  Flex,
  Icon,
  Text,
  SearchIcon,
} from "native-base";

const Header = ({ name, rightIcon, navigation }) => {
  return (
    <Box bg="primary.100">
      <Flex direction="row" width={"100%"} justifyContent="space-between">
        <Button
          bg="primary.2"
          width="30px"
          h="30px"
          p={7}
          ml={2}
          borderRadius="100"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Center bg="primary.2">
            <ChevronLeftIcon color="white" />
          </Center>
        </Button>

        {/* LOGO HERE */}
        <Box justifyContent={"center"}>
          <Text color="white"> {name}</Text>
        </Box>

        <Button
          bg="primary.2"
          width="30px"
          h="30px"
          p={7}
          mr={2}
          borderRadius="100"
        >
          <Center bg="primary.400">{rightIcon}</Center>
        </Button>
      </Flex>

      {/* <Button
          colorScheme="primary"
          onPress={()=>{
            callTestApi();
          }}
        
        >
          Primary
        </Button> */}
    </Box>
  );
};

export default Header;
