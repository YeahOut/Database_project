import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Default from "./Default";
import Component25 from "./Component25";
import Component16 from "./Component16";
import {
  FontFamily,
  FontSize,
  Gap,
  Border,
  Color,
  Padding,
} from "../GlobalStyles";

const Top1 = () => {
  return (
    <View style={styles.top5}>
      <View style={styles.top51}>
        <Text style={[styles.top52, styles.top52Typo]}>TOP 5 프로젝트</Text>
        <Text style={[styles.text, styles.textTypo1]}>11.10 22:00 기준</Text>
      </View>
      <View style={styles.top53}>
        <View style={styles.view}>
          <View style={[styles.view1, styles.view1FlexBox]}>
            <Image
              style={[styles.maskGroupIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mask-group.png")}
            />
            <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
              <View style={styles.frameFlexBox}>
                <View style={[styles.frameContainer, styles.frameFlexBox]}>
                  <View style={styles.kprPr22Wrapper}>
                    <Text
                      style={[styles.kprPr, styles.top52Typo]}
                      numberOfLines={2}
                    >
                      KPR 대학생 PR 아이디어 제22회 공모전 팀원 모집!!
                    </Text>
                  </View>
                  <Default
                    prop="모집 중"
                    defaultAlignSelf="unset"
                    textFontSize={12}
                  />
                </View>
                <View style={[styles.imageParent, styles.parentFlexBox]}>
                  <Image
                    style={styles.imageIconLayout}
                    contentFit="cover"
                    source={require("../assets/image.png")}
                  />
                  <Text style={[styles.text1, styles.textTypo1]}>김예나</Text>
                </View>
              </View>
              <Component25
                viewNum="130"
                lsiconviewFilled={require("../assets/lsiconviewfilled.png")}
                prop={require("../assets/.png")}
              />
            </View>
          </View>
          <View style={[styles.view1, styles.view1FlexBox]}>
            <View style={[styles.maskGroupIcon, styles.iconLayout]}>
              <Image
                style={[styles.imageIcon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/mask-group3.png")}
              />
              <Image
                style={[styles.imageIcon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/mask-group1.png")}
              />
            </View>
            <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
              <View style={styles.frameFlexBox}>
                <View style={[styles.frameContainer, styles.frameFlexBox]}>
                  <View style={styles.kprPr22Wrapper}>
                    <Text
                      style={[styles.kprPr, styles.top52Typo]}
                      numberOfLines={2}
                    >{`2024 한 해 마무리 & 내년 계획 공모전 함께 해요!`}</Text>
                  </View>
                  <Component16
                    property1="Variant2"
                    viewWidth="unset"
                    viewHeight="unset"
                  />
                </View>
                <View style={[styles.imageParent, styles.parentFlexBox]}>
                  <Image
                    style={styles.imageIconLayout}
                    contentFit="cover"
                    source={require("../assets/image1.png")}
                  />
                  <Text style={[styles.text1, styles.textTypo1]}>최예진</Text>
                </View>
              </View>
              <Component25
                viewNum="123"
                lsiconviewFilled={require("../assets/lsiconviewfilled.png")}
                prop={require("../assets/1.png")}
              />
            </View>
          </View>
          <View style={[styles.view3, styles.frameParentSpaceBlock]}>
            <View style={[styles.maskGroupParent, styles.view1FlexBox]}>
              <Image
                style={[styles.maskGroupIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/mask-group5.png")}
              />
              <View style={[styles.frameParent3, styles.frameParentSpaceBlock]}>
                <View style={styles.frameFlexBox}>
                  <View style={[styles.frameContainer, styles.frameFlexBox]}>
                    <View style={styles.kprPr22Wrapper}>
                      <Text
                        style={[styles.kprPr, styles.top52Typo]}
                        numberOfLines={2}
                      >
                        단풍톤 팀원 구합니다!!
                      </Text>
                    </View>
                    <Component16
                      property1="Default"
                      viewWidth="unset"
                      viewHeight="unset"
                    />
                  </View>
                  <View style={[styles.imageParent, styles.parentFlexBox]}>
                    <View style={[styles.frameChild, styles.imageIconLayout]} />
                    <Text style={[styles.text1, styles.textTypo1]}>goorm</Text>
                  </View>
                </View>
                <View style={styles.top51}>
                  <View style={[styles.parent, styles.parentFlexBox]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      24.11.23 오후 14:30
                    </Text>
                    <Text style={[styles.text5, styles.textTypo]}>·</Text>
                    <Text style={[styles.text4, styles.textTypo]}>
                      조회수 123
                    </Text>
                  </View>
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.child} />
          </View>
          <View style={[styles.view3, styles.frameParentSpaceBlock]}>
            <View style={[styles.maskGroupParent, styles.view1FlexBox]}>
              <Image
                style={[styles.maskGroupIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/mask-group5.png")}
              />
              <View style={[styles.frameParent3, styles.frameParentSpaceBlock]}>
                <View style={styles.frameFlexBox}>
                  <View style={[styles.frameContainer, styles.frameFlexBox]}>
                    <View style={styles.kprPr22Wrapper}>
                      <Text
                        style={[styles.kprPr, styles.top52Typo]}
                        numberOfLines={2}
                      >
                        단풍톤 함께해요! 프론트엔드 두 분, 백엔드 한 분,
                        디자이너 한 분 구합...
                      </Text>
                    </View>
                    <Component16
                      property1="Default"
                      viewWidth="unset"
                      viewHeight="unset"
                    />
                  </View>
                  <View style={[styles.imageParent, styles.parentFlexBox]}>
                    <View style={[styles.frameChild, styles.imageIconLayout]} />
                    <Text style={[styles.text1, styles.textTypo1]}>goorm</Text>
                  </View>
                </View>
                <View style={styles.top51}>
                  <View style={[styles.parent, styles.parentFlexBox]}>
                    <Text style={[styles.text4, styles.textTypo]}>
                      24.11.23 오후 14:30
                    </Text>
                    <Text style={[styles.text5, styles.textTypo]}>·</Text>
                    <Text style={[styles.text4, styles.textTypo]}>
                      조회수 123
                    </Text>
                  </View>
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.child} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top52Typo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  textTypo1: {
    fontSize: FontSize.subContent_size,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  view1FlexBox: {
    gap: Gap.gap_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    width: 88,
    height: 88,
  },
  frameParentSpaceBlock: {
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
  frameFlexBox: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    gap: Gap.gap_7xs,
    flexDirection: "row",
  },
  imageIconLayout: {
    height: 15,
    width: 15,
    borderRadius: Border.br_7xs,
  },
  textTypo: {
    color: Color.fontSubsub,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  top52: {
    fontSize: FontSize.semiTitle_size,
    color: Color.colorGray_500,
  },
  text: {
    color: Color.colorDimgray_400,
    fontWeight: "500",
  },
  top51: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  maskGroupIcon: {
    height: 88,
  },
  kprPr: {
    fontSize: FontSize.subTitle_size,
    color: Color.fontMain,
    overflow: "hidden",
    flex: 1,
  },
  kprPr22Wrapper: {
    flex: 1,
    flexDirection: "row",
  },
  frameContainer: {
    maxHeight: 34,
    flexDirection: "row",
  },
  text1: {
    color: Color.fontSub,
    fontWeight: "500",
  },
  imageParent: {
    alignSelf: "stretch",
  },
  frameParent: {
    alignItems: "flex-end",
    flex: 1,
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
  },
  view1: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_9xs,
  },
  imageIcon1: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    height: 88,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.grayGray1,
  },
  text4: {
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
  },
  text5: {
    fontSize: FontSize.mainContent_size,
    fontWeight: "700",
  },
  parent: {
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameParent3: {
    paddingVertical: Padding.p_11xs,
    flex: 1,
    justifyContent: "space-between",
  },
  maskGroupParent: {
    height: 88,
  },
  child: {
    borderStyle: "solid",
    borderColor: Color.grayGray1,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  view3: {
    gap: Gap.gap_lg,
    paddingVertical: Padding.p_9xs,
  },
  view: {
    width: 372,
    gap: Gap.gap_3xl,
  },
  top53: {
    alignSelf: "stretch",
  },
  top5: {
    top: 595,
    right: 20,
    left: 20,
    gap: Gap.gap_xl,
    alignItems: "center",
    position: "absolute",
  },
});

export default Top1;
