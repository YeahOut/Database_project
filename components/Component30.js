import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Component30 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/group-1192447833.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  child: {
    width: 120,
    height: 120,
  },
  view: {
    position: "absolute",
    height: "92.31%",
    width: "100%",
    top: "7.69%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Component30;
