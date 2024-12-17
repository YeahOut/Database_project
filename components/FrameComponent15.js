import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Gap } from "../GlobalStyles";

const FrameComponent15 = ({
  mdipuzzle,
  mdipuzzle1,
  mdipuzzle2,
  mdipuzzle3,
  mdipuzzle4,
}) => {
  return (
    <View style={styles.mdipuzzleParent}>
      <Image
        style={[styles.mdipuzzleIcon, styles.mdipuzzleIconLayout]}
        contentFit="cover"
        source={mdipuzzle}
      />
      <Image
        style={[styles.mdipuzzleIcon1, styles.mdipuzzleIconLayout]}
        contentFit="cover"
        source={mdipuzzle1}
      />
      <Image
        style={[styles.mdipuzzleIcon, styles.mdipuzzleIconLayout]}
        contentFit="cover"
        source={mdipuzzle2}
      />
      <Image
        style={[styles.mdipuzzleIcon1, styles.mdipuzzleIconLayout]}
        contentFit="cover"
        source={mdipuzzle3}
      />
      <Image
        style={[styles.mdipuzzleIcon, styles.mdipuzzleIconLayout]}
        contentFit="cover"
        source={mdipuzzle4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mdipuzzleIconLayout: {
    overflow: "hidden",
    height: 23,
  },
  mdipuzzleIcon: {
    width: 25,
  },
  mdipuzzleIcon1: {
    width: 24,
  },
  mdipuzzleParent: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_6xs,
  },
});

export default FrameComponent15;
