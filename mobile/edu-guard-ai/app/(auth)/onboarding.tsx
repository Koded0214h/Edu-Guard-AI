import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Onborading() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../../assets/images/onboarding-image.png")}
        style={{ width: "100%", height: 300, backgroundColor: "#102e30" }}
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ rowGap: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 32, fontWeight: 700, textAlign: "center" }}>
            Welcome to EduGuard AI
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "#333",
              fontWeight: 500,
            }}
          >
            Learn to identify and avoid online scams with our AI-powered
            education platform
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#102e30",
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
              color: "#fff",
              paddingVertical: 15,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
