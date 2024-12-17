import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component21 = ({
  property = "Default",
  text = "교내",
  showView,
  keywordFontWeight,
  keywordFontFamily,
}) => {
  const keywordStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", keywordFontWeight),
      ...getStyleValue("fontFamily", keywordFontFamily),
    };
  }, [keywordFontWeight, keywordFontFamily]);

  const getContainer6Style = () => {
    if (property === "New value") return styles.container6Var;
  };
  const getKeywordText4Style = () => {
    if (property === "New value") return styles.keywordText4Var;
  };

  return (
    showView && (
      <View style={[styles.root, getContainer6Style()]}>
        <Text style={[styles.keyword, getKeywordText4Style(), keywordStyle]}>
          {text}
        </Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container6Var: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender_100,
    borderStyle: "solid",
    borderColor: Color.colorSteelblue_200,
    borderWidth: 2,
  },
  keywordText4Var: {
    color: Color.colorSteelblue_200,
  },
  keyword: {
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.semiTitle,
    color: Color.fontSubsub,
    textAlign: "left",
  },
  root: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayInput,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_8xs,
  },
});

export default Component21;
