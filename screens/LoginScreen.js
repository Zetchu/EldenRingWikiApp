import { Text } from "native-base";
import React, { useState } from "react";
import { View, TextInput, Button, ImageBackground } from "react-native";

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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showInputFields ? (
        <>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
          />
          {showSignUp ? (
            <>
              <Button title="Sign Up" onPress={handleSignUpSubmit} />
              <Text style={{ marginTop: 10 }}>Already have an account?</Text>
              <Button title="Sign In" onPress={handleLoginPress} />
            </>
          ) : (
            <>
              <Button title="Sign In" onPress={handleSignInPress} />
              <Text style={{ marginTop: 10 }}>Don't have an account?</Text>
              <Button title="Sign Up" onPress={handleSignUpPress} />
            </>
          )}
        </>
      ) : (
        <>
          <Button title="Log In" onPress={handleLoginPress} />
          <Text color={"white"} style={{ marginTop: 10 }}>
            Don't have an account?
          </Text>
          <Button title="Sign Up" onPress={handleSignUpPress} />
        </>
      )}
    </ImageBackground>
  );
}

export default LoginScreen;
