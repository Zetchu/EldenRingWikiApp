import { ImageBackground, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import {
  Box,
  Button,
  Center,
  ChevronLeftIcon,
  Container,
  FlatList,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import img1 from "../assets/img1.jpg";
import { categoris } from "../constants/categoryData";
import CategoryBox from "../components/CategoryBox";

export default function Home({ navigation }) {
  const [category, setCategory] = useState(categoris);

  return (
    <Box flex={1} bg="primary.100">
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
          <Text color="white"> Elden App</Text>
        </Box>

        <Button
          bg="primary.2"
          width="30px"
          h="30px"
          p={7}
          mr={2}
          borderRadius="100"
          onPress={() => {
            navigation.navigate("Favorites");
          }}
        >
          <Center bg="primary.400"></Center>
        </Button>
      </Flex>

      <Box alignItems={"center"} mt={5} h={"25%"}>
        <Box w={"90%"}>
          <ImageBackground
            source={img1}
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 25,
            }}
            alt="iomg1"
          >
            <VStack flex={1} justifyContent="space-between">
              <Text
                color="white"
                fontFamily={"normal"}
                zIndex={1}
                p={6}
                fontWeight={"bold"}
              >
                Welcome to the{"\n"} Elden App
              </Text>
              <Text
                fontFamily={"normal"}
                color="white"
                zIndex={1}
                p={2}
                pb={5}
                fontWeight={"bold"}
              >
                Here you can find everything you
                {"\n"}need for your playtrough{" "}
              </Text>
            </VStack>
          </ImageBackground>
        </Box>
      </Box>
      <Text color="white" fontSize={"2xl"} p={6} fontWeight={"bold"}>
        Pick your category
      </Text>

      <FlatList
        data={category}
        numColumns={3}
        contentContainerStyle={{ width: "100%" }}
        renderItem={({ item }) => (
          <CategoryBox data={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      {/* flex={1} flexDirection='row' w={'100%'} */}
    </Box>
  );
}
