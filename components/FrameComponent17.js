import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Component20 from "./Component20";
import Component8 from "./Component8";
import {
  Padding,
  FontFamily,
  Gap,
  FontSize,
  Color,
  Border,
} from "../GlobalStyles";

const FrameComponent17 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.wrapper, styles.viewWrapperSpaceBlock]}>
        <Text style={[styles.text, styles.textTypo1]}>👨🏻‍💻 프로젝트 정보</Text>
      </View>
      <View style={styles.parent}>
        <View style={[styles.view, styles.viewWrapperSpaceBlock]}>
          <Text style={styles.textTypo}>
            <Text style={styles.text2}>{`제목 `}</Text>
            <Text style={styles.text3}>*</Text>
          </Text>
          <Component20 property1="Default" prop="제목을 작성해주세요." />
        </View>
        <Component8 />
        <View style={[styles.view1, styles.view1FlexBox]}>
          <View style={styles.view1FlexBox}>
            <Text style={[styles.text4, styles.textTypo]}>첨부사진</Text>
            <Text style={[styles.text5, styles.textTypo1]}>
              최대 3장 첨부 가능
            </Text>
          </View>
          <View style={[styles.container, styles.view2FlexBox]}>
            <View style={[styles.view2, styles.view2FlexBox]}>
              <View style={[styles.view3, styles.view3FlexBox]}>
                <View
                  style={[
                    styles.majesticonscameraWrapper,
                    styles.viewWrapperSpaceBlock,
                  ]}
                >
                  <Image
                    style={[styles.majesticonscamera, styles.view3FlexBox]}
                    contentFit="cover"
                    source={require("../assets/majesticonscamera.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.view, styles.viewWrapperSpaceBlock]}>
          <Text style={styles.textTypo}>
            <Text style={styles.text2}>{`프로젝트 상세 정보 `}</Text>
            <Text style={styles.text3}>*</Text>
          </Text>
          <Component20
            property1="Default"
            prop="프로젝트에 대해 설명해주세요"
            viewAlignItems="center"
            viewHeight="unset"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewWrapperSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  view1FlexBox: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  textTypo: {
    fontSize: FontSize.semiTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  view2FlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  view3FlexBox: {
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_xl,
    color: Color.fontSub,
    fontWeight: "600",
    flex: 1,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text2: {
    color: Color.fontSub,
  },
  text3: {
    color: Color.colorDarkslateblue_200,
  },
  view: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  text4: {
    color: Color.fontSub,
  },
  text5: {
    fontSize: FontSize.mainContent_size,
    fontWeight: "500",
    color: Color.fontSubsub,
    alignSelf: "stretch",
  },
  majesticonscamera: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  majesticonscameraWrapper: {
    width: 73,
    height: 53,
    justifyContent: "center",
    alignItems: "center",
  },
  view3: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  view2: {
    width: 120,
    height: 120,
  },
  container: {
    height: 130,
  },
  view1: {
    opacity: 0.8,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
  },
  parent: {
    gap: Gap.gap_xl,
    alignSelf: "stretch",
  },
  frameParent: {
    gap: Gap.gap_3xl,
    alignSelf: "stretch",
  },
});

export default FrameComponent17;
