import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  FontFamily,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent5 = ({ frameViewFlex, frameViewHeight }) => {
  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("flex", frameViewFlex),
      ...getStyleValue("height", frameViewHeight),
    };
  }, [frameViewFlex, frameViewHeight]);

  return (
    <View style={[styles.frameWrapper, frameView5Style]}>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textFlexBox]}>메시 스코어</Text>
          <Image
            style={styles.phquestionIcon}
            contentFit="cover"
            source={require("../assets/phquestion.png")}
          />
        </View>
        <Text style={[styles.text1, styles.textFlexBox]}>320점</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.grayWhite,
  },
  text: {
    fontSize: FontSize.mainContent_size,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  phquestionIcon: {
    width: 14,
    height: 16,
    overflow: "hidden",
  },
  parent: {
    flexDirection: "row",
    gap: Gap.gap_7xs,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    alignSelf: "stretch",
  },
  frameParent: {
    gap: Gap.gap_7xs,
  },
  frameWrapper: {
    flex: 1,
    borderRadius: Border.br_lg,
    backgroundColor: Color.primaryPrimary1,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    alignSelf: "stretch",
  },
});

export default FrameComponent5;
