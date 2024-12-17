import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Component32 = ({ property = "Default", text = "전국" }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.keyword}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  keyword: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.semiTitle,
    color: Color.fontSubsub,
    textAlign: "left",
  },
  view: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayInput,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_8xs,
  },
});

export default Component32;
