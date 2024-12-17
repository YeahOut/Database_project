import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Component18 from "./Component18";
import { Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component19 = ({
  viewRight,
  viewLeft,
  viewMarginLeft,
  frameViewFlex,
  frameViewWidth,
  mingcutesearch2FillOverflow,
  onMingcutesearch2FillPress,
}) => {
  const view4Style = useMemo(() => {
    return {
      ...getStyleValue("right", viewRight),
      ...getStyleValue("left", viewLeft),
      ...getStyleValue("marginLeft", viewMarginLeft),
    };
  }, [viewRight, viewLeft, viewMarginLeft]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", frameViewFlex),
      ...getStyleValue("width", frameViewWidth),
    };
  }, [frameViewFlex, frameViewWidth]);

  const mingcutesearch2FillStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", mingcutesearch2FillOverflow),
    };
  }, [mingcutesearch2FillOverflow]);

  const navigation = useNavigation();

  return (
    <View style={[styles.view, styles.viewFlexBox, view4Style]}>
      <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-icon.png")}
        />
      </Pressable>
      <View style={[styles.parent, styles.viewFlexBox, frameViewStyle]}>
        <Component18 prop="메시 통합검색" />
        <Pressable
          style={[styles.mingcutesearch2Fill, mingcutesearch2FillStyle]}
          onPress={onMingcutesearch2FillPress}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mingcutesearch2fill.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  backIcon: {
    width: 22,
    height: 20,
  },
  mingcutesearch2Fill: {
    width: 28,
    height: 28,
  },
  parent: {
    flex: 1,
    justifyContent: "flex-end",
    gap: Gap.gap_5xs,
  },
  view: {
    position: "absolute",
    top: 55,
    right: 20,
    left: 20,
    height: 42,
    gap: Gap.gap_sm,
  },
});

export default Component19;
