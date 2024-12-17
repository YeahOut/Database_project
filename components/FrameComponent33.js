import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GroupComponent2 from "./GroupComponent2";
import { FontFamily, FontSize, Color, Gap, Padding } from "../GlobalStyles";

const FrameComponent33 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.parent}>
        <View style={[styles.view, styles.viewFlexBox]}>
          <Image
            style={styles.eosIconsproject}
            contentFit="cover"
            source={require("../assets/eosiconsproject.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>프로젝트 관리</Text>
        </View>
        <Pressable
          style={[styles.wrapper, styles.viewFlexBox]}
          onPress={() => navigation.navigate("Frame3")}
        >
          <Text
            style={[styles.text1, styles.textTypo]}
          >{`내 프로젝트 / 동료 평가 `}</Text>
        </Pressable>
      </View>
      <View style={styles.parent}>
        <View
          style={[styles.iconParkSolidvolumeNoticeParent, styles.viewFlexBox]}
        >
          <Image
            style={styles.eosIconsproject}
            contentFit="cover"
            source={require("../assets/iconparksolidvolumenotice.png")}
          />
          <View style={[styles.container, styles.viewFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>알림 설정</Text>
          </View>
        </View>
        <View style={[styles.wrapper, styles.viewFlexBox]}>
          <View style={[styles.group, styles.viewFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>
              모집 공고 마감 알림
            </Text>
            <GroupComponent2
              property1="Default"
              ellipse1={require("../assets/ellipse-1.png")}
            />
          </View>
        </View>
        <View style={[styles.wrapper, styles.viewFlexBox]}>
          <View style={[styles.group, styles.viewFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>채팅 알림</Text>
            <GroupComponent2
              property1="New value"
              ellipse1={require("../assets/ellipse-11.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.parent}>
        <View
          style={[styles.iconParkSolidvolumeNoticeParent, styles.viewFlexBox]}
        >
          <Image
            style={styles.eosIconsproject}
            contentFit="cover"
            source={require("../assets/icbaselineaccountcircle.png")}
          />
          <View style={[styles.container, styles.viewFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>계정 관리</Text>
          </View>
        </View>
        <View style={[styles.wrapper, styles.viewFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>로그아웃</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  eosIconsproject: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.subContent_size,
    color: Color.fontMain,
  },
  view: {
    gap: Gap.gap_7xs,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.subTitle_size,
    color: Color.fontSubsub,
  },
  wrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
  parent: {
    gap: Gap.gap_7xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  container: {
    overflow: "hidden",
    justifyContent: "center",
  },
  iconParkSolidvolumeNoticeParent: {
    gap: Gap.gap_7xs,
  },
  group: {
    flex: 1,
    justifyContent: "space-between",
  },
  frameParent: {
    position: "absolute",
    top: 342,
    left: 24,
    width: 366,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    gap: Gap.gap_5xl,
  },
});

export default FrameComponent33;
