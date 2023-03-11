import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Icon,
  IconButton,
  ChevronLeftIcon,
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
} from 'native-base';
import axios from 'axios';
import {LogBox} from 'react-native';
import SearchBar from './SearchBar';
const UltimateComponent = ({navigation, route}) => {
  var lower = route.params.data.description;
  var texto = route.params.data.name;
  const [armors, setArmors] = useState([]);
  const uri = 'https://eldenring.fanapis.com/api/' + lower;
  const [uriUpdated, setUriUpdated] = useState(uri);
  const [pageNumber, setPageNumber] = useState(1);
  const [callBack, setCallBack] = useState(true);
  const [searchData, setSearchData] = useState();
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  increment = () => {
    if (pageNumber < 20) {
      setPageNumber(pageNumber + 1);
    
    } else {
      setPageNumber(1);
   
    }
  };
  decrement = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
     
    } else {
      setPageNumber(1);
     
    }
  };

  useEffect(() => {
    getApi();
    console.log('BALBLALBAL', route.params.data.name);
  }, [callBack]);

  const getApi = async () => {
    axios
      .get(uriUpdated)
      .then(response => {
        const allArmors = response.data.data;
        // console.log(allArmors);
        setArmors(allArmors);
        setSearchData(allArmors);
      })
      .catch(error => alert('ERROR', error));
  };
  const handleSearch = value => {
    if (value.length === 0) {
      setArmors(searchData);
      console.log('serach data', searchData);
      setCallBack(!callBack);
    }
    const filteredData = armors.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredData.lenght === 0) {
      setArmors(searchData);
      setCallBack(!callBack);
    } else {
      setArmors(filteredData);
      // console.log(armors);
    }
  };

  return (
    <Box bgColor={'primary.100'}>
      {/* Header Start */}
      <Text color={'white'}>Select for more details {pageNumber}</Text>
      <Button
        width={'1/6'}
        bgColor="primary.2"
        onPress={() => {
          navigation.goBack();
        }}>
        <ChevronLeftIcon />
      </Button>
      <Flex direction="row" justify={'space-between'}>
        <Button
          width={'1/6'}
          colorScheme="primary"
          onPress={() => {
            setUriUpdated(
              'https://eldenring.fanapis.com/api/' +
                lower +
                '?limit=20&' +
                '?&page=' +
                pageNumber,
            );
            increment();
            console.log(pageNumber);
            console.log(uriUpdated);
            setCallBack(!callBack);
          }}>
          Next Page
        </Button>

        {/* KADA CES RADITI AOW, STAVI DA SE RENERAJU SLIKICE UZ AFINITY, SA ONIM ZAGRADAMA I IFOVIMA S ? */}

        <Text color={'white'}>{pageNumber}</Text>

        <Button
          width={'1/6'}
          colorScheme="primary"
          onPress={() => {
            setUriUpdated(
              'https://eldenring.fanapis.com/api/' +
                lower +
                '?limit=20&' +
                '?&page=' +
                pageNumber,
            );
            decrement();
            console.log(pageNumber);
            console.log(uriUpdated);
            setCallBack(!callBack);
          }}>
          Prev Page
        </Button>
      </Flex>

      <FlatList
        ListHeaderComponent={
          <SearchBar onSearch={handleSearch} texto={texto} />
        }
        bg={'primary.100'}
        data={armors}
        contentContainerStyle={{margin: 0, width: '100%'}}
        renderItem={item => (
          <VStack>
            <Button
              bgColor={'primary.2'}
              rounded={'lg'}
              m={4}
              onPress={() => {
                navigation.navigate(texto + 'Deatils', {item});
              }}>
              <Text color="white" textAlign={'center'}  fontFamily={'Mantinia'} p={2} fontSize={'lg'}>
                {item.item.name}
              </Text>
              <Image
                source={{
                  uri: item.item.image,
                }}
                alt="Alternate Text"
                size="xl"
              />
            </Button>
          </VStack>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default UltimateComponent;
