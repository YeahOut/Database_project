import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component20 = ({
  property1 = "Default",
  prop,
  viewAlignItems,
  viewHeight,
}) => {
  const view5Style = useMemo(() => {
    return {
      ...getStyleValue("alignItems", viewAlignItems),
      ...getStyleValue("height", viewHeight),
    };
  }, [viewAlignItems, viewHeight]);

  const getText3Style = () => {
    if (property1 === "Variant2") return styles.text3Var;
  };

  return (
    <View style={[styles.root, view5Style]}>
      <Text style={[styles.text, getText3Style()]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text3Var: {
    color: Color.colorDarkgray_500,
  },
  text: {
    fontSize: FontSize.subTitle_size,
    fontWeight: "500",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  root: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
});

export default Component20;
