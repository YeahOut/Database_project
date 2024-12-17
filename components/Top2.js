import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent7 from "./FrameComponent7";
import { FontFamily, FontSize, Color, Padding, Gap } from "../GlobalStyles";

const Top2 = () => {
  return (
    <View style={styles.top5}>
      <View style={[styles.view, styles.viewFlexBox]}>
        <Text style={[styles.top51, styles.textTypo]}>top5 메시스코어</Text>
        <Text style={[styles.text, styles.textTypo]}>11.10 22:00 기준</Text>
      </View>
      <ScrollView style={[styles.top52, styles.viewFlexBox]}>
        <FrameComponent1
          prop={`메시스코어 
보러 가기 👀`}
        />
        <FrameComponent7
          image={require("../assets/image15.png")}
          prop="김예나"
          prop1="560"
        />
        <FrameComponent7
          image={require("../assets/image16.png")}
          prop="최예진"
          prop1="470"
        />
        <FrameComponent7
          image={require("../assets/rectangle-274175362.png")}
          prop="goorm"
          prop1="1234"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  top51: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  text: {
    fontSize: FontSize.subContent_size,
    fontWeight: "500",
    color: Color.colorDimgray_400,
  },
  view: {
    justifyContent: "space-between",
  },
  top52: {
    paddingRight: Padding.p_5xs,
    gap: Gap.gap_2xs,
    width: "100%",
  },
  top5: {
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
});

export default Top2;
