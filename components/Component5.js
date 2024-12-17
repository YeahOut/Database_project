import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import {
  Gap,
  Padding,
  FontFamily,
  FontSize,
  Color,
  Border,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component5 = ({ vector, vector1, textColor, textColor1 }) => {
  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor1),
    };
  }, [textColor1]);

  return (
    <View style={styles.view}>
      <View style={[styles.majesticonshome, styles.majesticonshomeFlexBox]}>
        <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
        <Text style={[styles.text, styles.textTypo, text1Style]}>홈</Text>
      </View>
      <View style={[styles.majesticonshome, styles.majesticonshomeFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>랭킹</Text>
      </View>
      <View style={[styles.iconParkSolidlike, styles.majesticonshomeFlexBox]}>
        <Image style={styles.vectorIcon2} contentFit="cover" source={vector1} />
        <Text style={[styles.text2, styles.textTypo, text2Style]}>저장</Text>
      </View>
      <View style={[styles.majesticonshome, styles.majesticonshomeFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>채팅</Text>
      </View>
      <View style={[styles.majesticonshome, styles.majesticonshomeFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>MY</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  majesticonshomeFlexBox: {
    gap: Gap.gap_5xs,
    padding: Padding.p_9xs,
    justifyContent: "center",
    overflow: "hidden",
    height: 56,
    width: 56,
    alignItems: "center",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "500",
    fontSize: FontSize.subContent_size,
  },
  vectorIcon: {
    height: 20,
    width: 20,
  },
  text: {
    color: Color.colorDarkslateblue_100,
  },
  majesticonshome: {
    borderRadius: Border.br_45xl,
  },
  text1: {
    color: Color.colorDarkgray_200,
  },
  vectorIcon2: {
    height: 17,
    width: 20,
  },
  text2: {
    color: Color.grayGray3,
  },
  iconParkSolidlike: {
    borderRadius: Border.br_11xl,
  },
  view: {
    position: "absolute",
    right: 0,
    bottom: -2,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.grayWhite,
    height: 77,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
  },
});

export default Component5;
