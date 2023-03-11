import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowForwardIcon, Box, Button } from 'native-base'
import axios from 'axios'
import WeponComponent from '../components/WeponComponent'


const Weapons = ({navigation, route}) => {
  const [text, setText] = useState(route.name)
  const [weapons, getWeapons] = useState([])
  var lower = route.name.toLowerCase();
  const uri = "https://eldenring.fanapis.com/api/" + lower
  // const callTestApi = () => {
  //   axios
  //   .get(uri)
  //   .then((response) => {
  //     // console.log("RESPONSE", response?.data);
  //     setRes(response?.data);
  //   })
  //   .catch((error) => {
  //     console.log("ERROR", error);
  
  //   }); 
  // };
  
   useEffect(() => {
     getApi();
  
   }, [])

  const getApi = async () => {
  
    axios.get(uri).then((response) => {
      const allWeapons = response.data.data;
      // console.log(allWeapons);
      getWeapons(allWeapons);
      // console.log('WEPONS', weapons)
    }).catch(error => alert('ERROR', error) )
 


  
};
 
  



  return (
    <Box flex={1}>
      <Button
        colorScheme="primary"
        onPress={()=>{
          navigation.navigate('Armors');
         

        }}
      
      >
        Primary
      </Button>
       <WeponComponent weapons={weapons} navigation={navigation} />    
      {/* 
      <Button
        colorScheme="primary"
        onPress={()=>{
        // console.log("KURAC PALAAC" + weapons);
        // mapTrough();
     
        }}
      
      >
        Primary
      </Button> */}
        
      
      
    </Box>
  )
}

export default Weapons