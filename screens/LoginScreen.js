import { Box, Text, Button } from "native-base";
import React, { useState } from "react";
import { View, TextInput, ImageBackground } from "react-native";

const backgroundImage = require("../assets/bglogin.png");

function LoginScreen({ navigation }) {
  const [showInputFields, setShowInputFields] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    setShowInputFields(true);
    setShowSignUp(false);
  };

  const handleSignUpPress = () => {
    setShowInputFields(true);
    setShowSignUp(true);
  };

  const handleSignInPress = () => {
    // handle sign in logic with username and password
    navigation.navigate("Home");
  };

  const handleSignUpSubmit = () => {
    // handle sign up logic with username and password
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box mt={12} id={"logo"}>
        <Text textTransform={"uppercase"} fontSize={"4xl"} color={"#F5BD69"}>
          Elden Ring
        </Text>
        <Text
          textTransform={"uppercase"}
          fontSize={"3xl"}
          color={"#F5BD69"}
          textAlign={"center"}
        >
          Wiki
        </Text>
      </Box>
      <Box mb={10}>
        {showInputFields ? (
          <Box>
            <Text color={"white"}>Username</Text>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              style={{
                marginBottom: 10,
                borderWidth: 1,
                padding: 5,
                backgroundColor: "white",
                width: 200,
              }}
            />
            <Text color={"white"}>Password</Text>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{
                marginBottom: 10,
                borderWidth: 1,
                padding: 5,
                backgroundColor: "white",
              }}
            />
            {showSignUp ? (
              <>
                <Button bgColor={"#F2C986"} onPress={handleSignUpSubmit}>
                  <Text textAlign={"center"} textTransform={"uppercase"}>
                    Sign up
                  </Text>
                </Button>
                <Text
                  color={"gray.500"}
                  my={2}
                  textAlign={"center"}
                  fontFamily={"normal"}
                >
                  Already have an account?
                </Text>
                <Button bgColor={"#F2C986"} onPress={handleLoginPress}>
                  <Text textTransform={"uppercase"}>Sign in</Text>
                </Button>
              </>
            ) : (
              <>
                <Button bgColor={"#F2C986"} onPress={handleSignInPress}>
                  <Text textTransform={"uppercase"}>Sign in</Text>
                </Button>
                <Text
                  color={"gray.500"}
                  textAlign={"center"}
                  fontFamily={"normal"}
                  style={{ marginTop: 10 }}
                >
                  Don't have an account?
                </Text>
                <Button bgColor={"#F2C986"} mt={3} onPress={handleSignUpPress}>
                  <Text textTransform={"uppercase"}> Sign Up</Text>
                </Button>
              </>
            )}
          </Box>
        ) : (
          <Box w={200}>
            <Box borderRadius={20}>
              <Button bgColor={"#F2C986"} onPress={handleLoginPress}>
                <Text color={"black"} textTransform={"uppercase"}>
                  Log in
                </Text>
              </Button>
            </Box>
            <Box>
              <Text
                color={"gray.500"}
                fontFamily={"normal"}
                fontSize={"xs"}
                textAlign={"center"}
                style={{ marginTop: 10 }}
              >
                Don't have an account?
              </Text>
            </Box>
            <Box mt={3}>
              <Button onPress={handleSignUpPress} bgColor={"#F2C986"}>
                <Text textTransform={"uppercase"}>Sign up</Text>
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </ImageBackground>
  );
}

export default LoginScreen;
