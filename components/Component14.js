import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Border,
  Color,
  FontSize,
  FontFamily,
  Gap,
  Padding,
} from "../GlobalStyles";

const Component14 = ({ typescript }) => {
  return (
    <View style={styles.view}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.ixcancelIcon}
          contentFit="cover"
          source={require("../assets/ixcancel.png")}
        />
      </View>
      <View style={[styles.view1, styles.viewFlexBox]}>
        <View style={[styles.view2, styles.viewFlexBox]}>
          <Image
            style={styles.skillIconstypescript}
            contentFit="cover"
            source={require("../assets/skilliconstypescript.png")}
          />
          <View style={styles.typescriptLayout}>
            <Text style={[styles.typescript, styles.typescriptLayout]}>
              {typescript}
            </Text>
          </View>
        </View>
        <View style={styles.view3}>
          <Image
            style={[styles.mdipuzzleIcon, styles.mdipuzzleIconLayout]}
            contentFit="cover"
            source={require("../assets/mdipuzzle.png")}
          />
          <Image
            style={[styles.mdipuzzleIcon1, styles.mdipuzzleIconLayout]}
            contentFit="cover"
            source={require("../assets/mdipuzzle1.png")}
          />
          <Image
            style={[styles.mdipuzzleIcon, styles.mdipuzzleIconLayout]}
            contentFit="cover"
            source={require("../assets/mdipuzzle2.png")}
          />
          <Image
            style={[styles.mdipuzzleIcon1, styles.mdipuzzleIconLayout]}
            contentFit="cover"
            source={require("../assets/mdipuzzle3.png")}
          />
          <Image
            style={[styles.mdipuzzleIcon, styles.mdipuzzleIconLayout]}
            contentFit="cover"
            source={require("../assets/mdipuzzle4.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 88,
    width: 372,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  viewFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  typescriptLayout: {
    height: 26,
    width: 87,
  },
  mdipuzzleIconLayout: {
    height: 29,
    overflow: "hidden",
  },
  groupChild: {
    marginLeft: -186,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4.2,
    elevation: 4.2,
    shadowOpacity: 1,
    borderRadius: Border.br_sm,
    backgroundColor: Color.grayWhite,
  },
  ixcancelIcon: {
    top: 11,
    left: 342,
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -185.5,
    zIndex: 0,
  },
  skillIconstypescript: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  typescript: {
    left: 0,
    fontSize: FontSize.subTitle_size,
    fontWeight: "700",
    fontFamily: FontFamily.semiTitle,
    color: Color.fontSubsub,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    top: 0,
    width: 87,
    position: "absolute",
  },
  view2: {
    gap: Gap.gap_3xs,
  },
  mdipuzzleIcon: {
    width: 29,
  },
  mdipuzzleIcon1: {
    width: 28,
  },
  view3: {
    gap: Gap.gap_7xs,
    alignItems: "center",
    flexDirection: "row",
  },
  view1: {
    gap: Gap.gap_lg,
    zIndex: 1,
  },
  view: {
    alignSelf: "stretch",
    padding: Padding.p_9xl,
    gap: Gap.gap_4xs,
  },
});

export default Component14;
