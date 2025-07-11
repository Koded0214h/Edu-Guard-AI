import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 60}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 20,
              marginTop: 10,
              paddingHorizontal: 20,
              justifyContent: "space-between",
            }}
            keyboardShouldPersistTaps="handled"
          >
            {/* Header */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons
                  name="chevron-back-outline"
                  size={30}
                  color={"#333"}
                />
              </TouchableOpacity>
              <Text style={{ fontSize: 22, fontWeight: 700 }}>EduGuard AI</Text>
              <View style={{ width: 24 }}></View>
            </View>

            {/* Header Text */}

            <View style={{ marginTop: 30, alignItems: "center", rowGap: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: 700 }}>
                Welcome back
              </Text>
              <Text
                style={{ fontSize: 17, fontWeight: 500, textAlign: "center" }}
              >
                Log in to your account to continue learning about online safety
              </Text>
            </View>

            {/* Content */}
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                marginTop: 30,
              }}
            >
              {/* Form */}
              <View>
                <View style={{ rowGap: 10, marginBottom: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: 600 }}>Email</Text>
                  <TextInput
                    placeholder="Enter your email"
                    placeholderTextColor={"#67788b"}
                    style={{
                      backgroundColor: "#dbdfe4",
                      paddingHorizontal: 20,
                      paddingVertical: 15,
                      fontSize: 18,
                      color: "#67788b",
                      borderRadius: 10,
                      fontWeight: 500,
                    }}
                    inputMode="email"
                  />
                </View>
                <View style={{ rowGap: 10, marginBottom: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: 600 }}>
                    Password
                  </Text>
                  <View style={{ position: "relative" }}>
                    <TextInput
                      placeholder="Enter your password"
                      placeholderTextColor={"#67788b"}
                      style={{
                        backgroundColor: "#dbdfe4",
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                        fontSize: 18,
                        color: "#67788b",
                        borderRadius: 10,
                        fontWeight: 500,
                      }}
                      secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        right: 15,
                        top: 15,
                      }}
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Ionicons
                        name={showPassword ? "eye-off" : "eye"}
                        size={24}
                        color="#263238"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      color: "#67788b",
                      textDecorationLine: "underline",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    Forgot password?
                  </Text>
                </View>
              </View>
            </View>

            {/* Submit Button */}
            <View style={{ rowGap: 20, alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#102e30",
                  width: "100%",
                  borderRadius: 10,
                }}
                onPress={() => router.push("/(tabs)")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#fff",
                    paddingVertical: 15,
                  }}
                >
                  Log in
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#dbdfe4",
                  width: "100%",
                  borderRadius: 10,
                }}
                onPress={() => router.push("/signup")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#000",
                    paddingVertical: 15,
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
