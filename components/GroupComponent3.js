import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Button2 from "./Button2";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const GroupComponent3 = () => {
  return (
    <View style={styles.viewPosition}>
      <View style={[styles.view, styles.viewPosition]}>
        <View style={[styles.view1, styles.viewLayout1]}>
          <View style={[styles.view2, styles.viewLayout1]}>
            <View style={[styles.view3, styles.viewLayout1]}>
              <Text style={styles.text}>사용가능 기술 스택</Text>
              <View style={styles.view4}>
                <View style={styles.view5}>
                  <View style={[styles.group, styles.groupPosition]}>
                    <Text style={[styles.text1, styles.text1Typo]}>
                      프론트엔드
                    </Text>
                    <Image
                      style={[
                        styles.icroundArrowDropDownIcon,
                        styles.icroundIconLayout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/icroundarrowdropdown.png")}
                    />
                  </View>
                </View>
                <View style={[styles.view6, styles.viewLayout]}>
                  <View style={[styles.reactParent, styles.groupPosition]}>
                    <Text style={[styles.react, styles.text1Typo]}>React</Text>
                    <Image
                      style={[
                        styles.icroundArrowDropDownIcon1,
                        styles.icroundIconLayout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/icroundarrowdropdown.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.view7, styles.viewLayout1]}>
              <Text style={styles.text}>숙련도</Text>
              <View style={[styles.inner, styles.innerLayout]}>
                <View style={[styles.mdipuzzleParent, styles.innerLayout]}>
                  <Image
                    style={[styles.mdipuzzleIcon, styles.mdipuzzleIconLayout]}
                    contentFit="cover"
                    source={require("../assets/mdipuzzle5.png")}
                  />
                  <Image
                    style={[styles.mdipuzzleIcon1, styles.mdipuzzleIconLayout]}
                    contentFit="cover"
                    source={require("../assets/mdipuzzle6.png")}
                  />
                  <Image
                    style={[styles.mdipuzzleIcon2, styles.mdipuzzleIconLayout]}
                    contentFit="cover"
                    source={require("../assets/mdipuzzle6.png")}
                  />
                  <Image
                    style={[styles.mdipuzzleIcon3, styles.mdipuzzleIconLayout]}
                    contentFit="cover"
                    source={require("../assets/mdipuzzle6.png")}
                  />
                  <Image
                    style={[styles.mdipuzzleIcon4, styles.mdipuzzleIconLayout]}
                    contentFit="cover"
                    source={require("../assets/mdipuzzle6.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Button2 text="기술 스택 추가하기" />
        </View>
      </View>
      <View style={[styles.view8, styles.viewLayout]}>
        <View style={styles.frameParent}>
          <View style={[styles.typescriptWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.text1Typo}>Typescript</Text>
          </View>
          <View style={[styles.typescriptWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.text1Typo}>Java script</Text>
          </View>
          <View style={[styles.reactWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.text1Typo}>React</Text>
          </View>
          <View style={[styles.typescriptWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.text1Typo}>HTML</Text>
          </View>
          <View style={[styles.typescriptWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.text1Typo}>CSS</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    height: 287,
    width: 372,
    left: 0,
    top: 0,
    position: "absolute",
  },
  viewLayout1: {
    width: 348,
    position: "absolute",
  },
  groupPosition: {
    height: 19,
    left: 16,
    top: 12,
    position: "absolute",
  },
  text1Typo: {
    color: Color.fontSubsub,
    fontWeight: "500",
    fontSize: FontSize.subTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  icroundIconLayout: {
    overflow: "hidden",
    height: 14,
    width: 18,
    top: 3,
    position: "absolute",
  },
  viewLayout: {
    width: 181,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  innerLayout: {
    height: 36,
    width: 332,
    position: "absolute",
  },
  mdipuzzleIconLayout: {
    width: 36,
    height: 36,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_9xs,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.semiTitle_size,
    fontWeight: "600",
    color: Color.fontSub,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    left: 8,
    top: 0,
    position: "absolute",
  },
  text1: {
    left: 0,
    top: 0,
    position: "absolute",
    color: Color.fontSubsub,
    fontWeight: "500",
    fontSize: FontSize.subTitle_size,
  },
  icroundArrowDropDownIcon: {
    left: 74,
  },
  group: {
    width: 92,
  },
  view5: {
    width: 124,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    height: 43,
    left: 0,
    top: 0,
    position: "absolute",
  },
  react: {
    left: 7,
    top: 0,
    position: "absolute",
    color: Color.fontSubsub,
    fontWeight: "500",
    fontSize: FontSize.subTitle_size,
  },
  icroundArrowDropDownIcon1: {
    left: 131,
  },
  reactParent: {
    width: 149,
  },
  view6: {
    left: 142,
    height: 43,
    top: 0,
  },
  view4: {
    height: 43,
    width: 332,
    top: 33,
    left: 8,
    position: "absolute",
  },
  view3: {
    height: 76,
    left: 0,
    top: 0,
  },
  mdipuzzleIcon: {
    left: 28,
  },
  mdipuzzleIcon1: {
    left: 88,
  },
  mdipuzzleIcon2: {
    left: 148,
  },
  mdipuzzleIcon3: {
    left: 208,
  },
  mdipuzzleIcon4: {
    left: 268,
  },
  mdipuzzleParent: {
    left: 0,
    top: 0,
  },
  inner: {
    top: 33,
    height: 36,
    left: 8,
  },
  view7: {
    top: 96,
    height: 69,
    left: 0,
  },
  view2: {
    height: 165,
    left: 0,
    top: 0,
  },
  view1: {
    top: 24,
    left: 12,
    height: 239,
  },
  view: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender_100,
  },
  typescriptWrapper: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  reactWrapper: {
    backgroundColor: Color.colorLightsteelblue,
  },
  frameParent: {
    gap: Gap.gap_7xs,
    alignSelf: "stretch",
  },
  view8: {
    top: 107,
    left: 162,
    padding: Padding.p_9xs,
  },
});

export default GroupComponent3;
