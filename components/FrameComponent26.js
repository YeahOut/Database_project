import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import Component31 from "./Component31";
import Button2 from "./Button2";
import {
  Padding,
  Border,
  FontFamily,
  Color,
  FontSize,
  Gap,
} from "../GlobalStyles";

const FrameComponent26 = () => {
  return (
    <View style={[styles.frameParent, styles.frameParentFlexBox]}>
      <View style={styles.frameGroup}>
        <View style={[styles.parent, styles.view6SpaceBlock]}>
          <Text style={styles.text}>대회 규모</Text>
          <View style={styles.frameWrapper}>
            <View style={[styles.group, styles.groupFlexBox]}>
              <View style={[styles.view, styles.viewFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>전국</Text>
              </View>
              <View style={[styles.view, styles.viewFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>지역</Text>
              </View>
              <View style={[styles.view2, styles.viewFlexBox]}>
                <Text style={[styles.keyword, styles.textTypo]}>대학</Text>
              </View>
              <View style={[styles.view, styles.viewFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>학부</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.parent, styles.view6SpaceBlock]}>
          <Text style={styles.text}>대회 정보</Text>
          <View style={[styles.view5, styles.viewSpaceBlock]}>
            <View style={[styles.wrapper, styles.groupFlexBox]}>
              <Text style={[styles.text4, styles.textTypo]}>
                대회 이름을 작성해주세요.
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.view6, styles.view6SpaceBlock]}>
          <View style={styles.container}>
            <Text style={styles.text}>증빙 자료</Text>
          </View>
          <ScrollView style={[styles.frameScrollview, styles.view7FlexBox]}>
            <View style={[styles.view7, styles.view7FlexBox]}>
              <View style={[styles.view8, styles.view8FlexBox]}>
                <View
                  style={[
                    styles.majesticonscameraWrapper,
                    styles.view6SpaceBlock,
                  ]}
                >
                  <Image
                    style={[styles.majesticonscamera, styles.view8FlexBox]}
                    contentFit="cover"
                    source={require("../assets/majesticonscamera.png")}
                  />
                </View>
              </View>
            </View>
            <Component31 />
            <Component31 />
          </ScrollView>
        </View>
      </View>
      <Button2
        text="수상경력 추가하기"
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
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  view6SpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
  },
  groupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewFlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  viewSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
    flexDirection: "row",
    alignItems: "center",
  },
  view7FlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  view8FlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  text: {
    fontSize: FontSize.semiTitle_size,
    fontWeight: "600",
    color: Color.fontSub,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    alignSelf: "stretch",
  },
  text1: {
    color: Color.fontSubsub,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
  },
  view: {
    backgroundColor: Color.grayInput,
  },
  keyword: {
    color: Color.grayWhite,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
  },
  view2: {
    backgroundColor: Color.colorSteelblue_100,
  },
  group: {
    position: "absolute",
    top: 0,
    left: 0,
    gap: Gap.gap_5xs,
  },
  frameWrapper: {
    width: 224,
    height: 28,
  },
  parent: {
    gap: Gap.gap_3xs,
    alignSelf: "stretch",
  },
  text4: {
    fontSize: FontSize.subTitle_size,
    color: Color.colorDarkgray_100,
  },
  wrapper: {
    flex: 1,
  },
  view5: {
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  container: {
    alignSelf: "stretch",
  },
  majesticonscamera: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  majesticonscameraWrapper: {
    width: 73,
    height: 53,
    justifyContent: "center",
    alignItems: "center",
  },
  view8: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_xl,
    overflow: "hidden",
    justifyContent: "center",
  },
  view7: {
    width: 120,
    height: 120,
  },
  frameScrollview: {
    height: 130,
    gap: Gap.gap_sm,
    maxHeight: 130,
    width: "100%",
  },
  view6: {
    alignSelf: "stretch",
  },
  frameGroup: {
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  frameParent: {
    gap: Gap.gap_xl,
    flex: 1,
  },
});

export default FrameComponent26;
