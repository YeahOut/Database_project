import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Component22 = ({ property1 = "L6" }) => {
  const getContainerStyle = () => {
    if (property1 === "L5") return styles.containerVar;
    if (property1 === "L4") return styles.containerVar1;
    if (property1 === "L3") return styles.containerVar2;
  };

  return (
    <View style={[styles.root, getContainerStyle(), styles.mFlexBox]}>
      <Text style={[styles.m, styles.mFlexBox]}>m</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerVar: {
    backgroundColor: "#ffc98f",
  },
  containerVar1: {
    backgroundColor: "#ffe97a",
  },
  containerVar2: {
    backgroundColor: Color.colorDarkseagreen,
  },
  mFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  m: {
    fontSize: FontSize.detail_size,
    fontFamily: FontFamily.rubikMonoOneRegular,
    color: Color.grayWhite,
    textAlign: "center",
    display: "flex",
    width: 9,
    height: 9,
  },
  root: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightcoral,
    width: 17,
    height: 17,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_4xs,
  },
});

export default Component22;
