import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Index() {
  const user = { name: "Valentine" }; // replace with actual user state
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <ScrollView
        style={{
          flex: 1,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              textAlign: "left",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Your Academic <Text style={{ color: "#16a34a" }}>Bodyguard</Text>{" "}
            Against Scams
          </Text>

          <Text style={{ fontSize: 18, color: "#555", marginBottom: 20 }}>
            Detect and avoid scholarship scams, fake offers and forged documents
            with AI.
          </Text>
        </View>

        <View
          style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700 }}>
            Hello, {user.name}
          </Text>
          <Text style={{ fontSize: 16, color: "#555", marginTop: 5 }}>
            Welcome back!
          </Text>
        </View>

        <View style={{ marginTop: 40, rowGap: 20 }}>
          <View
            style={{
              backgroundColor: "#f0fdf4",
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.18,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                columnGap: 10,
                marginBottom: 10,
              }}
            >
              <Ionicons name="search-sharp" size={30} color={"#16a34a"} />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                Quick Scam Check
              </Text>
            </View>
            <View>
              <Text style={{ color: "#777" }}>
                Paste suspicious text to scan
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#22c55e",
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => router.push("/TextScanner")}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Scan Now
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "#eff6ff",
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.18,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                columnGap: 10,
                marginBottom: 10,
              }}
            >
              <Ionicons
                name="cloud-upload-outline"
                size={30}
                color={"#16a34a"}
              />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                Upload Document
              </Text>
            </View>
            <View>
              <Text style={{ color: "#777" }}>
                Upload Files Docx, PDF, JPG, etc.
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#22c55e",
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => router.push("/DocumentChecker")}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Upload Document
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#FAF5FF",
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.18,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                columnGap: 10,
                marginBottom: 10,
              }}
            >
              <Ionicons name="search-sharp" size={30} color={"#16a34a"} />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                Scam Education
              </Text>
            </View>
            <View>
              <Text style={{ color: "#777" }}>
                Learn how to avoid scams and risks
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#22c55e",
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Learn Now
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#FEF2F2",
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.18,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                columnGap: 10,
                marginBottom: 10,
              }}
            >
              <Ionicons name="search-sharp" size={30} color={"#16a34a"} />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>Report Scam</Text>
            </View>
            <View>
              <Text style={{ color: "#777" }}>
                Report suspicious scholarship offers
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#22c55e",
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Scan Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Reports */}
        <View
          style={{
            marginTop: 40,
            padding: 20,
            backgroundColor: "#fff",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.18,
            shadowRadius: 8,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Recent Reports</Text>
          <View
            style={{
              marginTop: 10,
              padding: 50,
              backgroundColor: "#F3F4F6",
              borderRadius: 10,
              borderWidth: 2,
              borderStyle: "dashed",
              borderColor: "#86EFAC",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: 500,
                color: "#6B7280",
              }}
            >
              Start by making a report
            </Text>
          </View>
        </View>

        {/* Records */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 30,
            columnGap: 5,
            rowGap: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "#F0FDF4",
              paddingHorizontal: 30,
              paddingVertical: 20,
              maxWidth: "47%",
              rowGap: 10,
              borderRadius: 10,
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.18,
              shadowRadius: 8,
            }}
          >
            <Text style={{ color: "#777", fontSize: 15, fontWeight: 500 }}>
              Scans Completed
            </Text>
            <Text
              style={{
                color: "#16A34A",
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              0
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#EFF6FF",
              paddingHorizontal: 30,
              paddingVertical: 20,
              maxWidth: "47%",
              rowGap: 10,
              borderRadius: 10,
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.18,
              shadowRadius: 8,
            }}
          >
            <Text style={{ color: "#777", fontSize: 15, fontWeight: 500 }}>
              Potential Scams
            </Text>
            <Text
              style={{
                color: "#2563EB",
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              0
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FAF5FF",
              paddingHorizontal: 30,
              paddingVertical: 20,
              maxWidth: "47%",
              rowGap: 10,
              borderRadius: 10,
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.18,
              shadowRadius: 8,
            }}
          >
            <Text style={{ color: "#777", fontSize: 15, fontWeight: 500 }}>
              Documents Checked
            </Text>
            <Text
              style={{
                color: "#9333EA",
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              0
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FEF2F2",
              paddingHorizontal: 30,
              paddingVertical: 20,
              maxWidth: "47%",
              rowGap: 10,
              borderRadius: 10,
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.18,
              shadowRadius: 8,
            }}
          >
            <Text style={{ color: "#777", fontSize: 15, fontWeight: 500 }}>
              Scams Reported
            </Text>
            <Text
              style={{
                color: "#DC2626",
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              0
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
