import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const FrameComponent7 = ({ image, prop, prop1 }) => {
  return (
    <View style={styles.top5Inner}>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.imageParent, styles.parentFlexBox]}>
          <Image style={styles.imageIcon} contentFit="cover" source={image} />
          <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
        </View>
        <Text style={[styles.text1, styles.textTypo]}>{prop1}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  imageIcon: {
    width: 35,
    height: 35,
    borderRadius: Border.br_mini,
  },
  text: {
    fontSize: FontSize.mainContent_size,
    width: 44,
  },
  imageParent: {
    flexDirection: "row",
  },
  text1: {
    fontSize: FontSize.totalTitle_size,
  },
  frameParent: {
    flex: 1,
    alignItems: "flex-end",
  },
  top5Inner: {
    backgroundColor: Color.colorDarkslateblue_400,
    width: 133,
    height: 125,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_base,
    borderRadius: Border.br_mini,
  },
});

export default FrameComponent7;
