import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Component9 from "./Component9";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
} from "../GlobalStyles";

const FrameComponent18 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={[styles.wrapper, styles.viewSpaceBlock]}>
        <Text style={[styles.text, styles.textTypo2]}>👨🏻‍💻 팀원 정보</Text>
      </View>
      <View style={styles.parent}>
        <View style={[styles.view, styles.viewSpaceBlock]}>
          <Text style={[styles.text1, styles.textTypo1]}>우대사항</Text>
          <View style={styles.group}>
            <View style={styles.view1}>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text
                  style={[styles.text2, styles.textTypo]}
                >{`기획            | `}</Text>
                <Text style={[styles.text3, styles.textTypo]}>
                  어떤 기획과 함께 하고 싶나요?
                </Text>
              </View>
            </View>
            <View style={styles.view1}>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text
                  style={[styles.text2, styles.textTypo]}
                >{`디자인        | `}</Text>
                <Text style={[styles.text3, styles.textTypo]}>
                  어떤 디자인과 함께 하고 싶나요?
                </Text>
              </View>
            </View>
            <View style={styles.view1}>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text
                  style={[styles.text2, styles.textTypo]}
                >{`백엔드        | `}</Text>
                <Text style={[styles.text3, styles.textTypo]}>
                  어떤 개발자와 함께 하고 싶나요?
                </Text>
              </View>
            </View>
            <View style={styles.view1}>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text
                  style={[styles.text2, styles.textTypo]}
                >{`프론트엔드 | `}</Text>
                <Text style={[styles.text3, styles.textTypo]}>
                  어떤 개발자와 함께 하고 싶나요?
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.view5, styles.viewSpaceBlock]}>
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <Text style={styles.textTypo1}>
              <Text style={styles.text11}>팀원 구성</Text>
              <Text style={styles.text12}> *</Text>
            </Text>
            <View style={styles.parent3}>
              <Component9 prop="기획" />
              <Component9 prop="디자인" />
              <Component9 prop="프론트엔드" />
              <Component9 prop="백엔드" />
            </View>
          </View>
        </View>
        <View style={[styles.view7, styles.viewSpaceBlock]}>
          <Text style={[styles.text1, styles.textTypo1]}>키워드 설정</Text>
          <View style={styles.inner}>
            <View style={[styles.keywordParent, styles.wrapperFlexBox]}>
              <Text style={[styles.keyword, styles.textTypo2]}>
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
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
  },
  textTypo2: {
    textAlign: "left",
    fontWeight: "600",
  },
  textTypo1: {
    fontSize: FontSize.semiTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo: {
    fontSize: FontSize.subTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  text: {
    flex: 1,
    fontSize: FontSize.size_xl,
    color: Color.fontSub,
    fontFamily: FontFamily.semiTitle,
    textAlign: "left",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text1: {
    color: Color.fontSub,
  },
  text2: {
    color: Color.colorGray_100,
    fontWeight: "600",
    fontSize: FontSize.subTitle_size,
  },
  text3: {
    fontWeight: "500",
    color: Color.colorDarkgray_100,
  },
  container: {
    gap: Gap.gap_xs,
  },
  view1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_lg,
    alignSelf: "stretch",
  },
  group: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  view: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  text11: {
    color: Color.fontSub,
  },
  text12: {
    color: Color.colorDarkslateblue_200,
  },
  parent3: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  view5: {
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
  inner: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue_300,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xl,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  view7: {
    width: 373,
    gap: Gap.gap_sm,
  },
  parent: {
    gap: Gap.gap_xl,
    alignSelf: "stretch",
  },
  frameParent: {
    gap: Gap.gap_3xl,
    alignSelf: "stretch",
  },
});

export default FrameComponent18;
