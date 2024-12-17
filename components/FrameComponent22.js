import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Component29 from "./Component29";
import Component21 from "./Component21";
import {
  FontSize,
  Gap,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const FrameComponent22 = () => {
  return (
    <View style={styles.awardsParent}>
      <Text style={[styles.awards, styles.textTypo]}>🏆 Awards</Text>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.parent, styles.groupFlexBox]}>
            <Component29 />
            <Text style={[styles.text, styles.textTypo]}>
              캡스톤디자인 밸류업 대상
            </Text>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-1192448055.png")}
          />
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.group, styles.groupFlexBox]}>
            <Component21
              property="Default"
              text="교내"
              showView
              keywordFontWeight="500"
              keywordFontFamily="Pretendard"
            />
            <Text style={[styles.text, styles.textTypo]}>
              종합설계 결과보고회 우수상
            </Text>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-11924480551.png")}
          />
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.group, styles.groupFlexBox]}>
            <Component21
              property="Default"
              text="교내"
              showView
              keywordFontWeight="500"
              keywordFontFamily="Pretendard"
            />
            <Text style={[styles.text, styles.textTypo]}>
              동국대 ICONIC 해커톤 대상
            </Text>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-11924480552.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  groupFlexBox: {
    gap: Gap.gap_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  awards: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_600,
  },
  text: {
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_100,
    width: 189,
  },
  parent: {
    maxWidth: 252,
  },
  frameChild: {
    width: 28,
    height: 29,
  },
  frameGroup: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  group: {
    maxWidth: 270,
  },
  frameParent: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  awardsParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue_300,
    overflow: "hidden",
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xl,
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
});

export default FrameComponent22;
