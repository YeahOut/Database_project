import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button7 = ({
  text = "평가 예정",
  buttonBackgroundColor,
  buttonBorderStyle,
  buttonBorderColor,
  buttonBorderWidth,
  textColor,
}) => {
  const button4Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", buttonBackgroundColor),
      ...getStyleValue("borderStyle", buttonBorderStyle),
      ...getStyleValue("borderColor", buttonBorderColor),
      ...getStyleValue("borderWidth", buttonBorderWidth),
    };
  }, [
    buttonBackgroundColor,
    buttonBorderStyle,
    buttonBorderColor,
    buttonBorderWidth,
  ]);

  const text6Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={[styles.button, button4Style]}>
      <Text style={[styles.text, text6Style]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.semiTitle_size,
    fontWeight: "700",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  button: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue_100,
    borderWidth: 2,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
  },
});

export default Button7;
