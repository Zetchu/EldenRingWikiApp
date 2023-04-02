import { SafeAreaView, TouchableOpacity, View } from "react-native";
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

const BossesDeatils = ({ route, navigation }) => {
  const [text, setText] = useState(
    route.params.item2.item.description.slice(0, 75)
  );
  const [readMore, setReadMore] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#151922" }}>
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
          />
        </Box>

        <Text color={"white"} fontSize={"2xl"} px={4}>
          {route.params.item2.item.name}
        </Text>
        <Text color={"white"} fontSize={"xl"} px={4} fontFamily="normal">
          HP: {route.params.item2.item.healthPoints}
        </Text>
        <Text color={"white"} fontSize={"xl"} px={4} fontFamily="normal">
          {route.params.item2.item.location}
        </Text>
        <Text
          color="gray.500"
          px={4}
          py={2}
          fontSize={"xs"}
          textTransform="uppercase"
        >
          {text}
          {!readMore && "..."}
          <Text
            fontSize={"xs"}
            textTransform="uppercase"
            color={"gray.300"}
            onPress={() => {
              if (!readMore) {
                setText(route.params.item2.item.description);
                setReadMore(true);
              } else {
                setText(route.params.item2.item.description.slice(0, 75));
                setReadMore(false);
              }
            }}
          >
            {readMore ? " Show Less" : " Read More"}
          </Text>
        </Text>
        <Text color={"white"} fontSize={"xl"} px={4} textTransform="uppercase">
          Loot:
        </Text>
        {route.params.item2.item.drops.map((item, index) => (
          <Text
            color="white"
            fontFamily={"normal"}
            px={4}
            key={index}
            fontSize={"xl"}
          >
            {item}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BossesDeatils;
