import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Component27 from "./Component27";
import Component25 from "./Component25";
import {
  Gap,
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component28 = ({
  title = "2024 퀀텀 챌린지(Quantum Challenge)",
  userId = "goorm",
  frameViewFlex,
  frameViewWidth,
}) => {
  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("flex", frameViewFlex),
      ...getStyleValue("width", frameViewWidth),
    };
  }, [frameViewFlex, frameViewWidth]);

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("Component1")}
    >
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group5.png")}
      />
      <View style={[styles.frameParent, frameView4Style]}>
        <View style={styles.frameFlexBox}>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.quantumChallengeWrapper}>
              <Text
                style={[styles.quantumChallenge, styles.goormTypo]}
                numberOfLines={2}
              >
                {title}
              </Text>
            </View>
            <Component27 property1="Variant4" />
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <Text style={[styles.goorm, styles.goormTypo]}>{userId}</Text>
          </View>
        </View>
        <Component25
          viewNum="123"
          lsiconviewFilled={require("../assets/lsiconviewfilled1.png")}
          prop={require("../assets/1.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  goormTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  maskGroupIcon: {
    width: 88,
    height: 88,
  },
  quantumChallenge: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    color: Color.fontMain,
    overflow: "hidden",
    flex: 1,
  },
  quantumChallengeWrapper: {
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
  },
  frameContainer: {
    maxHeight: 34,
    overflow: "hidden",
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.grayGray1,
    width: 15,
    height: 15,
  },
  goorm: {
    fontSize: FontSize.subContent_size,
    fontWeight: "500",
    color: Color.fontSub,
  },
  rectangleParent: {
    gap: Gap.gap_7xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    flex: 1,
    alignSelf: "stretch",
  },
  pressable: {
    gap: Gap.gap_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default Component28;
