import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import FrameComponent21 from "./FrameComponent21";
import FrameComponent5 from "./FrameComponent5";
import { Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent14 = ({ frameViewHeight }) => {
  const frameView6Style = useMemo(() => {
    return {
      ...getStyleValue("height", frameViewHeight),
    };
  }, [frameViewHeight]);

  return (
    <View style={[styles.frameParent, frameView6Style]}>
      <FrameComponent21 />
      <FrameComponent5 />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    position: "absolute",
    marginLeft: -183,
    top: 132,
    left: "50%",
    width: 366,
    height: 166,
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_sm,
  },
});

export default FrameComponent14;
