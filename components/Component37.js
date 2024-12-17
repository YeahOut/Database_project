import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Component10 from "./Component10";
import {
  FontSize,
  FontFamily,
  Gap,
  Border,
  Color,
  Padding,
} from "../GlobalStyles";

const Component37 = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}> 팀원 구성</Text>
      <View style={styles.inner}>
        <View style={styles.parent}>
          <Component10 prop="기획" yeahOuts="@yeah_outs" />
          <View style={styles.view1}>
            <View style={styles.group}>
              <Text style={styles.text1}>디자인</Text>
              <View style={styles.frameWrapper}>
                <View style={styles.parentFlexBox}>
                  <Image
                    style={styles.imageIconLayout}
                    contentFit="cover"
                    source={require("../assets/image5.png")}
                  />
                  <View style={styles.genyWrapper}>
                    <Text style={[styles.geny, styles.genyTypo]}>@geny</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.view1}>
            <View style={styles.group}>
              <Text style={styles.text1}>프론트엔드</Text>
              <View style={styles.frameWrapper}>
                <View style={[styles.rectangleParent, styles.parentFlexBox]}>
                  <View style={[styles.frameChild, styles.imageIconLayout]} />
                  <View style={styles.genyWrapper}>
                    <Text style={[styles.text3, styles.genyTypo]}>
                      @모집_중
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.mingcuteaddFill} />
            </View>
          </View>
          <Component10 prop="백엔드" yeahOuts="@goorm12345" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  genyTypo: {
    fontWeight: "500",
    fontSize: FontSize.subTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  parentFlexBox: {
    gap: Gap.gap_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  imageIconLayout: {
    width: 30,
    borderRadius: Border.br_xl,
    height: 30,
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
    color: Color.colorGray_100,
    display: "flex",
    width: 80,
    height: 30,
    fontSize: FontSize.subTitle_size,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  geny: {
    color: Color.fontMain,
  },
  genyWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    justifyContent: "center",
  },
  group: {
    gap: Gap.gap_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  view1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayInput,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
  frameChild: {
    borderStyle: "dashed",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  text3: {
    color: Color.colorDarkgray_100,
  },
  rectangleParent: {
    alignSelf: "stretch",
  },
  mingcuteaddFill: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  parent: {
    alignSelf: "stretch",
    gap: Gap.gap_sm,
  },
  inner: {
    alignSelf: "stretch",
  },
  view: {
    position: "absolute",
    marginLeft: -188,
    top: 388,
    left: "50%",
    width: 370,
    gap: Gap.gap_sm,
    overflow: "hidden",
  },
});

export default Component37;
