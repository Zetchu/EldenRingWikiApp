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
const SorceriesDeatils = ({ navigation, route }) => {
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
          <Text color={"white"} fontSize={"xl"}>
            {route.params.item2.item.category}
          </Text>

          <Text color="gray.500">{text}</Text>
          <Box flex={1} flexDir="row" justifyContent={"space-between"} mr={5}>
            <Text
              color={"white"}
              fontSize={"2xl"}
              py={3}
              textTransform="uppercase"
            >
              Cost {route.params.item2.item.cost}
            </Text>
            <Text
              color={"white"}
              fontSize={"2xl"}
              py={3}
              textTransform="uppercase"
            >
              Slots {route.params.item2.item.slots}
            </Text>
          </Box>

          <Text color={"white"} fontSize={"xl"} fontFamily={"normal"}>
            Effects: {route.params.item2.item.effects}
          </Text>
        </Box>

        <Center flex={1} w={"100%"} my={3}>
          <Box bg="primary.2" w={"94%"} rounded="lg">
            <Text textAlign={"center"} py={3} fontSize={"xl"} color={"white"}>
              Requires
            </Text>

            {/* {DMGNEG} */}

            <Box
              flex={1}
              flexDirection="row"
              flexWrap={"wrap"}
              justifyContent={"center"}
              w={"100%"}
            >
              {route.params.item2.item.requires.map((item, index) => (
                <Box p={3} key={index} w={"33%"}>
                  <Text color="white" fontSize={"md"} textAlign={"center"}>
                    {item.name}
                  </Text>
                  <Text
                    color="white"
                    fontSize={"2xl"}
                    fontWeight={600}
                    textAlign={"center"}
                    py={3}
                  >
                    {item.amount}
                    {console.log(item.name)}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SorceriesDeatils;
