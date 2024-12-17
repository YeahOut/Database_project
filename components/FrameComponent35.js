import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Component9 from "./Component9";
import {
  Padding,
  Gap,
  FontSize,
  FontFamily,
  Color,
  Border,
} from "../GlobalStyles";

const FrameComponent35 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
        <View style={[styles.wrapper, styles.viewSpaceBlock1]}>
          <Text style={styles.text}>👨🏻‍💻 팀원 정보</Text>
        </View>
      </View>
      <View style={styles.parent}>
        <View style={[styles.view, styles.viewFlexBox]}>
          <Text style={[styles.text1, styles.textTypo1]}>우대사항</Text>
          <View style={styles.group}>
            <View style={[styles.view1, styles.viewSpaceBlock]}>
              <View style={[styles.container, styles.parent4FlexBox]}>
                <Text style={styles.text2}>{`기획            | `}</Text>
                <Text style={[styles.text3, styles.textTypo]}>
                  어떤 기획과 함께 하고 싶나요?
                </Text>
              </View>
            </View>
            <View style={[styles.view1, styles.viewSpaceBlock]}>
              <View style={[styles.container, styles.parent4FlexBox]}>
                <Text style={styles.text2}>{`디자인        | `}</Text>
                <Text style={[styles.text3, styles.textTypo]}>
                  어떤 디자인과 함께 하고 싶나요?
                </Text>
              </View>
            </View>
            <View style={[styles.view1, styles.viewSpaceBlock]}>
              <View style={[styles.container, styles.parent4FlexBox]}>
                <Text style={styles.text2}>{`백엔드        | `}</Text>
                <Text style={[styles.text7, styles.textTypo]}>
                  잘하는사람하하하
                </Text>
              </View>
            </View>
            <View style={[styles.view1, styles.viewSpaceBlock]}>
              <View style={[styles.container, styles.parent4FlexBox]}>
                <Text style={styles.text2}>{`프론트엔드 | `}</Text>
                <Text style={[styles.text3, styles.textTypo]}>
                  어떤 개발자와 함께 하고 싶나요?
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.view, styles.viewFlexBox]}>
          <Text style={styles.textTypo1}>
            <Text style={styles.text11}>팀원 구성</Text>
            <Text style={styles.text12}> *</Text>
          </Text>
          <View style={styles.viewFlexBox}>
            <View style={[styles.view6, styles.viewSpaceBlock]}>
              <View style={styles.parent4FlexBox}>
                <Text style={styles.text13}>기획</Text>
                <View style={styles.frameGroup}>
                  <View style={[styles.rectangleParent, styles.wrapperFlexBox]}>
                    <Image
                      style={styles.frameLayout}
                      contentFit="cover"
                      source={require("../assets/rectangle-141.png")}
                    />
                    <View
                      style={[styles.goorm12345Wrapper, styles.wrapperFlexBox]}
                    >
                      <Text style={[styles.goorm12345, styles.textTypo]}>
                        @goorm12345
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.rectangleGroup, styles.wrapperFlexBox]}>
                    <View style={[styles.frameItem, styles.frameLayout]} />
                    <View
                      style={[styles.goorm12345Wrapper, styles.wrapperFlexBox]}
                    >
                      <Text style={[styles.text3, styles.textTypo]}>
                        @모집_중
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.rectangleGroup, styles.wrapperFlexBox]}>
                    <View
                      style={[
                        styles.mingcuteaddFillWrapper,
                        styles.frameLayout,
                      ]}
                    >
                      <Image
                        style={styles.mingcuteaddFillIcon}
                        contentFit="cover"
                        source={require("../assets/mingcuteaddfill.png")}
                      />
                    </View>
                    <Text style={[styles.text15, styles.textTypo]}>
                      팀원 수 추가
                    </Text>
                  </View>
                </View>
                <View style={styles.mingcuteaddFill} />
              </View>
            </View>
            <View style={[styles.view6, styles.viewSpaceBlock]}>
              <View style={styles.parent4FlexBox}>
                <Text style={styles.text13}>디자인</Text>
                <View style={styles.frameGroup}>
                  <View style={[styles.rectangleParent, styles.wrapperFlexBox]}>
                    <Image
                      style={styles.frameLayout}
                      contentFit="cover"
                      source={require("../assets/rectangle-141.png")}
                    />
                    <View
                      style={[styles.goorm12345Wrapper, styles.wrapperFlexBox]}
                    >
                      <Text style={[styles.goorm12345, styles.textTypo]}>
                        @goorm12345
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.rectangleGroup, styles.wrapperFlexBox]}>
                    <View
                      style={[
                        styles.mingcuteaddFillWrapper,
                        styles.frameLayout,
                      ]}
                    >
                      <Image
                        style={styles.mingcuteaddFillIcon}
                        contentFit="cover"
                        source={require("../assets/mingcuteaddfill.png")}
                      />
                    </View>
                    <Text style={[styles.text15, styles.textTypo]}>
                      팀원 수 추가
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Component9 prop="프론트엔드" />
            <Component9 prop="백엔드" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewSpaceBlock1: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
  },
  viewFlexBox: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  textTypo1: {
    fontSize: FontSize.semiTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  parent4FlexBox: {
    gap: Gap.gap_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo: {
    fontWeight: "500",
    fontSize: FontSize.subTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  frameLayout: {
    width: 30,
    borderRadius: Border.br_xl,
    height: 30,
  },
  text: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
    color: Color.fontSub,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  text1: {
    color: Color.fontSub,
  },
  text2: {
    color: Color.colorGray_100,
    fontSize: FontSize.subTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  text3: {
    color: Color.colorDarkgray_100,
  },
  container: {
    alignItems: "center",
  },
  view1: {
    paddingVertical: Padding.p_lg,
  },
  text7: {
    color: Color.colorGray_600,
  },
  group: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  view: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
  },
  text11: {
    color: Color.fontSub,
  },
  text12: {
    color: Color.colorDarkslateblue_200,
  },
  text13: {
    display: "flex",
    width: 80,
    height: 30,
    color: Color.colorGray_100,
    fontSize: FontSize.subTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
    alignItems: "center",
  },
  goorm12345: {
    color: Color.fontMain,
  },
  goorm12345Wrapper: {
    alignItems: "center",
  },
  rectangleParent: {
    gap: Gap.gap_5xs,
    alignItems: "center",
  },
  frameItem: {
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  rectangleGroup: {
    gap: Gap.gap_5xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  mingcuteaddFillIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
  mingcuteaddFillWrapper: {
    backgroundColor: Color.colorAliceblue_300,
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text15: {
    color: Color.colorDarkslateblue_100,
  },
  frameGroup: {
    gap: Gap.gap_5xs,
    justifyContent: "center",
  },
  mingcuteaddFill: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  view6: {
    paddingVertical: Padding.p_xs,
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

export default FrameComponent35;
