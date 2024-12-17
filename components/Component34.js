import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import Component33 from "./Component33";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component34 = ({ prop, frame1192448055, frameViewMarginTop }) => {
  const frameView7Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", frameViewMarginTop),
    };
  }, [frameViewMarginTop]);

  return (
    <View style={styles.component5}>
      <View style={[styles.component5Inner, frameView7Style]}>
        <View style={styles.frameParent}>
          <View style={styles.parent}>
            <Component33 />
            <Text style={styles.text}>{prop}</Text>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={frame1192448055}
          />
        </View>
      </View>
      <Image
        style={styles.ixcancelIcon}
        contentFit="cover"
        source={require("../assets/ixcancel.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.subTitle_size,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 152,
    alignSelf: "stretch",
  },
  parent: {
    gap: Gap.gap_3xs,
    maxWidth: 252,
    flexDirection: "row",
  },
  frameChild: {
    width: 28,
    height: 29,
  },
  frameParent: {
    width: 287,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  component5Inner: {
    marginTop: -42.6,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4.2,
    elevation: 4.2,
    shadowOpacity: 1,
    borderRadius: Border.br_sm,
    backgroundColor: Color.grayWhite,
    padding: Padding.p_9xl,
    position: "absolute",
  },
  ixcancelIcon: {
    height: "18.18%",
    width: "4.3%",
    top: "12.5%",
    right: "3.49%",
    bottom: "69.32%",
    left: "92.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  component5: {
    height: 88,
    alignSelf: "stretch",
  },
});

export default Component34;
