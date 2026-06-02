import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bold, StarsIcon } from "lucide-react-native";
import OnboardingCard from "@/components/onboardingCard";
import Animated, {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const image = [
  require("../../../assets/images/onboardingImages/1.png"),
  require("../../../assets/images/onboardingImages/2.png"),
  require("../../../assets/images/onboardingImages/3.png"),
  require("../../../assets/images/onboardingImages/4.png"),
  require("../../../assets/images/onboardingImages/5.png"),
];

const onboarding = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 15000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);
  return (
    <LinearGradient
      colors={[
        "rgb(185, 237, 207)",
        "rgb(211, 227, 220)",
        " rgb(74, 143, 104)",
      ]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.onboardingContainer}>
        <ScrollView contentContainerStyle={styles.onboardingContent}>
          <View style={styles.cardContainer}>
            {image.map((img, i) => (
              <OnboardingCard
                key={i}
                item={img}
                index={i}
                rotation={rotation}
              />
            ))}
          </View>
          <View style={styles.contentWrapper}>
            <View>
              <Text style={styles.heading}>
                Elevate Your {"\n"}
                <Text style={styles.learning}>Learning</Text>
                {"\n"}
                Experience
              </Text>
              <Text style={styles.pickupLine}>
                The AI-powered social ecosystem designed {"\n"} for the next
                generation of top students
              </Text>
            </View>

            <TouchableOpacity style={styles.startBtn}>
              <Text style={styles.btnTxt}>Start Your Journey</Text>
              <StarsIcon size={20} color={"#F4F5F5"} />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: 18,
                color: "#247450fa",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              SOCIAL CONNECT
            </Text>

            <View style={styles.signWith}>
              <View style={styles.google}>
                <Text>Google</Text>
              </View>
              <View style={styles.apple}>
                <Text>Apple</Text>
              </View>
            </View>

            <Text style={styles.alreadyMember}>
              Already a member?{" "}
              <Link href="/login">
                <Text style={styles.signIn}>Sign In</Text>
              </Link>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
  },
  onboardingContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  contentWrapper: {
    width: "100%",
    alignItems: "center",
  },
  cardContainer: {
    marginBottom: 30,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#1A3C2BFF",
    fontSize: 46,
    fontWeight: "bold",
    lineHeight: 50,
    textAlign: "center",
  },
  learning: {
    color: "#509E7BFA",
  },
  pickupLine: {
    color: "#509E7BFA",
    fontSize: 17,
    marginTop: 12,
    fontWeight: 500,
    textAlign: "center",
  },
  startBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10B981",
    marginTop: 18,
    gap: 6,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderWidth: 0,
    borderRadius: 10,
  },
  btnTxt: {
    color: "#F4F5F5",
    fontWeight: "700",
    fontSize: 17,
  },
  starIcon: {
    color: "#F4F5F5",
  },
  signWith: {
    marginTop: 15,
    flexDirection: "row",
    width: "100%",
    gap: 8,
    maxWidth: 300,
  },
  google: {
    padding: 20,
    paddingHorizontal: 50,
    backgroundColor: "#F4F5F5",
    borderRadius: 10,
    shadowColor: "#0e7251",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    width: "50%",
  },
  apple: {
    padding: 20,
    backgroundColor: "#F4F5F5",
    paddingHorizontal: 50,
    borderRadius: 10,
    shadowColor: "#0e7251",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    width: "50%",
  },
  alreadyMember: {
    marginTop: 15,
    fontSize: 17,
    color: "#155e45",
    fontWeight: "500",
    textAlign: "center",
  },
  signIn: {
    color: "#073424",
  },
});

export default onboarding;

// 10B981
