import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component15 = ({
  viewBackgroundColor,
  viewBorderColor,
  viewBackgroundColor1,
  viewBorderColor1,
}) => {
  const view1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", viewBackgroundColor),
      ...getStyleValue("borderColor", viewBorderColor),
    };
  }, [viewBackgroundColor, viewBorderColor]);

  const view2Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", viewBackgroundColor1),
      ...getStyleValue("borderColor", viewBorderColor1),
    };
  }, [viewBackgroundColor1, viewBorderColor1]);

  return (
    <View style={styles.component4}>
      <View style={[styles.view, view1Style]}>
        <Text style={[styles.text, styles.textTypo]}>📝 기획</Text>
      </View>
      <View style={[styles.view1, styles.viewPosition, view2Style]}>
        <Text style={[styles.text1, styles.textTypo]}>🎨 디자인</Text>
      </View>
      <View style={[styles.view2, styles.viewPosition]}>
        <Text style={[styles.text, styles.textTypo]}>💻 프론트엔드</Text>
      </View>
      <View style={[styles.view3, styles.viewPosition]}>
        <Text style={[styles.text, styles.textTypo]}>🖥️ 백엔드</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  viewPosition: {
    left: "50%",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    top: "50%",
    marginTop: -14,
    position: "absolute",
  },
  text: {
    color: Color.fontSubsub,
  },
  view: {
    width: "18.98%",
    right: "81.02%",
    left: "0%",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    top: "50%",
    marginTop: -14,
    position: "absolute",
    borderColor: Color.fontSubsub,
    backgroundColor: Color.grayInput,
  },
  text1: {
    color: Color.colorGray_400,
  },
  view1: {
    marginLeft: -95,
    backgroundColor: Color.colorGold_400,
    borderColor: Color.colorDarkkhaki,
  },
  view2: {
    marginLeft: -13,
    borderColor: Color.fontSubsub,
    backgroundColor: Color.grayInput,
    left: "50%",
  },
  view3: {
    marginLeft: 92,
    borderColor: Color.fontSubsub,
    backgroundColor: Color.grayInput,
    left: "50%",
  },
  component4: {
    width: 332,
    height: 26,
  },
});

export default Component15;
