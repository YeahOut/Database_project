import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Component22 from "./Component22";
import { FontFamily, Border, FontSize, Color, Gap } from "../GlobalStyles";

const FrameComponent4 = () => {
  return (
    <View style={[styles.rectangleParent, styles.parentFlexBox]}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/rectangle-151.png")}
      />
      <View style={styles.frameParent}>
        <View style={[styles.goormParent, styles.parentFlexBox]}>
          <Text style={[styles.goorm, styles.textTypo]}>박이슬</Text>
          <Component22 property1="L6" />
        </View>
        <Text style={[styles.text, styles.textTypo]}>컴퓨터공학전공</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  frameChild: {
    borderRadius: Border.br_xl,
    width: 56,
    height: 55,
  },
  goorm: {
    fontSize: FontSize.title_size,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  goormParent: {
    gap: Gap.gap_5xs,
  },
  text: {
    fontSize: FontSize.mainContent_size,
    fontWeight: "500",
    color: Color.colorDimgray_100,
  },
  frameParent: {
    justifyContent: "center",
    gap: Gap.gap_5xs,
  },
  rectangleParent: {
    gap: Gap.gap_xl,
  },
});

export default FrameComponent4;
