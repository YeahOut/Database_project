import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import FrameComponent1 from "./FrameComponent1";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Top3 = () => {
  return (
    <View style={styles.top5}>
      <View style={[styles.top5Parent, styles.parentFlexBox]}>
        <Text style={[styles.top51, styles.textTypo1]}>top5 프로젝트</Text>
        <Text style={[styles.text, styles.textTypo1]}>11.10 22:00 기준</Text>
      </View>
      <ScrollView style={[styles.frameParent, styles.parentFlexBox1]}>
        <FrameComponent1
          prop={`프로젝트 
보러 가기 👀`}
          textFontSize={15}
        />
        <View style={styles.frameWrapper}>
          <View style={[styles.kprPr22Parent, styles.parentFlexBox]}>
            <Text style={[styles.kprPr, styles.textTypo]} numberOfLines={2}>
              KPR 대학생 PR 아이디어 제22회 공모전 팀원 모집!!
            </Text>
            <Text style={[styles.text1, styles.textTypo]}>1</Text>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={[styles.kprPr22Parent, styles.parentFlexBox]}>
            <Text
              style={[styles.kprPr, styles.textTypo]}
              numberOfLines={2}
            >{`2024 한 해 마무리 & 내년 계획 공모전 함께 해요!`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>2</Text>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={[styles.kprPr22Parent, styles.parentFlexBox]}>
            <Text style={[styles.text4, styles.textTypo]}>
              2024 퀀텀 챌린지
            </Text>
            <Text style={[styles.text1, styles.textTypo]}>2</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  parentFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  top51: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    fontWeight: "600",
    fontFamily: FontFamily.semiTitle,
  },
  text: {
    fontSize: FontSize.subContent_size,
    fontWeight: "500",
    color: Color.colorDimgray_400,
  },
  top5Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  kprPr: {
    overflow: "hidden",
    fontSize: FontSize.subTitle_size,
    color: Color.colorDarkslateblue_100,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.totalTitle_size,
  },
  kprPr22Parent: {
    flex: 1,
    alignItems: "flex-end",
  },
  frameWrapper: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkslateblue_400,
    width: 133,
    height: 125,
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
  },
  text4: {
    fontSize: FontSize.subTitle_size,
    color: Color.colorDarkslateblue_100,
    alignSelf: "stretch",
  },
  frameParent: {
    gap: Gap.gap_2xs,
    width: "100%",
    alignItems: "center",
    alignSelf: "stretch",
  },
  top5: {
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
});

export default Top3;
