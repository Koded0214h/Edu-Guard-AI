import {
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Clipboard from "expo-clipboard";

export default function TextScanner() {
  const [message, setMessage] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handlePaste = async () => {
    const text = await Clipboard.getStringAsync();
    setMessage(text);
  };

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}
          >
            {/* Header */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
              }}
            >
              <Ionicons name="search-sharp" size={30} color={"#16a34a"} />
              <Text style={{ fontSize: 20, fontWeight: 700 }}>
                TEXT SCANNER
              </Text>
            </View>

            {/* Description */}
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 16, color: "#666", fontWeight: 400 }}>
                Detect scam patterns in scholarship or admission messages.
              </Text>
            </View>

            {/* Scanner */}
            <View
              style={{
                backgroundColor: "#fff",
                padding: 20,
                borderRadius: 10,
                marginTop: 20,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 10,
                  marginBottom: 15,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: 600 }}>
                  Paste suspicious message
                </Text>

                <View style={{ flexDirection: "row", columnGap: 5 }}>
                  <Pressable
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#E5E7EB",
                      padding: 7,
                      borderRadius: 5,
                    }}
                    onPress={handlePaste}
                  >
                    <Ionicons name="clipboard-outline" size={16} />
                    <Text style={{ fontSize: 13, fontWeight: 500 }}>Paste</Text>
                  </Pressable>
                  <Pressable
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#E5E7EB",
                      padding: 7,
                      borderRadius: 5,
                    }}
                    onPress={() => setMessage("")}
                  >
                    <Ionicons name="close-outline" size={16} />
                    <Text style={{ fontSize: 13, fontWeight: 500 }}>Clear</Text>
                  </Pressable>
                </View>
              </View>

              {/* Input Field */}
              <TextInput
                placeholder="e.g. Congratulations! You've been selected for a scholarship..."
                placeholderTextColor={"#9CA3AF"}
                multiline
                style={{
                  borderWidth: 1,
                  borderColor: keyboardVisible ? "#4ADE80" : "#D1D5DB", // Change color based on keyboard state
                  padding: 10,
                  borderRadius: 5,
                  width: "100%",
                  height: 200,
                  fontSize: 14,
                  color: "#374151",
                  textAlignVertical: "top",
                }}
                value={message}
                onChangeText={setMessage}
              />

              {/* Scan Button */}
              <View style={{ width: "100%", alignItems: "flex-end" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: message ? "#16A34A" : "#d1d5db",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 10,
                    marginTop: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 500,
                      color: message ? "#fff" : "#6b7280",
                    }}
                  >
                    Scan Message
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
