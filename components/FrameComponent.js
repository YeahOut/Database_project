import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={[styles.rectangleParent, styles.rectangleParentFlexBox]}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <View style={styles.rectangleParentFlexBox}>
        <Text style={styles.goorm12345}>goorm12345</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    width: 46,
    height: 46,
  },
  goorm12345: {
    fontSize: FontSize.semiTitle_size,
    fontWeight: "600",
    fontFamily: FontFamily.semiTitle,
    color: Color.fontMain,
    textAlign: "left",
  },
  rectangleParent: {
    alignSelf: "stretch",
    gap: Gap.gap_sm,
  },
});

export default FrameComponent;
