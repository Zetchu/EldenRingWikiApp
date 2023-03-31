import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  Box,
  Image,
  Text,
  Button,
} from "react-native";

export const FavoritesItems = ({ favorites }) => {
  return (
    <Box mt={10}>
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
          <TouchableOpacity onPress={() => console.log("onPress favorite")}>
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
              onPress={() => onRemove(favorite.id)}
              mt={2}
            >
              Remove from Favorites
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
