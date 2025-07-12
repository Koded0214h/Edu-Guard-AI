import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";
import * as DocumentPicker from "expo-document-picker";

export default function ReportScam() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Student", value: "student" },
    { label: "Teacher", value: "teacher" },
    { label: "Anonymous", value: "anonymous" },
  ]);
  const [fileInfo, setFileInfo] =
    useState<DocumentPicker.DocumentPickerAsset | null>(null);

  const openFilePicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "image/jpeg",
        "image/png",
      ],
      copyToCacheDirectory: true,
    });
    if (result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      setFileInfo({
        uri: asset.uri,
        mimeType: asset.mimeType || undefined,
        size: asset.size || 0,
        name: asset.name || asset.uri.split("/").pop() || "image",
      });
    }
  };

  // Add a helper to check if form is valid
  const isFormValid = value && message.trim().length > 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <ScrollView
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
          <Ionicons name="warning-outline" size={30} color={"#16a34a"} />
          <Text style={{ fontSize: 20, fontWeight: 700 }}>Report a Scam</Text>
        </View>

        {/* Description */}
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 16, color: "#666", fontWeight: 400 }}>
            Help us fight scams by reporting suspicious offers, messages, or
            documents.
          </Text>
        </View>

        {/* Scanner */}
        <View
          style={{
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 10,
            marginTop: 20,

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
          {/* Reporter Type */}
          <View style={{ rowGap: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Reporter Type</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select an option"
              style={{
                borderColor: "#D1D5DB",
              }}
              listMode="SCROLLVIEW"
            />
          </View>

          {/* Message Field */}
          <View style={{ marginTop: 20, marginBottom: 10, rowGap: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Message</Text>

            <TextInput
              placeholder="Describe the scam, include as much detail as possible."
              placeholderTextColor={"#9CA3AF"}
              multiline
              style={{
                borderWidth: 1,
                borderColor: "#D1D5DB",
                padding: 10,
                borderRadius: 5,
                width: "100%",
                fontSize: 14,
                minHeight: 100,
                fontWeight: "400",
                color: "#374151",
                textAlignVertical: "top",
              }}
              value={message}
              onChangeText={setMessage}
            />
          </View>

          {/* Attach Evidence */}
          <View>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>
              Attach Evidence (optional)
            </Text>

            <View
              style={{
                marginTop: 20,
                alignItems: "center",
                padding: 20,
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "#D1D5DB",
                borderRadius: 10,
              }}
            >
              {fileInfo ? (
                <>
                  <Ionicons
                    name="document-attach-outline"
                    size={35}
                    color={"#16a34a"}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#374151",
                      marginTop: 10,
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                    numberOfLines={2}
                    ellipsizeMode="middle"
                  >
                    {fileInfo.name}
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: "#6B7280", marginTop: 5 }}
                  >
                    {Math.round((fileInfo.size || 0) / 1024)} KB
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      columnGap: 10,
                    }}
                  >
                    <Pressable
                      style={{
                        padding: 8,
                        backgroundColor: "#ef4444",
                        borderRadius: 5,
                      }}
                      onPress={() => setFileInfo(null)}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontWeight: "500",
                        }}
                      >
                        Remove
                      </Text>
                    </Pressable>
                    <Pressable
                      style={{
                        padding: 8,
                        backgroundColor: "#3B82F6",
                        borderRadius: 5,
                      }}
                      onPress={openFilePicker}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontWeight: "500",
                        }}
                      >
                        Change File
                      </Text>
                    </Pressable>
                  </View>
                </>
              ) : (
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      columnGap: 10,
                      alignItems: "center",
                    }}
                  >
                    <Pressable
                      style={{
                        backgroundColor: "#EFEFEF",
                        padding: 7,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: "#D1D5DB",
                      }}
                      onPress={openFilePicker}
                    >
                      <Text>Choose File</Text>
                    </Pressable>
                    <Text>No file chosen</Text>
                  </View>
                </>
              )}
            </View>
          </View>

          {/* Submit Report */}
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: isFormValid ? "#16A34A" : "#d1d5db",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
                marginTop: 20,
              }}
              disabled={!isFormValid}
              // onPress={...} // Add your submit handler here
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 500,
                  color: isFormValid ? "#fff" : "#6b7280",
                  textAlign: "center",
                }}
              >
                Submit Scam Report
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
