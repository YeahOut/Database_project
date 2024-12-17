import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Component21 from "./Component21";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent29 = () => {
  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textTypo]}>
        당신을 나타내는 키워드는?
      </Text>
      <View style={styles.frameParent}>
        <View style={[styles.keywordParent, styles.groupFlexBox]}>
          <Text style={[styles.keyword, styles.textTypo]}>
            🗝️ keyword 설정하기
          </Text>
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/back-icon1.png")}
          />
        </View>
        <View style={[styles.group, styles.groupFlexBox]}>
          <Component21
            property="New value"
            text="# 일반 기획"
            showView
            keywordFontWeight="500"
            keywordFontFamily="Pretendard"
          />
          <Component21
            property="New value"
            text="# 서비스 기획"
            showView
            keywordFontWeight="500"
            keywordFontFamily="Pretendard"
          />
          <Component21
            property="New value"
            text="# PM"
            showView
            keywordFontWeight="500"
            keywordFontFamily="Pretendard"
          />
          <Component21
            property="New value"
            text="# 데이터 분석"
            showView
            keywordFontWeight="500"
            keywordFontFamily="Pretendard"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontWeight: "600",
  },
  groupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.semiTitle_size,
    fontFamily: FontFamily.semiTitle,
    color: Color.fontSub,
    alignSelf: "stretch",
  },
  keyword: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_600,
  },
  backIcon: {
    width: 22,
    height: 20,
    overflow: "hidden",
  },
  keywordParent: {
    justifyContent: "space-between",
  },
  group: {
    flexWrap: "wrap",
    alignContent: "center",
    rowGap: 8,
    columnGap: 12,
    overflow: "hidden",
  },
  frameParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue_300,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xl,
    gap: Gap.gap_lg,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  parent: {
    padding: Padding.p_5xs,
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
});

export default FrameComponent29;
