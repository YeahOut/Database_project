import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Component23 from "./Component23";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const Component24 = ({ rankNum = "4" }) => {
  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <View style={[styles.fluentEmoji3rdPlaceMedal, styles.viewFlexBox]}>
        <Text style={styles.text}>{rankNum}</Text>
      </View>
      <Component23
        userId="이서연"
        score="398점"
        image={require("../assets/image9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.semiTitle_size,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray_100,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 35,
    alignItems: "center",
  },
  fluentEmoji3rdPlaceMedal: {
    overflow: "hidden",
    alignItems: "center",
  },
  view: {
    alignSelf: "stretch",
    padding: Padding.p_5xs,
    gap: Gap.gap_sm,
    alignItems: "center",
  },
});

export default Component24;
