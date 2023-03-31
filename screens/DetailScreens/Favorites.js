import { LogBox, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Box,
  Text,
  Button,
  Center,
  ChevronLeftIcon,
  Flex,
  Image,
  ScrollView,
} from "native-base";

import axios from "axios";

import React, { useEffect, useState } from "react";
import FavoritesItems from "../../components/FavoritesItems";
import FavItem from "../../components/FavItem";
// import { _retrieveData } from "../../storage";

const Favorites = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const [retreived, setRetreived] = useState();

  const uri = "https://eldenring.fanapis.com/api/";
  const [urii, setUrii] = useState(uri);
  const getApi = async (category, id) => {
    try {
      const response = await axios.get(uri + category + "/" + id);
      const allData = response.data.data;
      setRetreived(allData);
      console.log("RETREIVED DATA IN getApi", retreived);
      return allData;
    } catch (error) {
      alert("ERROR", error);
    }
  };
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:armors");
      if (value !== null) {
        // If there is data, split it into an array of values and map each group of five values to an array
        const valuesArray = value.split(",");
        const armorsArray = [];
        for (let i = 0; i < valuesArray.length; i += 4) {
          const group = valuesArray.slice(i, i + 4);
          const [id, name, image, category] = group;
          armorsArray.push({ id, name, image, category });
        }
        console.log("jklkjklkljjkljklkljjkljlk", armorsArray);
        setFavorites(armorsArray);
      }
    } catch (error) {
      console.log("Error retrieving data: ", error);
    }
  };

  const handleRemove = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
  };

  _clear = async () => {
    await AsyncStorage.setItem("@MySuperStore:armors", "");
  };

  useEffect(() => {
    _retrieveData();

    // console.log("FAVS", favorites);
  }, []);

  return (
    <Box bg={"primary.100"} flex={1}>
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
        <Box justifyContent={"center"} flex={1}>
          <Text
            color="white"
            textAlign="center"
            fontSize={"lg"}
            textTransform={"uppercase"}
          >
            Favorites
          </Text>
        </Box>

        <Button
          bg="primary.2"
          width="30px"
          h="30px"
          p={7}
          mr={2}
          borderRadius="100"
          onPress={() => {
            _clear();
          }}
        ></Button>
      </Flex>
      <ScrollView mt={10}>
        {favorites.map((favorite) => (
          <Box
            bg="primary.2"
            shadow={1}
            rounded="lg"
            p="2"
            w="90%"
            mx="auto"
            mb="2"
            flexDirection="row"
            key={favorite.id}
          >
            <TouchableOpacity
              onPress={async () => {
                const cat = favorite.category;
                const itemId = favorite.id;
                const item = await getApi(cat, itemId);

                var item2 = {
                  item,

                  separators: {
                    highlight: function () {},
                    unhighlight: function () {},
                    updateProps: function () {},
                  },
                };
                console.log("OVI LOGIU", item2);
                navigation.navigate(cat + "Deatils", { item2 });
              }}
            >
              <Image
                source={{ uri: favorite.image }}
                alt={`${favorite.name} image`}
                resizeMode="contain"
                h="100"
                w="100"
              />
            </TouchableOpacity>

            <Box ml="4">
              <Text fontWeight="bold" fontSize="sm" color={"white"}>
                {favorite.name}
              </Text>
              <Text fontSize="md" color="gray.500">
                {favorite.category}
              </Text>

              <Button
                shadow={3}
                bgColor={"primary.100"}
                onPress={() => handleRemove(favorite.id)}
                mt={2}
              >
                Remove from Favorites
              </Button>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export default Favorites;
