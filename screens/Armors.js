import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, FlatList, Image } from 'native-base';
import axios from 'axios'

const Armors = ({navigation, route}) => {
  var lower = route.name.toLowerCase();
  const [armors, setArmors] = useState([])
  const uri = "https://eldenring.fanapis.com/api/armors" 
  
  useEffect(() => {
    getApi();
 
  }, [])

  const getApi = async () => {
  
    axios.get(uri).then((response) => {
      const allArmors = response.data.data;

      setArmors(allArmors);
      // console.log('WEPONS', weapons)
    }).catch(error => alert('ERROR', error) )
 


  
};
  
  return (
    <View>
      <Text>Armors</Text>
      <Button
        colorScheme="primary"
        onPress={()=>{
          navigation.goBack();
        }}
      
      >
        Primary
      </Button>
        {/* {console.log('THIS ARE ARMORSSSSSSSSS', armors)} */}
      <FlatList
       bg={'amber.500'}
       color="black"
      
        data={armors}
        contentContainerStyle={{width: '100%', margin: 0}}
        renderItem={item => (
         
          <Button >
            {console.log('AJTEM',item)}
            <Text color='black'>{item.item.name}</Text>
            <Image
              source={{
                uri:item.item.image
              }}
              alt="Alternate Text"
              size="xs"
              
            />
            
          </Button>
          
        
        )}
        keyExtractor={item => item.name}
      />
      

    </View>
  )
}

export default Armors