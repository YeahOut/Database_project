import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Button2 from "./Button2";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const FrameComponent16 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>가장 가까운 일정</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.text1, styles.textTypo]}>기획 3차 회의</Text>
        <Text style={[styles.text2, styles.textTypo]}>11월 20일 18시</Text>
      </View>
      <Button2
        text="팀 일정 확인 및 추가하기"
        buttonPosition="unset"
        buttonTop="unset"
        buttonLeft="unset"
        buttonWidth="unset"
        buttonAlignSelf="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    left: 25,
    position: "absolute",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.subTitle_size,
  },
  text: {
    flex: 1,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.subTitle_size,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  groupChild: {
    marginLeft: -152,
    top: 0,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4.2,
    elevation: 4.2,
    shadowOpacity: 1,
    borderRadius: Border.br_sm,
    backgroundColor: Color.grayWhite,
    width: 304,
    position: "absolute",
    height: 88,
  },
  text1: {
    top: 22,
    fontWeight: "700",
    width: 95,
  },
  text2: {
    top: 47,
    width: 109,
  },
  rectangleParent: {
    height: 88,
    alignSelf: "stretch",
  },
  frameParent: {
    gap: Gap.gap_3xs,
    alignSelf: "stretch",
  },
});

export default FrameComponent16;
