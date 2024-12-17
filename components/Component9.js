import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Component9 = ({ prop }) => {
  return (
    <View style={styles.view}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textLayout]}>{prop}</Text>
        <View style={styles.frameWrapper}>
          <View style={styles.frameParent}>
            <View style={[styles.mingcuteaddFillWrapper, styles.textLayout]}>
              <Image
                style={styles.mingcuteaddFillIcon}
                contentFit="cover"
                source={require("../assets/mingcuteaddfill.png")}
              />
            </View>
            <Text style={[styles.text1, styles.textTypo]}>팀원 수 추가</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 30,
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.subTitle_size,
  },
  text: {
    fontWeight: "600",
    color: Color.colorGray_100,
    display: "flex",
    width: 80,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.subTitle_size,
  },
  mingcuteaddFillIcon: {
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
  mingcuteaddFillWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue_300,
    width: 30,
    padding: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  text1: {
    fontWeight: "500",
    color: Color.colorDarkslateblue_100,
  },
  frameParent: {
    gap: Gap.gap_5xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameWrapper: {
    justifyContent: "center",
  },
  parent: {
    gap: Gap.gap_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  view: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
});

export default Component9;
