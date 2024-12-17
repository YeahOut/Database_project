import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Component20 from "./Component20";
import { FontFamily, FontSize, Color, Gap, Padding } from "../GlobalStyles";

const Component36 = ({ property1 = "Default" }) => {
  return (
    <View style={styles.view}>
      <View style={styles.view}>
        <View style={styles.view1}>
          <Text style={styles.text}>닉네임 설정하기</Text>
          <View style={styles.frame}>
            <Component20
              property1="Variant2"
              prop="닉네임을 작성해주세요."
              viewAlignItems="center"
              viewHeight="unset"
            />
            <View style={styles.view2}>
              <Text style={[styles.text1, styles.textFlexBox]}>
                4-10자 / 영문 소문자 (숫자 조합 가능)
              </Text>
            </View>
            <View style={styles.view2}>
              <Text style={[styles.text2, styles.textFlexBox]}>
                사용 가능한 닉네임입니다.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text}>전공 설정하기</Text>
          <Component20
            property1="Variant2"
            prop="컴퓨터공학 전공"
            viewAlignItems="center"
            viewHeight="unset"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "right",
    fontFamily: FontFamily.semiTitle,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.semiTitle_size,
    color: Color.fontSub,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.subContent_size,
    fontWeight: "500",
    color: Color.fontSubsub,
  },
  view2: {
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.size_smi,
    color: Color.primaryPrimary1,
    fontWeight: "600",
    textAlign: "right",
  },
  frame: {
    alignItems: "flex-end",
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  view1: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  view: {
    height: 228,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
});

export default Component36;
