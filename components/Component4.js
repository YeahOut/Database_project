import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Component4 = () => {
  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <View style={[styles.yymmParent, styles.viewFlexBox]}>
        <Text style={styles.yymm}>YY/MM</Text>
        <Image
          style={styles.mingcutecalendarFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutecalendarfill.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  yymm: {
    fontSize: FontSize.subTitle_size,
    fontWeight: "500",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  mingcutecalendarFillIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  yymmParent: {
    flex: 1,
    justifyContent: "space-between",
  },
  view: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 137,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
});

export default Component4;
