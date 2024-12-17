import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Default = ({
  property1 = "Default",
  prop,
  defaultAlignSelf,
  defaultFlex,
  textFontSize,
}) => {
  const defaultStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", defaultAlignSelf),
      ...getStyleValue("flex", defaultFlex),
    };
  }, [defaultAlignSelf, defaultFlex]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textFontSize),
    };
  }, [textFontSize]);

  const getDefaultContainerStyle = () => {
    if (property1 === "Variant2") return styles.defaultContainerVar;
    if (property1 === "Variant3") return styles.defaultContainerVar1;
    if (property1 === "Variant4") return styles.defaultContainerVar2;
  };
  const getText6Style = () => {
    if (property1 === "Variant2") return styles.text6Var;
    if (property1 === "Variant3") return styles.text6Var1;
    if (property1 === "Variant4") return styles.text6Var2;
  };

  return (
    <View style={[styles.root, getDefaultContainerStyle(), defaultStyle]}>
      <Text style={[styles.text, getText6Style(), textStyle]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultContainerVar: {
    backgroundColor: Color.colorLightgoldenrodyellow,
  },
  defaultContainerVar1: {
    backgroundColor: Color.colorAliceblue_200,
  },
  defaultContainerVar2: {
    backgroundColor: Color.colorLavenderblush,
  },
  text6Var: {
    color: Color.colorGoldenrod,
  },
  text6Var1: {
    color: Color.colorRoyalblue,
  },
  text6Var2: {
    color: Color.colorMediumorchid,
  },
  text: {
    fontSize: FontSize.subContent_size,
    fontWeight: "700",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorForestgreen,
    textAlign: "left",
  },
  root: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorMintcream,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_9xs,
  },
});

export default Default;
