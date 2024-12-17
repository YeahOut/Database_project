import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent9 = ({ prop, prop1, pM }) => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frameParent}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.text, styles.pmTypo]}>{prop}</Text>
        </View>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.text, styles.pmTypo]}>{prop1}</Text>
        </View>
      </View>
      <View style={[styles.pmWrapper, styles.buttonFlexBox]}>
        <Text style={[styles.pm, styles.pmTypo]}>{pM}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pmTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  text: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    color: Color.grayWhite,
    maxWidth: 202,
  },
  button: {
    borderTopLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorCornflowerblue,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    maxWidth: 269,
  },
  frameParent: {
    alignItems: "flex-end",
    gap: Gap.gap_5xs,
  },
  pm: {
    fontSize: FontSize.subContent_size,
    fontWeight: "500",
    color: Color.colorGray_300,
  },
  pmWrapper: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
  },
});

export default FrameComponent9;
