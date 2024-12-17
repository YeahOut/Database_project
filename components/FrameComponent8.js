import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  FontFamily,
  Border,
  Color,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent8 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.instanceChild} />
      <View style={styles.goormParent}>
        <Text style={[styles.goorm, styles.pmTypo]}>goorm</Text>
        <View style={styles.buttonWrapper}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.text, styles.pmTypo]}>
              안녕하세요 안녕하세요 안녕하세요 안녕하세요
            </Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.text, styles.pmTypo]}>안녕하세요</Text>
          </View>
        </View>
        <View style={[styles.pmWrapper, styles.buttonFlexBox]}>
          <Text style={[styles.pm, styles.pmTypo]}>3:15 PM</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pmTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  instanceChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.grayGray1,
    width: 34,
    height: 34,
  },
  goorm: {
    color: Color.colorDimgray_500,
    fontWeight: "500",
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.size_mini,
    alignSelf: "stretch",
  },
  text: {
    fontWeight: "600",
    color: Color.colorDimgray_600,
    maxWidth: 202,
    fontSize: FontSize.size_mini,
  },
  button: {
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.grayInput,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
  buttonWrapper: {
    alignSelf: "stretch",
  },
  pm: {
    fontSize: FontSize.subContent_size,
    color: Color.colorGray_300,
    fontWeight: "500",
    fontFamily: FontFamily.semiTitle,
  },
  pmWrapper: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
  },
  goormParent: {
    gap: Gap.gap_5xs,
  },
  rectangleParent: {
    gap: Gap.gap_5xs,
    flexDirection: "row",
  },
});

export default FrameComponent8;
