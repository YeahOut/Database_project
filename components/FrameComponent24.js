import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Component15 from "./Component15";
import Component20 from "./Component20";
import { Padding, FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const FrameComponent24 = () => {
  return (
    <View style={styles.applyInner}>
      <View style={styles.frameParent}>
        <View style={[styles.wrapper, styles.viewSpaceBlock]}>
          <Text style={styles.text}>👨🏻‍💻 지원 정보</Text>
        </View>
        <View style={styles.parent}>
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <Text style={styles.textTypo}>
              <Text style={styles.text2}>지원 파트</Text>
              <Text style={styles.text3}> *</Text>
            </Text>
            <Component15
              viewBackgroundColor="#ededed"
              viewBorderColor="#6c757d"
              viewBackgroundColor1="rgba(255, 220, 76, 0.4)"
              viewBorderColor1="#b39b5a"
            />
          </View>
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <Text style={[styles.text4, styles.textTypo]}>
              팀 개설자에게 한 마디
            </Text>
            <View style={styles.frame}>
              <Component20
                property1="Default"
                prop="팀 개설자에게 자신을 어필해 보세요!"
                viewAlignItems="flex-start"
                viewHeight={160}
              />
              <View style={styles.view2}>
                <Text style={styles.text5}>0/50</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    alignSelf: "stretch",
  },
  textTypo: {
    fontSize: FontSize.semiTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  text: {
    flex: 1,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontWeight: "600",
    color: Color.fontSub,
    fontFamily: FontFamily.semiTitle,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    color: Color.colorDimgray_500,
  },
  text3: {
    color: Color.colorDarkslateblue_200,
  },
  view: {
    gap: Gap.gap_sm,
  },
  text4: {
    color: Color.fontSub,
    fontSize: FontSize.semiTitle_size,
  },
  text5: {
    fontSize: FontSize.subContent_size,
    fontWeight: "500",
    color: Color.fontSubsub,
    textAlign: "right",
    fontFamily: FontFamily.semiTitle,
    alignSelf: "stretch",
  },
  view2: {
    alignSelf: "stretch",
  },
  frame: {
    alignItems: "flex-end",
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  parent: {
    gap: Gap.gap_xl,
    alignSelf: "stretch",
  },
  frameParent: {
    gap: Gap.gap_3xl,
    alignSelf: "stretch",
  },
  applyInner: {
    position: "absolute",
    top: 135,
    left: 16,
    width: 380,
  },
});

export default FrameComponent24;
