import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent15 from "./FrameComponent15";
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const FrameComponent30 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.skillsParent}
      onPress={() => navigation.navigate("Frame6")}
    >
      <Text style={[styles.skills, styles.skillsTypo]}>🤖 Skills</Text>
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View
            style={[
              styles.skillIconstypescriptParent,
              styles.frameGroupFlexBox,
            ]}
          >
            <Image
              style={[styles.skillIconstypescript, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/skilliconstypescript1.png")}
            />
            <Text style={[styles.typescript, styles.skillsTypo]}>
              Typescript
            </Text>
          </View>
          <FrameComponent15
            mdipuzzle={require("../assets/mdipuzzle14.png")}
            mdipuzzle1={require("../assets/mdipuzzle15.png")}
            mdipuzzle2={require("../assets/mdipuzzle16.png")}
            mdipuzzle3={require("../assets/mdipuzzle15.png")}
            mdipuzzle4={require("../assets/mdipuzzle16.png")}
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
                style={styles.groupIconLayout}
                contentFit="cover"
                source={require("../assets/group4.png")}
              />
              <Text style={[styles.typescript, styles.skillsTypo]}>React</Text>
            </View>
            <FrameComponent15
              mdipuzzle={require("../assets/mdipuzzle14.png")}
              mdipuzzle1={require("../assets/mdipuzzle15.png")}
              mdipuzzle2={require("../assets/mdipuzzle16.png")}
              mdipuzzle3={require("../assets/mdipuzzle15.png")}
              mdipuzzle4={require("../assets/mdipuzzle16.png")}
            />
          </View>
        </View>
      </View>
    </Pressable>
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
  groupIconLayout: {
    height: 30,
    width: 30,
  },
  skills: {
    color: Color.colorGray_600,
  },
  skillIconstypescript: {
    overflow: "hidden",
  },
  typescript: {
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

export default FrameComponent30;
