import * as React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Image } from "expo-image";
import FrameComponent11 from "../../components/FrameComponent11";
import FrameComponent12 from "../../components/FrameComponent12";
import Component22 from "../../components/Component22";
import Component24 from "../../components/Component24";
import Component38 from "../../components/Component38";
import Component11 from "../../components/Component11";
import Component5 from "../../components/Component5";
import {
  FontFamily,
  Gap,
  Color,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";

const Rank = () => {
  return (
    <View style={styles.rank}>
      <Text style={[styles.top100, styles.top100Typo]}>TOP 100</Text>
      <ScrollView style={styles.rank1}>
        <View style={styles.componentParent}>
          <FrameComponent11 />
          <FrameComponent12 />
          <View
            style={[
              styles.fluentEmoji3rdPlaceMedalParent,
              styles.parentFlexBox,
            ]}
          >
            <View style={styles.fluentEmoji3rdPlaceMedal}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
            </View>
            <View style={styles.parentFlexBox}>
              <View style={styles.parentFlexBox}>
                <Image
                  style={styles.imageIcon}
                  contentFit="cover"
                  source={require("../assets/image8.png")}
                />
                <View style={[styles.parent, styles.parentFlexBox1]}>
                  <Text style={[styles.text, styles.textTypo1]}>박재연</Text>
                  <Component22 property1="L6" />
                </View>
              </View>
              <Text style={[styles.text1, styles.textTypo]}>424점</Text>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Component24 rankNum="4" />
          <Component24 rankNum="5" />
          <Component24 rankNum="6" />
          <Component24 rankNum="7" />
          <Component24 rankNum="8" />
          <View style={[styles.view, styles.viewFlexBox]}>
            <View
              style={[styles.fluentEmoji3rdPlaceMedal1, styles.parentFlexBox1]}
            >
              <Text style={styles.text2}>4</Text>
            </View>
            <View style={[styles.frameGroup, styles.parentFlexBox1]}>
              <View style={styles.viewFlexBox}>
                <View style={styles.frameChild} />
                <View style={[styles.parent, styles.parentFlexBox1]}>
                  <Text style={[styles.goorm12345, styles.textTypo1]}>
                    goorm12345
                  </Text>
                  <Component22 property1="L3" />
                </View>
              </View>
              <Text style={[styles.text3, styles.textTypo]}>123456점</Text>
            </View>
          </View>
          <View style={[styles.view, styles.viewFlexBox]}>
            <View
              style={[styles.fluentEmoji3rdPlaceMedal1, styles.parentFlexBox1]}
            >
              <Text style={styles.text2}>4</Text>
            </View>
            <View style={[styles.frameGroup, styles.parentFlexBox1]}>
              <View style={styles.viewFlexBox}>
                <View style={styles.frameChild} />
                <View style={[styles.parent, styles.parentFlexBox1]}>
                  <Text style={[styles.goorm12345, styles.textTypo1]}>
                    goorm12345
                  </Text>
                  <Component22 property1="L6" />
                </View>
              </View>
              <Text style={[styles.text3, styles.textTypo]}>123456점</Text>
            </View>
          </View>
          <View style={[styles.view, styles.viewFlexBox]}>
            <View
              style={[styles.fluentEmoji3rdPlaceMedal1, styles.parentFlexBox1]}
            >
              <Text style={styles.text2}>4</Text>
            </View>
            <View style={[styles.frameGroup, styles.parentFlexBox1]}>
              <View style={styles.viewFlexBox}>
                <View style={styles.frameChild} />
                <View style={[styles.parent, styles.parentFlexBox1]}>
                  <Text style={[styles.goorm12345, styles.textTypo1]}>
                    goorm12345
                  </Text>
                  <Component22 property1="L6" />
                </View>
              </View>
              <Text style={[styles.text3, styles.textTypo]}>123456점</Text>
            </View>
          </View>
          <View style={[styles.view, styles.viewFlexBox]}>
            <View
              style={[styles.fluentEmoji3rdPlaceMedal1, styles.parentFlexBox1]}
            >
              <Text style={styles.text2}>4</Text>
            </View>
            <View style={[styles.frameGroup, styles.parentFlexBox1]}>
              <View style={styles.viewFlexBox}>
                <View style={styles.frameChild} />
                <View style={[styles.parent, styles.parentFlexBox1]}>
                  <Text style={[styles.goorm12345, styles.textTypo1]}>
                    goorm12345
                  </Text>
                  <Component22 property1="L6" />
                </View>
              </View>
              <Text style={[styles.text3, styles.textTypo]}>123456점</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Component38 />
      <Component11 prop="랭킹" />
      <Component5
        vector={require("../assets/vector6.png")}
        vector1={require("../assets/vector7.png")}
        textColor="#9da5b2"
        textColor1="#2a4ba0"
      />
      <Text style={[styles.text10, styles.top100Typo]}>11.10 22:00 기준</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  top100Typo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    gap: Gap.gap_5xs,
  },
  parentFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo1: {
    color: Color.fontMain,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  textTypo: {
    color: Color.fontSubsub,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  viewFlexBox: {
    gap: Gap.gap_sm,
    alignItems: "center",
    flexDirection: "row",
  },
  top100: {
    top: 135,
    left: 28,
    fontSize: FontSize.totalTitle_size,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  groupIcon: {
    width: 26,
    height: 28,
  },
  fluentEmoji3rdPlaceMedal: {
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  imageIcon: {
    borderRadius: Border.br_lg,
    width: 40,
    height: 40,
  },
  text: {
    fontSize: FontSize.size_mini,
  },
  parent: {
    gap: Gap.gap_7xs,
  },
  text1: {
    fontSize: FontSize.semiTitle_size,
  },
  fluentEmoji3rdPlaceMedalParent: {
    backgroundColor: Color.colorAliceblue_100,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    flex: 1,
  },
  componentParent: {
    alignItems: "flex-end",
    gap: Gap.gap_5xs,
    flexDirection: "row",
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
    backgroundColor: Color.grayWhite,
  },
  text2: {
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray_100,
    textAlign: "center",
    display: "flex",
    fontSize: FontSize.semiTitle_size,
    fontWeight: "600",
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  fluentEmoji3rdPlaceMedal1: {
    overflow: "hidden",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.grayGray1,
    width: 46,
    height: 46,
  },
  goorm12345: {
    fontSize: FontSize.semiTitle_size,
  },
  text3: {
    fontSize: FontSize.size_xl,
  },
  frameGroup: {
    justifyContent: "space-between",
    flex: 1,
  },
  view: {
    padding: Padding.p_5xs,
    alignSelf: "stretch",
  },
  group: {
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  rank1: {
    marginLeft: -185,
    top: 195,
    left: "50%",
    width: 370,
    gap: Gap.gap_3xl,
    maxWidth: 370,
    position: "absolute",
    flex: 1,
  },
  text10: {
    top: 142,
    left: 295,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    color: Color.colorDimgray_400,
  },
  rank: {
    width: "100%",
    height: 917,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.grayWhite,
  },
});

export default Rank;
