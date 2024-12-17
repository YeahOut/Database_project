import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = ({ buttonTop }) => {
  const button1Style = useMemo(() => {
    return {
      ...getStyleValue("top", buttonTop),
    };
  }, [buttonTop]);

  return (
    <View style={[styles.button, styles.buttonFlexBox, button1Style]}>
      <Text style={styles.text}>메세지 입력</Text>
      <View style={[styles.vectorParent, styles.buttonFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={styles.iconoirsendSolid}
          contentFit="cover"
          source={require("../assets/iconoirsendsolid.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.mainContent_size,
    fontWeight: "500",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDimgray_300,
    textAlign: "left",
  },
  vectorIcon: {
    width: 20,
    height: 21,
  },
  iconoirsendSolid: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  vectorParent: {
    gap: Gap.gap_5xs,
  },
  button: {
    position: "absolute",
    top: 832,
    left: 20,
    borderRadius: Border.br_xl,
    backgroundColor: Color.grayInput,
    width: 372,
    height: 48,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
});

export default Button1;
