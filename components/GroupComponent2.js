import * as React from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border } from "../GlobalStyles";

const GroupComponent2 = ({ property1 = "Default", ellipse1 }) => {
  const getRectangleStyle = () => {
    if (property1 === "New value") return styles.rectangleVar;
  };
  const getEllipseIconStyle = () => {
    if (property1 === "New value") return styles.ellipseIconVar;
  };

  return (
    <View style={styles.root}>
      <View style={[styles.instanceChild, getRectangleStyle()]} />
      <Image
        style={[styles.instanceItem, getEllipseIconStyle()]}
        contentFit="cover"
        source={ellipse1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleVar: {
    backgroundColor: Color.primaryPrimary1,
  },
  ellipseIconVar: {
    top: "15%",
    right: "9.57%",
    bottom: "16.67%",
    left: "55.32%",
  },
  instanceChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.grayGray1,
    position: "absolute",
  },
  instanceItem: {
    height: "68.33%",
    width: "35.11%",
    top: "15.83%",
    right: "55.53%",
    bottom: "15.83%",
    left: "9.36%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  root: {
    width: 47,
    height: 24,
  },
});

export default GroupComponent2;
