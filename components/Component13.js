import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component13 = ({
  prop,
  mingcutecheckFill,
  showBackIcon,
  showMingcutecheckFillIcon,
  viewWidth,
  viewJustifyContent,
  viewLeft,
  viewTop,
  viewPosition,
  mingcutecheckFillIconOverflow,
  onMingcutecheckFillPress,
}) => {
  const viewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", viewWidth),
      ...getStyleValue("justifyContent", viewJustifyContent),
      ...getStyleValue("left", viewLeft),
      ...getStyleValue("top", viewTop),
      ...getStyleValue("position", viewPosition),
    };
  }, [viewWidth, viewJustifyContent, viewLeft, viewTop, viewPosition]);

  const mingcutecheckFillIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", mingcutecheckFillIconOverflow),
    };
  }, [mingcutecheckFillIconOverflow]);

  const navigation = useNavigation();

  return (
    <View style={[styles.view, styles.viewFlexBox, viewStyle]}>
      <View style={[styles.backIconParent, styles.viewFlexBox]}>
        {showBackIcon && (
          <Pressable
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/back-icon.png")}
            />
          </Pressable>
        )}
        <Text style={styles.text}>{prop}</Text>
      </View>
      {showMingcutecheckFillIcon && (
        <Image
          style={[styles.mingcutecheckFillIcon, mingcutecheckFillIconStyle]}
          contentFit="cover"
          source={mingcutecheckFill}
          onPress={onMingcutecheckFillPress}
        />
      )}
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
  text: {
    fontSize: FontSize.title_size,
    fontWeight: "700",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDimgray_600,
    textAlign: "left",
  },
  backIconParent: {
    gap: Gap.gap_sm,
  },
  mingcutecheckFillIcon: {
    width: 24,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  view: {
    position: "absolute",
    top: 55,
    left: 20,
    width: 372,
    height: 42,
    gap: Gap.gap_2xl,
  },
});

export default Component13;
