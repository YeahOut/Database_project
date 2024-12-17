import * as React from "react";
import { StyleSheet, View } from "react-native";
import Component24 from "./Component24";
import { Border, Color, Padding } from "../GlobalStyles";

const Component38 = () => {
  return (
    <View style={styles.view}>
      <Component24 rankNum="13" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    top: 768,
    left: 0,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorLavender_100,
    width: 412,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
  },
});

export default Component38;
