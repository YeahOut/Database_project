import * as React from "react";
import { StyleSheet, View } from "react-native";
import Component28 from "./Component28";
import Button6 from "./Button6";
import { Gap } from "../GlobalStyles";

const FrameComponent20 = () => {
  return (
    <View style={styles.parent}>
      <Component28 title="2024 퀀텀 챌린지(Quantum Challenge)" userId="goorm" />
      <Button6 text="동료평가 하기" />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    alignSelf: "stretch",
    gap: Gap.gap_sm,
  },
});

export default FrameComponent20;
