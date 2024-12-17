import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import FrameComponent13 from "./FrameComponent13";
import { FontSize, FontFamily, Color, Border, Gap } from "../GlobalStyles";

const Component39 = () => {
  return (
    <View style={styles.view}>
      <Text style={[styles.mesh, styles.meshTypo]}>MESH를 소개합니다!</Text>
      <View style={styles.inner}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.mesh1, styles.textPosition]}>MESH</Text>
          <Text style={[styles.text, styles.textPosition]}>
            <Text
              style={[styles.text1, styles.meshTypo1]}
            >{`지역을 넘어 능력으로 엮이는 
`}</Text>
            <Text style={styles.text2}>팀 빌딩의 새로운 기준</Text>
          </Text>
        </View>
      </View>
      <View style={styles.child}>
        <FrameComponent13
          ellipse2={require("../assets/ellipse-2.png")}
          ellipse3={require("../assets/ellipse-3.png")}
          ellipse4={require("../assets/ellipse-3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  meshTypo: {
    textAlign: "left",
    fontSize: FontSize.semiTitle_size,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 129,
    width: 372,
    position: "absolute",
  },
  textPosition: {
    left: 23,
    position: "absolute",
  },
  meshTypo1: {
    fontWeight: "600",
    fontFamily: FontFamily.semiTitle,
  },
  mesh: {
    color: Color.colorGray_500,
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslateblue_100,
  },
  mesh1: {
    top: 20,
    fontSize: FontSize.totalTitle_size,
    fontFamily: FontFamily.aDLaMDisplay,
    color: Color.colorGold_100,
    textAlign: "center",
  },
  text1: {
    fontFamily: FontFamily.semiTitle,
  },
  text2: {
    fontWeight: "800",
    fontFamily: FontFamily.semiTitle,
  },
  text: {
    top: 64,
    color: Color.grayWhite,
    textAlign: "left",
    fontSize: FontSize.semiTitle_size,
  },
  inner: {
    height: 129,
    width: 372,
  },
  child: {
    alignSelf: "stretch",
  },
  view: {
    marginLeft: -186,
    top: 136,
    left: "50%",
    gap: Gap.gap_xl,
    width: 372,
    position: "absolute",
  },
});

export default Component39;
