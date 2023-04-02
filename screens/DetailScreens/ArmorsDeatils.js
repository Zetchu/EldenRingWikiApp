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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { _storeData } from "../../storage";

const ArmorsDeatils = ({ navigation, route }) => {
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
        <Text color={"white"} fontFamily={"heading"} fontSize={"xl"} px={4}>
          {route.params.item2.item.category}
        </Text>
        <Text
          color={"white"}
          fontSize={"sm"}
          px={4}
          fontFamily={"heading"}
          fontWeight={300}
        >
          Weight: {route.params.item2.item.weight}
        </Text>
        <Text color="gray.500" px={4} py={2} fontFamily={"heading"}>
          {text}
          {!readMore && "..."}

          <Text
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

        <Center flex={1} w={"100%"}>
          <Box bg="primary.2" w={"94%"} rounded="lg">
            <Text textAlign={"center"} py={3} fontSize={"xl"} color={"white"}>
              Demage negation
            </Text>

            {/* {DMGNEG} */}

            <Box
              flex={1}
              flexDirection="row"
              flexWrap={"wrap"}
              justifyContent={"center"}
              w={"100%"}
            >
              {route.params.item2.item.dmgNegation.map((item, index) => (
                <Box p={3} key={index} w={"25%"}>
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

        <Center flex={1} w={"100%"} my={5}>
          <Box bg="primary.2" w={"94%"} rounded="lg">
            <Text textAlign={"center"} py={3} fontSize={"xl"} color={"white"}>
              Resistance
            </Text>

            {/* {RES} */}

            <Box
              flex={1}
              flexDirection="row"
              flexWrap={"wrap"}
              justifyContent={"center"}
              w={"100%"}
            >
              {route.params.item2.item.resistance.map((item, index) => (
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

export default ArmorsDeatils;
