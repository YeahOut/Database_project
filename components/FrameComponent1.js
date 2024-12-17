import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent1 = ({ prop, textFontSize }) => {
  const text7Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textFontSize),
    };
  }, [textFontSize]);

  return (
    <View style={styles.top5Inner}>
      <View style={styles.parent}>
        <Text style={[styles.text, text7Style]}>{prop}</Text>
        <Image
          style={styles.mingcutearrowUpFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutearrowupfill.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.subTitle_size,
    fontWeight: "700",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  mingcutearrowUpFillIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  parent: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  top5Inner: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGold_100,
    width: 133,
    height: 125,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_base,
  },
});

export default FrameComponent1;
