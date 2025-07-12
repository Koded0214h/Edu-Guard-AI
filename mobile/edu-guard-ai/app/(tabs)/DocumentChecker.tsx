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
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";

export default function DocumentChecker() {
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

  const handleSelectOption = () => {
    Alert.alert("Upload From", "Choose a source", [
      { text: "Camera", onPress: openCamera },
      { text: "Gallery", onPress: openGallery },
      { text: "File", onPress: openFilePicker },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  // Only allow: PDF, DOCX, JPG, JPEG, PNG
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
        // Optionally add 'lastModified' if needed
      });
    }
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only allow images
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      // Only accept jpg, jpeg, png
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const mimeType = asset.mimeType || asset.type || "";
      if (allowedTypes.includes(mimeType)) {
        setFileInfo({
          uri: asset.uri,
          mimeType: mimeType,
          size: asset.fileSize || 0,
          name: asset.fileName || asset.uri.split("/").pop() || "image",
        });
      } else {
        Alert.alert(
          "Invalid File",
          "Only JPG, JPEG, or PNG images are allowed."
        );
      }
    }
  };

  const openCamera = async () => {
    const permissions = await ImagePicker.requestCameraPermissionsAsync();
    if (permissions.granted) {
      const result = await ImagePicker.launchCameraAsync({
        quality: 1,
        allowsEditing: true,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        setFileInfo({
          uri: asset.uri,
          mimeType: asset.mimeType || asset.type || undefined,
          size: asset.fileSize || 0,
          name: asset.fileName || asset.uri.split("/").pop() || "image",
          // Optionally add 'lastModified' if needed
        });
      }
    } else {
      alert("Camera permission not granted");
    }
  };

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
              <Ionicons
                name="cloud-upload-outline"
                size={30}
                color={"#16a34a"}
              />
              <Text style={{ fontSize: 20, fontWeight: 700 }}>
                DOCUMENT CHECKER
              </Text>
            </View>

            {/* Description */}
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 16, color: "#666", fontWeight: 400 }}>
                Upload and verify the authenticity of any scholarship or
                academic documents.
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
                <Text style={{ fontSize: 16, fontWeight: 500 }}>
                  Reporter Type
                </Text>
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
                />
              </View>

              {/* Message Field */}
              <View style={{ marginTop: 20, marginBottom: 10, rowGap: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Message</Text>

                <TextInput
                  placeholder="Describe the document or reason for upload"
                  placeholderTextColor={"#9CA3AF"}
                  multiline
                  style={{
                    borderWidth: 1,
                    borderColor: "#D1D5DB",
                    padding: 10,
                    borderRadius: 5,
                    width: "100%",
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#374151",
                    textAlignVertical: "top",
                  }}
                  value={message}
                  onChangeText={setMessage}
                />
              </View>

              {/* File Upload */}
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
                        onPress={handleSelectOption}
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
                    <Ionicons
                      name="cloud-upload-outline"
                      size={35}
                      color={"#9CA3AF"}
                    />
                    <Text style={{ fontSize: 15, color: "#9CA3AF" }}>
                      Upload File
                    </Text>
                    <Pressable
                      style={{
                        padding: 10,
                        backgroundColor: "#3B82F6",
                        borderRadius: 5,
                        marginTop: 10,
                      }}
                      onPress={handleSelectOption}
                    >
                      <Text
                        style={{ color: "#fff", fontSize: 15, fontWeight: 500 }}
                      >
                        Browse files
                      </Text>
                    </Pressable>
                    <Text
                      style={{ fontSize: 12, color: "#6B7280", marginTop: 5 }}
                    >
                      Supports: PDF, DOCX, JPG, JPEG, PNG
                    </Text>
                  </>
                )}
              </View>

              {/* Scan Button */}
              <View style={{ width: "100%", alignItems: "flex-end" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: fileInfo ? "#16A34A" : "#d1d5db",
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
                      color: fileInfo ? "#fff" : "#6b7280",
                    }}
                  >
                    Analyze Document
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
