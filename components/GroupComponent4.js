import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Gap,
  Padding,
} from "../GlobalStyles";

const GroupComponent4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupChildPosition}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={[styles.view, styles.viewFlexBox]}>
        <View style={[styles.backIconParent, styles.viewFlexBox]}>
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
          <View style={[styles.view1, styles.viewFlexBox]}>
            <Image
              style={styles.child}
              contentFit="cover"
              source={require("../assets/rectangle-142.png")}
            />
            <Text style={styles.text} numberOfLines={1}>
              박이슬
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.inner}
          onPress={() => navigation.navigate("Component")}
        >
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.groupInner, styles.groupLayout]} />
            <View style={[styles.rectangleView, styles.groupLayout]} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 107,
    width: 412,
    left: 0,
    top: 0,
    position: "absolute",
  },
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupLayout: {
    height: 4,
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_mini,
    width: 21,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.grayWhite,
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
  child: {
    borderRadius: Border.br_xl,
    width: 32,
    height: 36,
  },
  text: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDimgray_600,
    textAlign: "left",
    width: 249,
    overflow: "hidden",
  },
  view1: {
    flex: 1,
    gap: Gap.gap_3xs,
  },
  backIconParent: {
    alignSelf: "stretch",
    width: 335,
    gap: Gap.gap_sm,
  },
  groupItem: {
    top: 0,
    height: 4,
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_mini,
  },
  groupInner: {
    top: 7,
  },
  rectangleView: {
    top: 15,
  },
  rectangleGroup: {
    height: 18,
    width: 21,
  },
  inner: {
    padding: Padding.p_9xs,
  },
  view: {
    top: 55,
    left: 16,
    width: 380,
    height: 42,
    justifyContent: "space-between",
    position: "absolute",
    flexDirection: "row",
  },
});

export default GroupComponent4;
