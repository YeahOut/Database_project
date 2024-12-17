import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  FontFamily,
  FontSize,
  Border,
  Color,
  Gap,
  Padding,
} from "../GlobalStyles";

const Component10 = ({ prop, yeahOuts }) => {
  return (
    <View style={styles.view}>
      <View style={styles.parent}>
        <Text style={styles.text}>{prop}</Text>
        <View style={styles.frameParent}>
          <View style={[styles.rectangleParent, styles.rectangleFlexBox]}>
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/rectangle-141.png")}
            />
            <View style={styles.rectangleFlexBox}>
              <Text style={[styles.yeahOuts, styles.text1Typo]}>
                {yeahOuts}
              </Text>
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleFlexBox]}>
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={styles.rectangleFlexBox}>
              <Text style={[styles.text1, styles.text1Typo]}>@모집_중</Text>
            </View>
          </View>
        </View>
        <View style={styles.mingcuteaddFill} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1Typo: {
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.subTitle_size,
  },
  frameLayout: {
    width: 30,
    borderRadius: Border.br_xl,
    height: 30,
  },
  text: {
    fontWeight: "600",
    color: Color.colorGray_100,
    display: "flex",
    width: 80,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.subTitle_size,
    alignItems: "center",
  },
  yeahOuts: {
    color: Color.fontMain,
  },
  rectangleParent: {
    gap: Gap.gap_5xs,
  },
  frameItem: {
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  text1: {
    color: Color.colorDarkgray_100,
  },
  rectangleGroup: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  frameParent: {
    justifyContent: "center",
    gap: Gap.gap_5xs,
  },
  mingcuteaddFill: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  parent: {
    gap: Gap.gap_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  view: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayInput,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
});

export default Component10;
