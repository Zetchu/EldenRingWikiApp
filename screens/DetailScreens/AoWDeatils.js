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
import { TouchableOpacity } from "react-native";
import { _storeData } from "../../storage";

const AoWDeatils = ({ navigation, route }) => {
  const [text, setText] = useState(route.params.item2.item.description);
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
              _storeData();
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
          />
        </Box>

        <Box px={4}>
          <Text color={"white"} fontSize={"2xl"}>
            {route.params.item2.item.name}
          </Text>

          <Box>
            <Text
              color={"white"}
              fontSize={"2xl"}
              py={3}
              fontFamily={"heading"}
            >
              Afinity: {route.params.item2.item.affinity}
            </Text>
          </Box>

          <Text color={"white"} fontSize={"xl"} fontFamily={"heading"}>
            Skill: {route.params.item2.item.skill}
          </Text>
        </Box>

        <Center px={4}>
          <Text color="gray.500" fontFamily={"heading"}>
            {text}
          </Text>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default AoWDeatils;
