import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Component30 from "./Component30";

const Component31 = () => {
  return (
    <View style={styles.component1}>
      <Component30 />
      <Image
        style={styles.component1Child}
        contentFit="cover"
        source={require("../assets/frame-1192448014.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component1Child: {
    position: "absolute",
    height: "21.08%",
    width: "21.67%",
    top: "0%",
    right: "0%",
    bottom: "78.92%",
    left: "78.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component1: {
    width: 120,
    height: 130,
  },
});

export default Component31;
