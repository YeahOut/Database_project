import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component21 from "./Component21";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Component44 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={[styles.text, styles.textTypo]}>키워드 설정</Text>
      <View style={styles.frameParent}>
        <View style={[styles.keywordParent, styles.parentFlexBox]}>
          <Text style={[styles.keyword, styles.textTypo]}>
            🗝️ keyword 설정하기
          </Text>
          <Pressable
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/back-icon1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.parent, styles.parentFlexBox]}>
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
  parentFlexBox: {
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
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  backIcon: {
    width: 22,
    height: 20,
  },
  keywordParent: {
    justifyContent: "space-between",
  },
  parent: {
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
  view: {
    width: 373,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    gap: Gap.gap_sm,
  },
});

export default Component44;
