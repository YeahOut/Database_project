import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Component16 from "./Component16";
import FrameComponent13 from "./FrameComponent13";
import { FontFamily, Color, FontSize, Border, Gap } from "../GlobalStyles";

const Component42 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.view1}>
        <Component16
          property1="Variant3"
          viewWidth="unset"
          viewHeight="unset"
        />
        <Text style={[styles.quantumChallenge, styles.textTypo1]}>
          2024 퀀텀 챌린지(Quantum Challenge) 프로젝트 멤버 구합니다!
        </Text>
        <View style={[styles.inner, styles.wrapperFlexBox]}>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <View style={[styles.imageParent, styles.wrapperFlexBox]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../assets/image14.png")}
              />
              <Text style={[styles.text, styles.textTypo1]}>서주인</Text>
            </View>
          </View>
        </View>
        <View style={[styles.view2, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>
            24.11.13 오전 08:00
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>·</Text>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={styles.text3}>조회수 123</Text>
          </View>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.view1}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("../assets/mask-group7.png")}
          />
          <FrameComponent13
            ellipse2={require("../assets/ellipse-21.png")}
            ellipse3={require("../assets/ellipse-31.png")}
            ellipse4={require("../assets/ellipse-31.png")}
            frameViewWidth="unset"
            frameViewAlignSelf="stretch"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    color: Color.colorSilver_100,
    fontSize: FontSize.mainContent_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  quantumChallenge: {
    fontSize: FontSize.totalTitle_size,
    color: Color.fontMain,
    alignSelf: "stretch",
  },
  imageIcon: {
    borderRadius: Border.br_xl,
    width: 30,
    height: 30,
  },
  text: {
    fontSize: FontSize.subTitle_size,
    color: Color.fontSub,
  },
  imageParent: {
    gap: Gap.gap_5xs,
  },
  frameWrapper: {
    flex: 1,
  },
  inner: {
    alignSelf: "stretch",
  },
  text1: {
    fontWeight: "600",
    color: Color.colorSilver_100,
  },
  text2: {
    fontWeight: "900",
  },
  text3: {
    color: Color.fontSubsub,
    fontSize: FontSize.mainContent_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  wrapper: {
    opacity: 0.5,
  },
  view2: {
    gap: Gap.gap_7xs,
    alignSelf: "stretch",
  },
  view1: {
    gap: Gap.gap_3xs,
    alignSelf: "stretch",
  },
  maskGroupIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    height: 335,
    width: "100%",
    alignSelf: "stretch",
  },
  view3: {
    alignSelf: "stretch",
  },
  view: {
    width: 370,
    gap: Gap.gap_3xl,
  },
});

export default Component42;
