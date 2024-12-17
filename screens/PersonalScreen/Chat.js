import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import GroupComponent4 from "../../components/GroupComponent4";
import Button5 from "../../components/Button5";
import FrameComponent9 from "../../components/FrameComponent9";
import FrameComponent8 from "../../components/FrameComponent8";
import Button1 from "../../components/Button1";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  Border,
  Gap,
} from "../../GlobalStyles";

const Chat1 = () => {
  return (
    <View style={styles.chat}>
      <GroupComponent4 />
      <ScrollView style={styles.chatInner}>
        <View style={styles.wrapper}>
          <View style={styles.view}>
            <View style={styles.view1}>
              <View style={[styles.frame, styles.frameFlexBox]}>
                <Text style={styles.text}>2024년 12월 1일</Text>
              </View>
              <View style={styles.rectangleParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-143.png")}
                />
                <View style={styles.parent}>
                  <Text style={[styles.text1, styles.textTypo]}>박이슬</Text>
                  <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                      <Text style={[styles.text2, styles.textTypo]}>
                        안녕하세요
                      </Text>
                    </View>
                  </View>
                  <Button5 />
                  <View style={[styles.pmWrapper, styles.frameFlexBox]}>
                    <Text style={styles.text}>3:15 PM</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.frame1, styles.view2FlexBox]}>
                <Button5
                  buttonBackgroundColor="#5f9bf5"
                  buttonBorderTopLeftRadius={20}
                />
                <View style={[styles.view2, styles.view2FlexBox]}>
                  <FrameComponent9
                    prop="안녕하세요!"
                    prop1={`혹시 디자인 하셨던 파일 중에서
작업 하셨던거 보여주실 수 있나요?`}
                    pM="3:20 PM"
                  />
                </View>
              </View>
            </View>
            <View style={styles.view1}>
              <View style={[styles.frame, styles.frameFlexBox]}>
                <Text style={styles.text}>2024년 11월 7일</Text>
              </View>
              <View style={[styles.frame1, styles.view2FlexBox]}>
                <View style={styles.view4}>
                  <FrameComponent8 />
                </View>
                <View style={[styles.view2, styles.view2FlexBox]}>
                  <FrameComponent9
                    prop="안녕하세요"
                    prop1="안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요"
                    pM="3:15 PM"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Button1 buttonTop={851} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  view2FlexBox: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.subContent_size,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "500",
  },
  frame: {
    paddingHorizontal: Padding.p_121xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    width: 24,
    height: 26,
  },
  text1: {
    color: Color.colorDimgray_500,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    alignSelf: "stretch",
  },
  text2: {
    fontWeight: "600",
    color: Color.colorDimgray_600,
    maxWidth: 202,
  },
  button: {
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.grayInput,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_xs,
  },
  buttonWrapper: {
    display: "none",
    alignSelf: "stretch",
  },
  pmWrapper: {
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row",
  },
  parent: {
    gap: Gap.gap_5xs,
  },
  rectangleParent: {
    gap: Gap.gap_5xs,
    flexDirection: "row",
  },
  view2: {
    justifyContent: "center",
  },
  frame1: {
    gap: Gap.gap_sm,
  },
  view1: {
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  view4: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  view: {
    paddingHorizontal: 0,
    gap: Gap.gap_3xl,
    paddingVertical: Padding.p_xs,
    left: 0,
    top: 0,
    width: 372,
    position: "absolute",
  },
  wrapper: {
    height: 1106,
    left: 0,
    top: 0,
    width: 372,
    position: "absolute",
  },
  chatInner: {
    top: 107,
    left: 20,
    maxWidth: 372,
    width: 372,
    position: "absolute",
    flex: 1,
  },
  chat: {
    backgroundColor: Color.grayWhite,
    width: "100%",
    height: 917,
    overflow: "hidden",
    flex: 1,
  },
});

export default Chat1;
