import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
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

const FrameComponent27 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <Pressable
        style={styles.frameWrapper}
        onPress={() => navigation.navigate("Keyword")}
      >
        <View style={[styles.keywordParent, styles.parentFlexBox]}>
          <Text style={styles.keyword}>🗝️ keyword 설정하기</Text>
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/back-icon1.png")}
          />
        </View>
      </Pressable>
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
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  keyword: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_600,
    textAlign: "left",
  },
  backIcon: {
    width: 22,
    height: 20,
    overflow: "hidden",
  },
  keywordParent: {
    justifyContent: "space-between",
  },
  frameWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorOldlace,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xl,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  parent: {
    flexWrap: "wrap",
    alignContent: "center",
    rowGap: 8,
    columnGap: 12,
    overflow: "hidden",
  },
  frameParent: {
    position: "absolute",
    top: 141,
    right: 20,
    left: 20,
    gap: Gap.gap_xl,
  },
});

export default FrameComponent27;
