import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent13 = ({
  ellipse2,
  ellipse3,
  ellipse4,
  frameViewWidth,
  frameViewAlignSelf,
}) => {
  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("alignSelf", frameViewAlignSelf),
    };
  }, [frameViewWidth, frameViewAlignSelf]);

  return (
    <View style={[styles.ellipseParent, frameView3Style]}>
      <Image
        style={styles.instanceChild}
        contentFit="cover"
        source={ellipse2}
      />
      <Image style={styles.instanceItem} contentFit="cover" source={ellipse3} />
      <Image style={styles.instanceItem} contentFit="cover" source={ellipse4} />
    </View>
  );
};

const styles = StyleSheet.create({
  instanceChild: {
    width: 9,
    height: 9,
  },
  instanceItem: {
    width: 7,
    height: 7,
  },
  ellipseParent: {
    width: 372,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_6xs,
  },
});

export default FrameComponent13;
