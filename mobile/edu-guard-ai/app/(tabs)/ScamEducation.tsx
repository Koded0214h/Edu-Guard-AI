import { View, Text, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScamEducation() {
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
          <Ionicons name="book-outline" size={30} color={"#16a34a"} />
          <Text style={{ fontSize: 20, fontWeight: 700 }}>SCAM EDUCATION</Text>
        </View>

        {/* Description */}
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 16, color: "#666", fontWeight: 400 }}>
            Learn to identify and avoid common scams targeting students and job
            seekers.
          </Text>
        </View>

        {/* Content */}
        <View style={{ marginTop: 20, rowGap: 20, paddingBottom: 30 }}>
          <View
            style={{
              flexDirection: "row",
              columnGap: 15,
              backgroundColor: "#FFF",
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
            <Ionicons name="school-outline" size={26} color={"#000"} />
            <View style={{ flex: 1, rowGap: 5 }}>
              <Text style={{ color: "#15803D", fontSize: 18, fontWeight: 700 }}>
                Scholarship Scams
              </Text>
              <Text
                style={{
                  color: "#666",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Avoid scholarships that ask for payment upfront or promise
                guaranteed acceptance without verification.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              columnGap: 15,
              backgroundColor: "#FFF",
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
            <Ionicons name="briefcase-outline" size={26} color={"#000"} />
            <View style={{ flex: 1, rowGap: 5 }}>
              <Text style={{ color: "#15803D", fontSize: 18, fontWeight: 700 }}>
                Job Offer Scams
              </Text>
              <Text
                style={{
                  color: "#666",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Be cautious of jobs asking for application fees, processing
                fees, or quick deposits before interviews.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              columnGap: 15,
              backgroundColor: "#FFF",
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
            <Ionicons name="mail-outline" size={26} color={"#000"} />
            <View style={{ flex: 1, rowGap: 5 }}>
              <Text style={{ color: "#15803D", fontSize: 18, fontWeight: 700 }}>
                Admission Letter Scams
              </Text>
              <Text
                style={{
                  color: "#666",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Verify admission letters with the official institution. Scams
                often use poor grammar and generic greetings.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              columnGap: 15,
              backgroundColor: "#FFF",
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
            <Ionicons name="document-outline" size={26} color={"#000"} />
            <View style={{ flex: 1, rowGap: 5 }}>
              <Text style={{ color: "#15803D", fontSize: 18, fontWeight: 700 }}>
                Result Slip Forgeries
              </Text>
              <Text
                style={{
                  color: "#666",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Check fonts, logos, and signature placements carefully. Scammers
                often use blurred or mismatched designs.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              columnGap: 15,
              backgroundColor: "#FFF",
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
            <Ionicons name="receipt-outline" size={26} color={"#000"} />
            <View style={{ flex: 1, rowGap: 5 }}>
              <Text style={{ color: "#15803D", fontSize: 18, fontWeight: 700 }}>
                Fake Payment Receipts
              </Text>
              <Text
                style={{
                  color: "#666",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Scammers often send fake bank or transfer receipts to claim they
                have paid school fees or application charges.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              columnGap: 15,
              backgroundColor: "#FFF",
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
            <Ionicons name="person-outline" size={26} color={"#000"} />
            <View style={{ flex: 1, rowGap: 5 }}>
              <Text style={{ color: "#15803D", fontSize: 18, fontWeight: 700 }}>
                Agent Admission Scams
              </Text>
              <Text
                style={{
                  color: "#666",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Some individuals posing as "admission agents" promise direct
                entry into universities for high fees
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
