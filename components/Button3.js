import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button3 = ({
  text = "1:1 문의하기",
  buttonFlex,
  buttonBackgroundColor,
  buttonPosition,
  buttonRight,
  buttonBottom,
  buttonLeft,
  buttonTop,
  buttonWidth,
  buttonHeight,
  buttonAlignSelf,
  textColor,
  textFontSize,
  onButtonPress,
}) => {
  const button2Style = useMemo(() => {
    return {
      ...getStyleValue("flex", buttonFlex),
      ...getStyleValue("backgroundColor", buttonBackgroundColor),
      ...getStyleValue("position", buttonPosition),
      ...getStyleValue("right", buttonRight),
      ...getStyleValue("bottom", buttonBottom),
      ...getStyleValue("left", buttonLeft),
      ...getStyleValue("top", buttonTop),
      ...getStyleValue("width", buttonWidth),
      ...getStyleValue("height", buttonHeight),
      ...getStyleValue("alignSelf", buttonAlignSelf),
    };
  }, [
    buttonFlex,
    buttonBackgroundColor,
    buttonPosition,
    buttonRight,
    buttonBottom,
    buttonLeft,
    buttonTop,
    buttonWidth,
    buttonHeight,
    buttonAlignSelf,
  ]);

  const text4Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
      ...getStyleValue("fontSize", textFontSize),
    };
  }, [textColor, textFontSize]);

  const navigation = useNavigation();

  return (
    <Pressable style={[styles.button, button2Style]} onPress={onButtonPress}>
      <Text style={[styles.text, text4Style]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.subTitle_size,
    fontWeight: "600",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  button: {
    flex: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorAliceblue_400,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
  },
});

export default Button3;
