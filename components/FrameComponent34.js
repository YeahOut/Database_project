import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import Component20 from "./Component20";
import Variant from "./Variant";
import Component16 from "./Component16";
import Component8 from "./Component8";
import Component31 from "./Component31";
import {
  Padding,
  FontFamily,
  Gap,
  FontSize,
  Color,
  Border,
} from "../GlobalStyles";

const FrameComponent34 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.wrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.text, styles.textTypo1]}>👨🏻‍💻 프로젝트 정보</Text>
      </View>
      <View style={styles.parent}>
        <View style={styles.view}>
          <Text style={styles.textTypo}>
            <Text style={styles.text2}>{`제목 `}</Text>
            <Text style={styles.text3}>*</Text>
          </Text>
          <Component20
            property1="Default"
            prop="제목을 작성해주세요."
            viewAlignItems="center"
            viewHeight="unset"
          />
        </View>
        <View style={styles.view}>
          <Text style={styles.textTypo}>
            <Text style={styles.text2}>{`프로젝트 상태 `}</Text>
            <Text style={styles.text3}>*</Text>
          </Text>
          <View style={[styles.variant8Parent, styles.view5FlexBox]}>
            <Variant />
            <Component16 property1="Variant2" viewWidth={88} viewHeight={32} />
            <Component16 property1="Variant2" viewWidth={88} viewHeight={32} />
            <Component16 property1="Variant2" viewWidth={88} viewHeight={32} />
          </View>
        </View>
        <Component8 />
        <View style={[styles.view2, styles.view2FlexBox]}>
          <View style={styles.view2FlexBox}>
            <Text style={[styles.text7, styles.textTypo]}>첨부사진</Text>
            <Text style={[styles.text8, styles.textTypo1]}>
              최대 3장 첨부 가능
            </Text>
          </View>
          <ScrollView style={[styles.container, styles.view3FlexBox]}>
            <View style={[styles.view3, styles.view3Layout]}>
              <View style={styles.view4}>
                <View
                  style={[
                    styles.majesticonscameraWrapper,
                    styles.wrapperSpaceBlock,
                  ]}
                >
                  <Image
                    style={[
                      styles.majesticonscamera,
                      styles.component2ChildLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/majesticonscamera.png")}
                  />
                </View>
              </View>
            </View>
            <Component31 />
            <Component31 />
            <View style={styles.component2}>
              <View style={[styles.view5, styles.view5Position]}>
                <View style={styles.view3Layout}>
                  <View style={styles.view6} />
                </View>
              </View>
              <Image
                style={[styles.component2Child, styles.view5Position]}
                contentFit="cover"
                source={require("../assets/frame-1192448014.png")}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.view}>
          <Text style={styles.textTypo}>
            <Text style={styles.text2}>{`프로젝트 상세 정보 `}</Text>
            <Text style={styles.text3}>*</Text>
          </Text>
          <Component20
            property1="Default"
            prop="어쩌고저쩌고"
            viewAlignItems="center"
            viewHeight="unset"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  view5FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  view2FlexBox: {
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
  view3FlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  view3Layout: {
    height: 120,
    width: 120,
  },
  component2ChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  view5Position: {
    right: "0%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_xl,
    color: Color.fontSub,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    flex: 1,
  },
  wrapper: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
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
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    alignSelf: "stretch",
  },
  variant8Parent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  text7: {
    color: Color.fontSub,
  },
  text8: {
    fontSize: FontSize.mainContent_size,
    fontWeight: "500",
    color: Color.fontSubsub,
    alignSelf: "stretch",
  },
  majesticonscamera: {
    width: "100%",
    flex: 1,
    maxWidth: "100%",
    alignSelf: "stretch",
  },
  majesticonscameraWrapper: {
    width: 73,
    height: 53,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
  },
  view4: {
    backgroundColor: Color.colorLavender_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  view3: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  view6: {
    top: 0,
    left: 0,
    backgroundColor: Color.grayGray1,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
    height: 120,
    width: 120,
    alignItems: "center",
  },
  view5: {
    height: "92.31%",
    top: "7.69%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  component2Child: {
    height: "21.08%",
    width: "21.67%",
    top: "0%",
    bottom: "78.92%",
    left: "78.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component2: {
    width: 120,
    height: 130,
  },
  container: {
    maxHeight: 130,
    height: 130,
    alignItems: "flex-end",
    width: "100%",
    gap: Gap.gap_sm,
  },
  view2: {
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

export default FrameComponent34;
