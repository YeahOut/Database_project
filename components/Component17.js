import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Component16 from "./Component16";
import {
  Gap,
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const Component17 = ({
  title = "KPR 대학생 PR 아이디어 제22회 공모전 팀원 모집!!",
  userId = "김예나",
  maskGroup,
  image,
  prop1,
  prop2,
  prop3,
}) => {
  return (
    <View style={styles.view}>
      <View style={styles.maskGroupParent}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={maskGroup}
        />
        <View style={[styles.frameParent, styles.view1FlexBox1]}>
          <View style={styles.frameFlexBox}>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={styles.quantumChallengeWrapper}>
                <Text
                  style={[styles.quantumChallenge, styles.goormTypo]}
                  numberOfLines={2}
                >
                  {title}
                </Text>
              </View>
              <Component16 property1="Default" />
            </View>
            <View style={styles.imageParent}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={image}
              />
              <Text style={[styles.goorm, styles.goormTypo]}>{userId}</Text>
            </View>
          </View>
          <View style={[styles.view1, styles.view1FlexBox]}>
            <View style={[styles.parent, styles.view1FlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>{prop1}</Text>
              <Text style={[styles.text1, styles.textTypo]}>·</Text>
              <Text style={[styles.text, styles.textTypo]}>{prop2}</Text>
            </View>
            <Image style={styles.icon} contentFit="cover" source={prop3} />
          </View>
        </View>
      </View>
      <View style={styles.child} />
    </View>
  );
};

const styles = StyleSheet.create({
  view1FlexBox1: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  frameFlexBox: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  goormTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  view1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    color: Color.fontSubsub,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  maskGroupIcon: {
    width: 88,
    height: 88,
  },
  quantumChallenge: {
    fontSize: FontSize.subTitle_size,
    fontWeight: "600",
    color: Color.fontMain,
    overflow: "hidden",
    flex: 1,
  },
  quantumChallengeWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  frameContainer: {
    maxHeight: 34,
    flexDirection: "row",
  },
  imageIcon: {
    borderRadius: Border.br_7xs,
    width: 15,
    height: 15,
  },
  goorm: {
    fontSize: FontSize.subContent_size,
    color: Color.fontSub,
    fontWeight: "500",
  },
  imageParent: {
    gap: Gap.gap_7xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
  },
  text1: {
    fontSize: FontSize.mainContent_size,
    fontWeight: "700",
  },
  parent: {
    gap: Gap.gap_7xs,
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  view1: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  frameParent: {
    paddingVertical: Padding.p_11xs,
    flex: 1,
    paddingHorizontal: 0,
  },
  maskGroupParent: {
    gap: Gap.gap_3xs,
    flexDirection: "row",
    height: 88,
    alignSelf: "stretch",
  },
  child: {
    borderStyle: "solid",
    borderColor: Color.grayGray1,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  view: {
    paddingVertical: Padding.p_9xs,
    gap: Gap.gap_lg,
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
});

export default Component17;
