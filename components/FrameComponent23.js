import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FrameComponent15 from "./FrameComponent15";
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent23 = () => {
  return (
    <View style={styles.skillsParent}>
      <Text style={[styles.skills, styles.skillsTypo]}>🤖 Skills</Text>
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View
            style={[
              styles.skillIconstypescriptParent,
              styles.frameGroupFlexBox,
            ]}
          >
            <View style={styles.skillIconstypescript}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group2.png")}
              />
            </View>
            <Text style={[styles.spring, styles.skillsTypo]}>Spring</Text>
          </View>
          <FrameComponent15
            mdipuzzle={require("../assets/mdipuzzle7.png")}
            mdipuzzle1={require("../assets/mdipuzzle8.png")}
            mdipuzzle2={require("../assets/mdipuzzle7.png")}
            mdipuzzle3={require("../assets/mdipuzzle8.png")}
            mdipuzzle4={require("../assets/mdipuzzle9.png")}
          />
        </View>
        <View style={styles.frameWrapper}>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View
              style={[
                styles.skillIconstypescriptParent,
                styles.frameGroupFlexBox,
              ]}
            >
              <Image
                style={styles.groupIcon1}
                contentFit="cover"
                source={require("../assets/group3.png")}
              />
              <Text style={[styles.spring, styles.skillsTypo]}>Django</Text>
            </View>
            <FrameComponent15
              mdipuzzle={require("../assets/mdipuzzle10.png")}
              mdipuzzle1={require("../assets/mdipuzzle11.png")}
              mdipuzzle2={require("../assets/mdipuzzle10.png")}
              mdipuzzle3={require("../assets/mdipuzzle12.png")}
              mdipuzzle4={require("../assets/mdipuzzle13.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skillsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  skills: {
    color: Color.colorGray_600,
  },
  groupIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "-2.12%",
    right: "0%",
    bottom: "2.12%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  skillIconstypescript: {
    borderRadius: Border.br_8xs,
    width: 30,
    height: 33,
    overflow: "hidden",
  },
  spring: {
    color: Color.colorDimgray_100,
  },
  skillIconstypescriptParent: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    gap: Gap.gap_lg,
  },
  frameGroup: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  groupIcon1: {
    width: 29,
    height: 29,
  },
  frameWrapper: {
    alignSelf: "stretch",
  },
  frameParent: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  skillsParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue_300,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xl,
    gap: Gap.gap_lg,
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default FrameComponent23;
