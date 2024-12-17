import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Component22 from "./Component22";
import { FontFamily, Border, FontSize, Color, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component23 = ({
  userId = "이서연",
  score = "398점",
  image,
  frameViewWidth,
}) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
    };
  }, [frameViewWidth]);

  return (
    <View style={[styles.frameParent, styles.parentFlexBox]}>
      <View style={[styles.imageParent, styles.parentFlexBox, frameView2Style]}>
        <Image style={styles.imageIcon} contentFit="cover" source={image} />
        <View style={[styles.goorm12345Parent, styles.parentFlexBox]}>
          <Text style={[styles.goorm12345, styles.textTypo]}>{userId}</Text>
          <Component22 property1="L6" />
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo]}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  imageIcon: {
    borderRadius: Border.br_xl,
    width: 46,
    height: 46,
  },
  goorm12345: {
    fontSize: FontSize.semiTitle_size,
    color: Color.fontMain,
  },
  goorm12345Parent: {
    gap: Gap.gap_7xs,
  },
  imageParent: {
    width: 190,
    gap: Gap.gap_sm,
  },
  text: {
    fontSize: FontSize.size_xl,
    color: Color.fontSubsub,
  },
  frameParent: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default Component23;
