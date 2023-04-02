import { SafeAreaView, View } from "react-native";
import React, { useEffect, useState, Suspense } from "react";
import {
  Button,
  FlatList,
  Icon,
  IconButton,
  ChevronLeftIcon,
  ChevronRightIcon,
  Image,
  Box,
  Flex,
  Center,
  Text,
  VStack,
  HStack,
  Divider,
  Heading,
  Input,
  SearchIcon,
} from "native-base";
import axios from "axios";
import { LogBox } from "react-native";
import SearchBar from "./SearchBar";
const UltimateComponent = ({ navigation, route }) => {
  var lower = route.params.data.description;
  var texto = route.params.data.name;
  const [armors, setArmors] = useState([]);
  const uri = "https://eldenring.fanapis.com/api/" + lower;
  const [uriUpdated, setUriUpdated] = useState(uri);
  const [pageNumber, setPageNumber] = useState(1);
  const [callBack, setCallBack] = useState(true);
  const [searchData, setSearchData] = useState();
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const increment = () => {
    setPageNumber((pageNumber) => (pageNumber < 20 ? pageNumber + 1 : 1));
  };

  const decrement = () => {
    setPageNumber((pageNumber) => (pageNumber > 1 ? pageNumber - 1 : 20));
  };

  useEffect(() => {
    getApi();
  }, [uri, callBack]);

  const getApi = async () => {
    axios
      .get(uriUpdated)
      .then((response) => {
        const allArmors = response.data.data;
        setArmors(allArmors);
        setSearchData(allArmors);
      })
      .catch((error) => alert("ERROR", error));
  };
  const handleSearch = (value) => {
    if (value.length === 0) {
      setArmors(searchData);
      console.log("serach data", searchData);
      setCallBack(!callBack);
    }
    const filteredData = armors.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.lenght === 0) {
      setArmors(searchData);
      setCallBack(!callBack);
    } else {
      setArmors(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#151922" }}>
      {/* Header Start */}
      <Button
        width={"10%"}
        m={2}
        borderRadius={50}
        bgColor="primary.2"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ChevronLeftIcon color={"white"} />
      </Button>

      <SearchBar onSearch={handleSearch} texto={texto} />

      <Flex direction="row" justify={"space-between"} m={3}>
        <Button
          width={"10%"}
          borderRadius={20}
          bgColor="transparent"
          onPress={() => {
            decrement();
            setUriUpdated(
              "https://eldenring.fanapis.com/api/" +
                lower +
                "?limit=20" +
                "?&page=" +
                pageNumber
            );

            console.log(pageNumber);
            console.log(uriUpdated);
            setCallBack(!callBack);
          }}
        >
          <ChevronLeftIcon color={"white"} />
        </Button>
        <Text color={"white"} my={"auto"}>
          {pageNumber}
        </Text>

        <Button
          width={"10%"}
          bgColor="transparent"
          borderRadius={20}
          onPress={() => {
            increment();
            setUriUpdated(
              "https://eldenring.fanapis.com/api/" +
                lower +
                "?limit=20" +
                "?&page=" +
                pageNumber
            );
            console.log(pageNumber);
            console.log(uriUpdated);
            setCallBack(!callBack);
          }}
        >
          <ChevronRightIcon color={"white"} />
        </Button>
      </Flex>

      <React.Suspense
        fallback={
          <Box flex={1}>
            <Text size={"2xl"}>Loading...</Text>
          </Box>
        }
      >
        <FlatList
          bg={"primary.100"}
          data={armors}
          contentContainerStyle={{ margin: 0, width: "100%" }}
          renderItem={(item2) => (
            <VStack>
              <Button
                bgColor={"primary.2"}
                rounded={"lg"}
                m={4}
                onPress={() => {
                  console.log("OVOVOOVOVOVOOVOV", item2);
                  navigation.navigate(texto + "Deatils", { item2, texto });
                }}
              >
                <Center>
                  <Text
                    color="white"
                    textAlign={"center"}
                    fontFamily={"Mantinia"}
                    p={2}
                    fontSize={"lg"}
                  >
                    {item2.item.name}
                  </Text>
                  <Image
                    source={{
                      uri: item2.item.image,
                    }}
                    alt="Alternate Text"
                    size="xl"
                  />
                </Center>
              </Button>
            </VStack>
          )}
          keyExtractor={(item) => item.id}
        />
      </React.Suspense>
    </SafeAreaView>
  );
};

export default UltimateComponent;
