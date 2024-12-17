import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component18 = ({ prop, textColor, onPressablePress }) => {
  const text3Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={styles.view} onPress={onPressablePress}>
      <Text style={[styles.text, text3Style]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDimgray_400,
    textAlign: "left",
  },
  view: {
    flex: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
});

export default Component18;
