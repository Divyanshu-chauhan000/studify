import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const { width } = Dimensions.get("window");

const radius = 140;

const image = [
  require("../../assets/images/onboardingImages/1.png"),
  require("../../assets/images/onboardingImages/2.png"),
  require("../../assets/images/onboardingImages/3.png"),
  require("../../assets/images/onboardingImages/4.png"),
  require("../../assets/images/onboardingImages/5.png"),
];

const onboardingCard = ({
  item,
  index,
  rotation,
}: {
  item: any;
  index: any;
  rotation: any;
}) => {
  const angle = (360 / image.length) * index;

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = angle + rotation.value;

    const rad = (rotate * Math.PI) / 180;

    const x = Math.sin(rad) * radius;

    const depth = Math.cos(rad);

    return {
      position: "absolute",
      transform: [
        {
          translateX: x,
        },
        {
          scale: 0.7 + depth * 0.3,
        },
      ],
      opacity: 0.4 + depth * 0.6,

      zIndex: Math.round(depth * 100),
    };
  });
  return (
    <Animated.View style={animatedStyle}>
      <Image source={item} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 220,
    borderRadius: 25,
  },
});

export default onboardingCard;
