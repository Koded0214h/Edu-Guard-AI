import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 60}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
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
              <Ionicons name="chevron-back-outline" size={30} color={"#333"} />
            </TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: 700 }}>EduGuard AI</Text>
            <View style={{ width: 24 }}></View>
          </View>

          {/* Header Text */}

          <View style={{ marginTop: 30, alignItems: "center", rowGap: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 700 }}>
              Create Account
            </Text>
            <Text
              style={{ fontSize: 17, fontWeight: 500, textAlign: "center" }}
            >
              Sign up to start learning about online safety
            </Text>
          </View>

          {/* Content */}
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            {/* Form */}

            <View style={{ marginTop: 20 }}>
              <View style={{ rowGap: 10, marginBottom: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>Name</Text>
                <TextInput
                  placeholder="Enter your name"
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
                />
              </View>

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
                <Text style={{ fontSize: 18, fontWeight: 600 }}>Password</Text>
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
            </View>

            {/* Submit Button */}
            <View style={{ rowGap: 20, alignItems: "center" }}>
              <TouchableOpacity
                style={{ maxWidth: "70%" }}
                onPress={() => router.push("/login")}
              >
                <Text
                  style={{
                    textDecorationLine: "underline",
                    textAlign: "center",
                    fontSize: 15,
                  }}
                >
                  Already have an account? Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#102e30",
                  width: "100%",
                  borderRadius: 10,
                }}
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
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
