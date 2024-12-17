import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const Component25 = ({ viewNum = "130", lsiconviewFilled, prop }) => {
  return (
    <View style={[styles.frameParent, styles.parentFlexBox]}>
      <View style={[styles.lsiconviewFilledParent, styles.parentFlexBox]}>
        <Image
          style={styles.lsiconviewFilled}
          contentFit="cover"
          source={lsiconviewFilled}
        />
        <Text style={styles.text}>{viewNum}</Text>
      </View>
      <Image style={styles.icon} contentFit="cover" source={prop} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  lsiconviewFilled: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.detail_size,
    fontWeight: "600",
    fontFamily: FontFamily.semiTitle,
    color: Color.fontSubsub,
    textAlign: "left",
  },
  lsiconviewFilledParent: {
    gap: Gap.gap_7xs,
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
});

export default Component25;
