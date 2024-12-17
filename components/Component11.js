import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const Component11 = ({ prop }) => {
  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <View style={styles.tablerpuzzleLayout}>
        <Image
          style={[styles.tablerpuzzleFilledIcon, styles.tablerpuzzleLayout]}
          contentFit="cover"
          source={require("../assets/tablerpuzzlefilled.png")}
        />
      </View>
      <View style={styles.viewFlexBox}>
        <Text style={styles.text}>{prop}</Text>
      </View>
      <Image
        style={styles.mingcutecheckFillIcon}
        contentFit="cover"
        source={require("../assets/mingcutecheckfill3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  tablerpuzzleLayout: {
    height: 46,
    width: 48,
  },
  tablerpuzzleFilledIcon: {
    top: 0,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.totalTitle_size,
    fontWeight: "700",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDimgray_600,
    textAlign: "left",
  },
  mingcutecheckFillIcon: {
    width: 24,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  view: {
    top: 55,
    left: 20,
    width: 372,
    height: 42,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    gap: Gap.gap_5xs,
    position: "absolute",
  },
});

export default Component11;
