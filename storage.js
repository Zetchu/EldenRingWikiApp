import AsyncStorage from "@react-native-async-storage/async-storage";

export const _storeData = async (id, name, image, category) => {
  const newValue = id + "," + name + "," + image + "," + category;
  try {
    const existingValue = await AsyncStorage.getItem("@MySuperStore:armors");
    if (existingValue !== null) {
      // If there is existing data, split it into an array of values and check if the new value already exists
      const existingValues = existingValue.split(",");
      if (existingValues.includes(id)) {
        console.log("Value already exists!");
        return;
      }
      // If the new value doesn't exist, append it to the existing data with a comma separator
      var updatedValue = existingValue + "," + newValue;
      await AsyncStorage.setItem("@MySuperStore:armors", updatedValue);
    } else {
      // If there is no existing data, set the new value
      await AsyncStorage.setItem("@MySuperStore:armors", newValue);
    }
    console.log("Data stored successfully!", updatedValue);
    console.log(await AsyncStorage.getItem("@MySuperStore:armors"));
  } catch (error) {
    console.log("Error storing data: ", error);
  }
};
