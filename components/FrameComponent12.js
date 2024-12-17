import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Component22 from "./Component22";
import {
  Gap,
  FontFamily,
  Border,
  FontSize,
  Color,
  Padding,
} from "../GlobalStyles";

const FrameComponent12 = () => {
  return (
    <View style={[styles.frameParent, styles.frameFlexBox1]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-1192447832.png")}
        />
      </View>
      <View style={styles.frameFlexBox1}>
        <View style={styles.frameFlexBox1}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image7.png")}
          />
          <View style={[styles.parent, styles.frameFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>김예나</Text>
            <Component22 property1="L6" />
          </View>
        </View>
        <Text style={[styles.text1, styles.textTypo]}>560점</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    gap: Gap.gap_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  frameFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  frameChild: {
    width: 28,
    height: 30,
  },
  frame: {
    width: 35,
    alignItems: "center",
    flexDirection: "row",
  },
  imageIcon: {
    borderRadius: Border.br_xl,
    width: 46,
    height: 46,
  },
  text: {
    fontSize: FontSize.subTitle_size,
    color: Color.fontMain,
  },
  parent: {
    gap: Gap.gap_7xs,
  },
  text1: {
    fontSize: FontSize.size_xl,
    color: Color.fontSubsub,
  },
  frameParent: {
    flex: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_xs,
  },
});

export default FrameComponent12;
