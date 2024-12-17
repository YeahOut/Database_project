import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button2 = ({
  text = "기술 스택 추가하기",
  buttonPosition,
  buttonTop,
  buttonLeft,
  buttonWidth,
  buttonAlignSelf,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPosition),
      ...getStyleValue("top", buttonTop),
      ...getStyleValue("left", buttonLeft),
      ...getStyleValue("width", buttonWidth),
      ...getStyleValue("alignSelf", buttonAlignSelf),
    };
  }, [buttonPosition, buttonTop, buttonLeft, buttonWidth, buttonAlignSelf]);

  return (
    <View style={[styles.button, buttonStyle]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.subTitle_size,
    fontWeight: "600",
    fontFamily: FontFamily.semiTitle,
    color: Color.grayWhite,
    textAlign: "left",
  },
  button: {
    position: "absolute",
    top: 189,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue_100,
    width: 348,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
  },
});

export default Button2;
