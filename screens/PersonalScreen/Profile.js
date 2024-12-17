import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Component13 from "../../components/Component13";
import FrameComponent14 from "../../components/FrameComponent14";
import Component21 from "../../components/Component21";
import FrameComponent22 from "../../components/FrameComponent22";
import FrameComponent23 from "../../components/FrameComponent23";
import {
  Gap,
  Padding,
  FontFamily,
  FontSize,
  Color,
  Border,
} from "../../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.profileChild} />
      <Component13
        mingcutecheckFill={require("../assets/mingcutecheckfill1.png")}
        showBackIcon
        showMingcutecheckFillIcon={false}
        viewWidth={372}
        viewJustifyContent="flex-start"
        viewLeft={20}
        viewTop={55}
        viewPosition="absolute"
        mingcutecheckFillIconOverflow="hidden"
      />
      <FrameComponent14 />
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={styles.text}>최예인 님을 나타내는 키워드는?</Text>
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
      <View style={[styles.container, styles.parentPosition]}>
        <Text style={styles.text}>저는 이런 사람이에요!</Text>
        <View style={styles.introductionParent}>
          <Text style={[styles.introduction, styles.text3Typo]}>
            🙋🏻 Introduction
          </Text>
          <Text style={[styles.text2, styles.hiSwTypo]}>
            안녕하세요. 백엔드 개발자 박이슬입니다! 열심히 최선을 다하겠습니다!
          </Text>
        </View>
        <FrameComponent22 />
        <FrameComponent23 />
        <View style={styles.introductionParent}>
          <Text style={[styles.introduction, styles.text3Typo]}>🧐 Career</Text>
          <View style={styles.frameParent}>
            <View style={[styles.frameView, styles.groupFlexBox]}>
              <Text style={[styles.text3, styles.text3Typo]}>11개월</Text>
              <Text style={[styles.hiSw, styles.hiSwTypo]}>
                HI-SW봉사단 회장
              </Text>
            </View>
            <View style={[styles.frameView, styles.groupFlexBox]}>
              <Text style={[styles.text3, styles.text3Typo]}>6개월</Text>
              <Text style={[styles.hiSw, styles.hiSwTypo]}>
                FarmSystem 사물인터넷 부트랙장
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    gap: Gap.gap_sm,
    padding: Padding.p_5xs,
    width: 370,
    left: 20,
    position: "absolute",
  },
  groupFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text3Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontWeight: "600",
  },
  hiSwTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  profileChild: {
    top: 372,
    left: 39,
    width: 295,
    height: 20,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.semiTitle_size,
    fontFamily: FontFamily.semiTitle,
    color: Color.fontSub,
    textAlign: "left",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  group: {
    flexWrap: "wrap",
    alignContent: "center",
    rowGap: 8,
    columnGap: 12,
    alignItems: "center",
    overflow: "hidden",
  },
  parent: {
    top: 321,
  },
  introduction: {
    color: Color.colorGray_600,
  },
  text2: {
    lineHeight: 20,
    alignSelf: "stretch",
  },
  introductionParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue_300,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xl,
    gap: Gap.gap_lg,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text3: {
    color: Color.colorSlategray_200,
  },
  hiSw: {
    width: 244,
  },
  frameView: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    gap: Gap.gap_3xs,
  },
  frameParent: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  container: {
    top: 473,
  },
  profile: {
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 1243,
    overflow: "hidden",
  },
});

export default Profile;
