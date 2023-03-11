import {View, Image} from 'react-native';
import React from 'react';
import {
  Box,
  Button,
  Center,
  HStack,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import WeaponDeatils from './WeaponsDeatils';

const WeponComponent = ({weapons, navigation, route}) => {
  // const log = console.log('LOG U COMPONENTU', weapons.weapons[0]);
  // { console.log('THIS IS NABVIHATION', navigation)}
  { console.log('THIS IS NABVIHATION IN WEAOINCOMPONENT', this.navigation)}
  
  function showItems (props)  { 





  return weapons.map(weapon  => {
    return (
      <Button
        key={weapon.id}
        bg="primary.2"
        flexDir={'column'}
        rounded="lg"
        m={2}
        flex={1}
        alignItems="center"
        onPress={()=>{
          navigation.navigate("WeaponDeatils", {weapon, navigation})
          console.log(weapon)
        }}
        >
        



        <Image
          source={{uri: weapon.image}}
          alt="Alternate Text"
          style={{width: 250, height: 250, resizeMode: 'cover'}}
        />

        <Text color="white" p={2} textAlign="center">
          {weapon.name}
        </Text>
        {/* <Text>path of image{weapon.image}</Text>
    
    */}
        {/* {console.log(weapon.name)}
        {console.log(weapon.image)} */}
      </Button>
    );
  }, this)
  
 }

  return (
    <Box bg="primary.">
 
      <ScrollView bg="primary.100">
        <Text color="white" fontSize="2xl" fontWeight="bold">
          Pick Your Weapon
        </Text>
        <Button
          colorScheme="primary"
          onPress={()=>{
            navigation.navigate('Armors');
          }}
        
        >

          Primary
        </Button>
     { showItems()  }
        
    
      </ScrollView>
    </Box>
  );
};

export default WeponComponent;
