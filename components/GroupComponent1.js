import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent1 = ({
  prop,
  groupViewTop,
  textMarginLeft,
  textTop,
  frameViewTop,
  textTop1,
  textTop2,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
    };
  }, [groupViewTop]);

  const text8Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", textMarginLeft),
      ...getStyleValue("top", textTop),
    };
  }, [textMarginLeft, textTop]);

  const frameView8Style = useMemo(() => {
    return {
      ...getStyleValue("top", frameViewTop),
    };
  }, [frameViewTop]);

  const text9Style = useMemo(() => {
    return {
      ...getStyleValue("top", textTop1),
    };
  }, [textTop1]);

  const text10Style = useMemo(() => {
    return {
      ...getStyleValue("top", textTop2),
    };
  }, [textTop2]);

  return (
    <View
      style={[
        styles.rectangleParent,
        styles.groupChildPosition,
        groupViewStyle,
      ]}
    >
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Text style={[styles.text, text8Style]}>{prop}</Text>
      <View
        style={[
          styles.frameWrapper,
          styles.frameWrapperFlexBox,
          frameView8Style,
        ]}
      >
        <View style={[styles.mdipuzzleParent, styles.frameWrapperFlexBox]}>
          <Image
            style={styles.mdipuzzleIcon}
            contentFit="cover"
            source={require("../assets/mdipuzzle6.png")}
          />
          <Image
            style={styles.mdipuzzleIcon}
            contentFit="cover"
            source={require("../assets/mdipuzzle6.png")}
          />
          <Image
            style={styles.mdipuzzleIcon}
            contentFit="cover"
            source={require("../assets/mdipuzzle6.png")}
          />
          <Image
            style={styles.mdipuzzleIcon}
            contentFit="cover"
            source={require("../assets/mdipuzzle6.png")}
          />
          <Image
            style={styles.mdipuzzleIcon}
            contentFit="cover"
            source={require("../assets/mdipuzzle17.png")}
          />
        </View>
      </View>
      <Text style={[styles.text1, styles.textTypo, text9Style]}>1</Text>
      <Text style={[styles.text2, styles.textTypo, text10Style]}>5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 97,
    width: 372,
    left: "50%",
    marginLeft: -186,
    position: "absolute",
  },
  frameWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    color: Color.colorBlack,
    top: 51,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender_100,
  },
  text: {
    marginLeft: -19,
    top: 11,
    color: Color.fontSubsub,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    left: "50%",
    position: "absolute",
  },
  mdipuzzleIcon: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  mdipuzzleParent: {
    gap: Gap.gap_xl,
  },
  frameWrapper: {
    top: 42,
    left: 48,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    left: 23,
  },
  text2: {
    left: 344,
  },
  rectangleParent: {
    top: 380,
  },
});

export default GroupComponent1;
