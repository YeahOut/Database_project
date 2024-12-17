import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  Color,
  FontFamily,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const FrameComponent31 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.careerParent}
      onPress={() => navigation.navigate("Frame2")}
    >
      <Text style={[styles.career, styles.textTypo]}>🧐 Career</Text>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>6개월</Text>
          <Text style={[styles.text1, styles.textTypo]}>카카오톡 인턴</Text>
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>6개월</Text>
          <Text style={[styles.text1, styles.textTypo]}>
            카카오톡 인턴 ㅣㅏ어리ㅓ이ㅏ러라ㅓ아어랑러ㅏ
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  career: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  text: {
    color: Color.colorSlategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  text1: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_100,
    width: 244,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  parent: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    gap: Gap.gap_3xs,
    alignSelf: "stretch",
  },
  frameParent: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  careerParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAliceblue_300,
    overflow: "hidden",
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xl,
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
});

export default FrameComponent31;
