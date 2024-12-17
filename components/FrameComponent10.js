import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Button3 from "./Button3";
import { Gap, Padding, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent10 = ({
  prop,
  frameViewBottom,
  frameViewWidth,
  frameViewRight,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("bottom", frameViewBottom),
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("right", frameViewRight),
    };
  }, [frameViewBottom, frameViewWidth, frameViewRight]);

  const navigation = useNavigation();

  return (
    <View style={[styles.frameParent, frameView1Style]}>
      <View style={[styles.buttonParent, styles.wrapperFlexBox]}>
        <Button3
          text="1:1 문의하기"
          onButtonPress={() => navigation.navigate("Chat")}
        />
        <Button3
          text="팀 지원하기"
          buttonFlex={1}
          buttonBackgroundColor="#2a4ba0"
          buttonPosition="unset"
          buttonRight="unset"
          buttonBottom="unset"
          buttonLeft="unset"
          buttonTop="unset"
          buttonWidth="unset"
          buttonHeight={50}
          buttonAlignSelf="unset"
          textColor="#fff"
          textFontSize={16}
          onButtonPress={() => navigation.navigate("Apply1")}
        />
      </View>
      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
        <Image style={styles.icon} contentFit="cover" source={prop} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonParent: {
    flex: 1,
    alignItems: "flex-end",
    gap: Gap.gap_5xs,
  },
  icon: {
    width: 34,
    height: 36,
    overflow: "hidden",
  },
  wrapper: {
    width: 48,
    height: 50,
    padding: Padding.p_9xs,
    overflow: "hidden",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    bottom: -1,
    left: 0,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    width: 412,
    height: 75,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default FrameComponent10;
