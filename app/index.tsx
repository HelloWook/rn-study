import Form from "@/components/ui/form";
import useStep from "@/hooks/useStep";
import { useStepAnimation } from "@/hooks/useStepAnimation";
import { useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 선언적인 애니메이션 설정
  const { animateStepChange, animatedStyle } = useStepAnimation({
    duration: 200,
    slideDistance: 30,
    scaleRange: [0.9, 1],
  });

  // 선언적인 애니메이션 핸들러
  const handleStepChange = (callback: () => void) => {
    animateStepChange(callback);
  };

  const handleNext = () => {
    handleStepChange(() => next());
    console.log("회원가입 완료:", { name, email, password });
  };

  const handlePrevious = () => {
    handleStepChange(() => previous());
  };

  const { currentStep, StepComponent, next, previous, totalSteps } = useStep({
    childrens: [
      <>
        <Text>안녕하세요</Text>
      </>,
      <>
        <Form.Filed
          label="이름"
          placeholder="name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </>,
      <>
        <Form.Filed
          label="이메일"
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </>,
      <>
        <Form.Filed
          label="비밀번호"
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </>,
      <>
        <Text style={styles.completionText}>끝입니다!</Text>
        <Text style={styles.completionSubText}>회원가입이 완료되었습니다.</Text>
      </>,
    ],
  });

  return (
    <View style={styles.container}>
      <Progress.Bar progress={(currentStep + 1) / totalSteps} width={null} />

      <Animated.View style={[styles.stepContainer, animatedStyle]}>
        <Form>
          {StepComponent}
          <View style={styles.buttonContainer}>
            <Form.Button title="이전" onPress={handlePrevious} />

            <Form.Button title={"다음"} onPress={handleNext} />
          </View>
        </Form>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  stepContainer: {
    width: "100%",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 10,
  },
  completionText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#007AFF",
    marginBottom: 10,
  },
  completionSubText: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
});
