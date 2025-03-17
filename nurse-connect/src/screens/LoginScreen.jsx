import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Access Account</Text>
      <Text style={styles.subtitle}>
        Please enter your credentials to access the system
      </Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Forgot Password */}
      {/* <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity> */}

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Main")} // Ensures user can't go back to login
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 220,
    backgroundColor: "#F8F9FA",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: -50,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 40,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#edeffd",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 9,
    marginBottom: 15,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  forgotText: {
    color: "#4A63E7",
    alignSelf: "flex-end",
    marginTop: 10,
    marginLeft: 234,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4A63E7",
    paddingVertical: 12,
    borderRadius: 20,
    width: "40%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default LoginScreen;
