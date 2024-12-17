import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Component21 from "../../components/Component21";
import Button3 from "../../components/Button3";
import Component35 from "../../components/Component35";
import { FontSize, FontFamily, Color, Gap } from "../../GlobalStyles";

const Keyword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.keyword}>
      <View style={styles.keywordInner}>
        <View style={styles.frameWrapper}>
          <View style={styles.frameParent}>
            <View style={styles.parent}>
              <Text style={styles.text}>📝 기획</Text>
              <View style={styles.group}>
                <Component21
                  property="Default"
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
                  property="Default"
                  text="# PM"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# 데이터 분석"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
              </View>
            </View>
            <View style={styles.parent}>
              <Text style={styles.text}>🎨 디자인</Text>
              <View style={styles.group}>
                <Component21
                  property="Default"
                  text="# UI 디자인"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# UX 디자인"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="New value"
                  text="# 웹 디자인"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# 그래픽 디자인"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# 브랜드 디자인"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
              </View>
            </View>
            <View style={styles.parent}>
              <Text style={styles.text}>💻 프론트엔드</Text>
              <View style={styles.group}>
                <Component21
                  property="Default"
                  text="# React"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Vue"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Angular"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Svelte"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# JQuery"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="New value"
                  text="# Ember"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  showView
                  keywordFontWeight="unset"
                  keywordFontFamily="unset"
                />
                <Component21
                  property="Default"
                  text="# Semantic UI"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Foundation"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Preact"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
              </View>
            </View>
            <View style={styles.parent}>
              <Text style={styles.text}>🖥️ 백엔드</Text>
              <View style={styles.group}>
                <Component21
                  property="Default"
                  text="#Java"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Python"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Javascript"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Ruby"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# PHP"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Spring"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Django"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
                <Component21
                  property="Default"
                  text="# Express"
                  showView
                  keywordFontWeight="500"
                  keywordFontFamily="Pretendard"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Button3
        text="키워드 설정 완료"
        buttonBackgroundColor="#2a4ba0"
        buttonPosition="absolute"
        buttonRight={20}
        buttonBottom={49}
        buttonLeft={20}
        buttonTop="unset"
        buttonWidth="unset"
        buttonHeight={50}
        buttonAlignSelf="unset"
        textColor="#fff"
        textFontSize={16}
        onButtonPress={() => navigation.navigate("SearchTap")}
      />
      <Component35 />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.semiTitle_size,
    fontWeight: "600",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "center",
    rowGap: 8,
    columnGap: 12,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  parent: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 0,
    left: 0,
    width: 372,
    gap: Gap.gap_3xl,
    position: "absolute",
  },
  frameWrapper: {
    height: 524,
    alignSelf: "stretch",
  },
  keywordInner: {
    top: 146,
    right: 20,
    left: 20,
    position: "absolute",
  },
  keyword: {
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 917,
    overflow: "hidden",
  },
});

export default Keyword;
