import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
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
} from "native-base";
import Header from "../../components/Header";
import { _storeData } from "../../storage";
const NPCsDeatils = ({ route, navigation }) => {
  const [text, setText] = useState('"' + route.params.item2.item.quote + '"');
  const [readMore, setReadMore] = useState(false);
  return (
    <Box flex={1}>
      <Header
        navigation={navigation}
        name={route.params.item2.item.name}
        rightIcon={
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => {
              _storeData(
                route.params.item2.item.id,

                route.params.item2.item.name,

                route.params.item2.item.image,

                route.params.texto
              );
            }}
          >
            <FavouriteIcon color="white" />
          </TouchableOpacity>
        }
      />

      <ScrollView bg={"primary.100"} flex={1}>
        <Box bg="primary.100" p={12} rounded="lg">
          <Image
            source={{
              uri: route.params.item2.item.image,
            }}
            alt="Alternate Text"
            size="2xl"
            borderRadius={25}
            borderColor={"primary.2"}
            borderWidth={5}
          />
        </Box>
        <Box px={4}>
          <Text color={"white"} fontSize={"2xl"}>
            {route.params.item2.item.name}
          </Text>
          <Text color={"white"} fontSize={"md"}>
            {route.params.item2.item.role}
          </Text>
          <Text color={"white"} my={1} fontSize={"xl"} fontFamily={"normal"}>
            Can be found at: {route.params.item2.item.location}
          </Text>

          {text !== '"null"' && (
            <Text color="gray.500" textTransform={"uppercase"} fontSize={"xs"}>
              {text}
            </Text>
          )}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default NPCsDeatils;
