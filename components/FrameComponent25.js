import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Button2 from "./Button2";
import {
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const FrameComponent25 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.view}>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Text style={styles.text}>사용가능 기술 스택</Text>
            <View style={[styles.view3, styles.view3FlexBox]}>
              <View style={[styles.view4, styles.view4SpaceBlock]}>
                <View style={[styles.parent, styles.parentFlexBox]}>
                  <Text style={styles.text1}>분야</Text>
                  <Image
                    style={styles.icroundArrowDropDownIcon}
                    contentFit="cover"
                    source={require("../assets/icroundarrowdropdown.png")}
                  />
                </View>
              </View>
              <Pressable
                style={[styles.pressable, styles.view4SpaceBlock]}
                onPress={() => navigation.navigate("Frame9")}
              >
                <View style={[styles.parent, styles.parentFlexBox]}>
                  <Text style={styles.text1}>기술스택</Text>
                  <Image
                    style={styles.icroundArrowDropDownIcon}
                    contentFit="cover"
                    source={require("../assets/icroundarrowdropdown.png")}
                  />
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text}>숙련도</Text>
            <View style={styles.view3FlexBox}>
              <View style={[styles.mdipuzzleParent, styles.parentFlexBox]}>
                <Image
                  style={styles.mdipuzzleIcon}
                  contentFit="cover"
                  source={require("../assets/mdipuzzle5.png")}
                />
                <Image
                  style={styles.mdipuzzleIcon}
                  contentFit="cover"
                  source={require("../assets/mdipuzzle6.png")}
                />
                <Image
                  style={styles.mdipuzzleIcon}
                  contentFit="cover"
                  source={require("../assets/mdipuzzle6.png")}
                />
                <Image
                  style={styles.mdipuzzleIcon}
                  contentFit="cover"
                  source={require("../assets/mdipuzzle6.png")}
                />
                <Image
                  style={styles.mdipuzzleIcon}
                  contentFit="cover"
                  source={require("../assets/mdipuzzle6.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Button2
          text="기술 스택 추가하기"
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
  view3FlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  view4SpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  parentFlexBox: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
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
    fontSize: FontSize.subTitle_size,
    fontWeight: "500",
    color: Color.colorDarkgray_100,
    textAlign: "center",
    fontFamily: FontFamily.semiTitle,
  },
  icroundArrowDropDownIcon: {
    width: 18,
    height: 14,
    overflow: "hidden",
  },
  parent: {
    justifyContent: "space-between",
  },
  view4: {
    width: 124,
    justifyContent: "center",
  },
  pressable: {
    width: 181,
    justifyContent: "flex-end",
  },
  view3: {
    gap: Gap.gap_md,
  },
  view2: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    gap: Gap.gap_3xs,
    alignSelf: "stretch",
  },
  mdipuzzleIcon: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  mdipuzzleParent: {
    justifyContent: "center",
    gap: Gap.gap_xl,
  },
  view1: {
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  view: {
    gap: Gap.gap_xl,
    alignSelf: "stretch",
  },
  wrapper: {
    position: "absolute",
    marginLeft: -186,
    top: 130,
    left: "50%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender_100,
    width: 372,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xl,
  },
});

export default FrameComponent25;
