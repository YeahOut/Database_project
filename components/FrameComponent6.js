import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Component21 from "./Component21";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const FrameComponent6 = () => {
  return (
    <View style={[styles.frameParent, styles.parentFlexBox]}>
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Component21
          property="Default"
          text="전국"
          showView
          keywordFontWeight="500"
          keywordFontFamily="Pretendard"
        />
        <Text style={styles.danpoongthon}>
          2024 danpoongthon 해커톤 대회 최우수상
        </Text>
      </View>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/frame-11924480555.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  danpoongthon: {
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_100,
    textAlign: "left",
    width: 189,
  },
  parent: {
    gap: Gap.gap_3xs,
    maxWidth: 270,
  },
  frameChild: {
    width: 28,
    height: 29,
  },
  frameParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
});

export default FrameComponent6;
