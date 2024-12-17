import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import Default from "./Default";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component16 = ({ property1 = "Default", viewWidth, viewHeight }) => {
  const view3Style = useMemo(() => {
    return {
      ...getStyleValue("width", viewWidth),
      ...getStyleValue("height", viewHeight),
    };
  }, [viewWidth, viewHeight]);

  const getContainer5Style = () => {
    if (property1 === "Variant2") return styles.container5Var;
  };

  return (
    <View style={[styles.root, getContainer5Style(), view3Style]}>
      <Default property1="Default" prop="모집 중" />
    </View>
  );
};

const styles = StyleSheet.create({
  container5Var: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.grayWhite,
  },
  root: {
    flexDirection: "row",
  },
});

export default Component16;
