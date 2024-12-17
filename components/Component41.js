import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component16 from "./Component16";
import Button4 from "./Button4";
import FrameComponent13 from "./FrameComponent13";
import { FontFamily, Color, FontSize, Border, Gap } from "../GlobalStyles";

const Component41 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={styles.view1}>
        <Component16 property1="Default" viewWidth="unset" viewHeight="unset" />
        <Text style={[styles.quantumChallenge, styles.goormTypo]}>
          2024 퀀텀 챌린지(Quantum Challenge) 프로젝트 멤버 구합니다!
        </Text>
        <View style={[styles.inner, styles.parentFlexBox]}>
          <View style={[styles.frameParent, styles.parentFlexBox]}>
            <View style={[styles.rectangleParent, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-15.png")}
              />
              <Text style={[styles.goorm, styles.goormTypo]}>goorm</Text>
            </View>
            <Button4
              text="게시물 수정"
              icbaselineEdit={require("../assets/icbaselineedit.png")}
              showButton
              onButtonPress={() => navigation.navigate("Frame8")}
            />
          </View>
        </View>
        <View style={[styles.view2, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>
            24.11.23 오후 14:30
          </Text>
          <Text style={[styles.text1, styles.textTypo]}>·</Text>
          <View style={[styles.wrapper, styles.parentFlexBox]}>
            <Text style={styles.text2}>조회수 123</Text>
          </View>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.view1}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("../assets/mask-group6.png")}
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
  goormTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  parentFlexBox: {
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
    fontWeight: "700",
    color: Color.fontMain,
    alignSelf: "stretch",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    width: 30,
    height: 30,
  },
  goorm: {
    fontSize: FontSize.subTitle_size,
    color: Color.fontSub,
    fontWeight: "600",
  },
  rectangleParent: {
    gap: Gap.gap_5xs,
  },
  frameParent: {
    flex: 1,
    justifyContent: "space-between",
  },
  inner: {
    alignSelf: "stretch",
  },
  text: {
    fontWeight: "600",
  },
  text1: {
    fontWeight: "900",
  },
  text2: {
    color: Color.fontSubsub,
    fontSize: FontSize.mainContent_size,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
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
    position: "absolute",
    top: 114,
    left: 20,
    width: 372,
    gap: Gap.gap_3xl,
  },
});

export default Component41;
