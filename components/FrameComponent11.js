import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Component22 from "./Component22";
import {
  Gap,
  FontFamily,
  Border,
  FontSize,
  Color,
  Padding,
} from "../GlobalStyles";

const FrameComponent11 = () => {
  return (
    <View
      style={[styles.fluentEmoji2ndPlaceMedalParent, styles.parentFlexBox1]}
    >
      <View style={[styles.fluentEmoji2ndPlaceMedal, styles.parentFlexBox]}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <View style={styles.parentFlexBox1}>
        <View style={styles.parentFlexBox1}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image6.png")}
          />
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>최예진</Text>
            <Component22 property1="L6" />
          </View>
        </View>
        <Text style={[styles.text1, styles.textTypo]}>470점</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox1: {
    gap: Gap.gap_5xs,
    alignItems: "center",
    justifyContent: "center",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  groupIcon: {
    width: 26,
    height: 28,
  },
  fluentEmoji2ndPlaceMedal: {
    width: 35,
    overflow: "hidden",
    justifyContent: "center",
    flexDirection: "row",
  },
  imageIcon: {
    borderRadius: Border.br_lg,
    width: 40,
    height: 40,
  },
  text: {
    fontSize: FontSize.size_mini,
    color: Color.fontMain,
  },
  parent: {
    gap: Gap.gap_7xs,
  },
  text1: {
    fontSize: FontSize.semiTitle_size,
    color: Color.fontSubsub,
  },
  fluentEmoji2ndPlaceMedalParent: {
    flex: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue_100,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_xs,
  },
});

export default FrameComponent11;
