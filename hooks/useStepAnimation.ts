import { useRef } from "react";
import { Animated } from "react-native";

interface AnimationConfig {
  duration?: number;
  slideDistance?: number;
  scaleRange?: [number, number];
}

export const useStepAnimation = (config: AnimationConfig = {}) => {
  const { duration = 150, slideDistance = 20, scaleRange = [0.95, 1] } = config;

  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animateStepChange = (callback: () => void) => {
    Animated.sequence([
      // Step out animation
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration,
          useNativeDriver: true,
        }),
      ]),
      // Reset for step change
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => {
      callback();
      // Step in animation
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: duration + 50,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: duration + 50,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: scaleRange[1],
          duration: duration + 50,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const animatedStyle = {
    transform: [
      {
        translateX: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, slideDistance],
        }),
      },
      {
        scale: scaleAnim,
      },
    ],
    opacity: fadeAnim,
  };

  return {
    animateStepChange,
    animatedStyle,
  };
};
