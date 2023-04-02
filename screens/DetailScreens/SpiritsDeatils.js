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
const SpiritsDeatils = ({ navigation, route }) => {
  const [text, setText] = useState(route.params.item2.item.description);
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
        <Box px={4}>
          <Text color={"white"} fontSize={"2xl"}>
            {route.params.item2.item.name}
          </Text>
          <Text color={"white"} fontSize={"md"} textTransform="uppercase">
            Effect: {route.params.item2.item.effect}
          </Text>
          <Text color="gray.500" fontFamily={"normal"}>
            {text}
          </Text>

          <Flex direction="row" justify={"space-between"}>
            <Text color={"white"} fontSize={"xl"} textTransform="uppercase">
              Fp Cost: {route.params.item2.item.fpCost}
            </Text>
            <Text color={"white"} fontSize={"xl"} textTransform="uppercase">
              Hp Cost: {route.params.item2.item.hpCost}
            </Text>
          </Flex>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpiritsDeatils;
