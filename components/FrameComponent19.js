import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Component4 from "./Component4";
import Button2 from "./Button2";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const FrameComponent19 = () => {
  return (
    <View style={styles.inner}>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <View style={styles.view}>
            <Text style={styles.text}>경력 기간</Text>
            <View style={[styles.group, styles.groupFlexBox]}>
              <Component4 />
              <Text style={[styles.text1, styles.textTypo]}>~</Text>
              <Component4 />
            </View>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>경력 정보</Text>
            <View style={[styles.view2, styles.groupFlexBox]}>
              <View style={[styles.wrapper, styles.groupFlexBox]}>
                <Text style={[styles.text3, styles.textTypo]}>
                  경력을 설명해주세요
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Button2
          text="일정 추가하기"
          buttonPosition="unset"
          buttonTop="unset"
          buttonLeft="unset"
          buttonWidth="unset"
          buttonAlignSelf="stretch"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontSize: FontSize.subTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
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
    fontWeight: "900",
    color: Color.colorGray_600,
  },
  group: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  view: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    gap: Gap.gap_3xs,
    alignSelf: "stretch",
  },
  text3: {
    fontWeight: "500",
    color: Color.colorDarkgray_100,
  },
  wrapper: {
    flex: 1,
  },
  view2: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
  parent: {
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  frameParent: {
    width: 346,
    gap: Gap.gap_5xl,
  },
  inner: {
    position: "absolute",
    top: 130,
    right: 20,
    left: 20,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender_100,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xl,
  },
});

export default FrameComponent19;
