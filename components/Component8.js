import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Component8 = () => {
  return (
    <View style={styles.view}>
      <Text style={[styles.text, styles.textTypo]}>
        <Text style={styles.text1}>{`모집 마감 일자 `}</Text>
        <Text style={styles.text2}>*</Text>
      </Text>
      <View style={[styles.view1, styles.view1FlexBox]}>
        <View style={[styles.yymmddParent, styles.view1FlexBox]}>
          <Text style={[styles.yymmdd, styles.textTypo]}>YY/MM/DD</Text>
          <Image
            style={styles.mingcutecalendarFillIcon}
            contentFit="cover"
            source={require("../assets/mingcutecalendarfill.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  view1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    color: Color.fontSub,
  },
  text2: {
    color: Color.colorDarkslateblue_200,
  },
  text: {
    fontSize: FontSize.semiTitle_size,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  yymmdd: {
    fontSize: FontSize.subTitle_size,
    fontWeight: "500",
    color: Color.colorDarkgray_100,
  },
  mingcutecalendarFillIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  yymmddParent: {
    flex: 1,
    justifyContent: "space-between",
  },
  view1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
  view: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
});

export default Component8;
