import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border } from "../GlobalStyles";

const Component43 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.view1} />
      <View style={styles.groupParent}>
        <View style={styles.view3Position}>
          <View style={styles.view3Position}>
            <View style={styles.view3Position}>
              <View style={[styles.view3, styles.view3Position]} />
            </View>
          </View>
        </View>
        <View
          style={[styles.tablerpuzzleFilledWrapper, styles.tablerpuzzleLayout]}
        >
          <Image
            style={[styles.tablerpuzzleFilledIcon, styles.tablerpuzzleLayout]}
            contentFit="cover"
            source={require("../assets/tablerpuzzlefilled2.png")}
          />
        </View>
      </View>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view3Position: {
    width: 120,
    height: 120,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tablerpuzzleLayout: {
    height: 117,
    width: 121,
    top: 0,
    position: "absolute",
  },
  view1: {
    top: 5,
    left: 1,
    backgroundColor: Color.grayGray1,
    width: 115,
    height: 115,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  view3: {
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_21xl,
  },
  tablerpuzzleFilledIcon: {
    overflow: "hidden",
    left: 0,
    width: 121,
  },
  tablerpuzzleFilledWrapper: {
    left: 8,
  },
  groupParent: {
    height: 120,
    top: 0,
    left: 0,
    width: 128,
    position: "absolute",
  },
  icon: {
    top: 89,
    left: 92,
    width: 35,
    height: 35,
    position: "absolute",
  },
  view: {
    top: 152,
    left: 142,
    height: 123,
    width: 128,
    position: "absolute",
  },
});

export default Component43;
