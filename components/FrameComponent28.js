import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component29 from "./Component29";
import FrameComponent6 from "./FrameComponent6";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const FrameComponent28 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.awardsParent}
      onPress={() => navigation.navigate("Frame5")}
    >
      <Text style={[styles.awards, styles.textTypo]}>🏆 Awards</Text>
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Component29 />
            <Text style={[styles.text, styles.textTypo]}>단풍톤 최우수상</Text>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-1192448055.png")}
          />
        </View>
        <FrameComponent6 />
        <FrameComponent6 />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  awards: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_600,
  },
  text: {
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_100,
    width: 189,
  },
  parent: {
    gap: Gap.gap_3xs,
    maxWidth: 252,
  },
  frameChild: {
    width: 28,
    height: 29,
  },
  frameGroup: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  frameParent: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  awardsParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue_300,
    overflow: "hidden",
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xl,
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
});

export default FrameComponent28;
