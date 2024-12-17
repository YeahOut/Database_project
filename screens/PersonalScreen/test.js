import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Component13 from "../../components/Component13";
import GroupComponent1 from "../../components/GroupComponent1";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

const Frame7 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.child} />
      <Component13
        prop="동료평가"
        mingcutecheckFill={require("../assets/mingcutecheckfill4.png")}
        showBackIcon
        showMingcutecheckFillIcon
        viewWidth={372}
        viewJustifyContent="space-between"
        viewLeft={20}
        viewTop={55}
        viewPosition="absolute"
        mingcutecheckFillIconOverflow="hidden"
      />
      <Text style={[styles.quantumChallenge, styles.textPosition]}>
        2024 퀀텀 챌린지 (Quantum Challenge)
      </Text>
      <Text style={[styles.text, styles.textTypo]}>{`팀원들의 메시 스코어를 위해
솔직하고 신중하게 동료평가를 남겨주세요`}</Text>
      <View style={styles.goormWrapper}>
        <Text style={[styles.goorm, styles.textTypo]}>@goorm</Text>
      </View>
      <GroupComponent1 prop="참석률" />
      <GroupComponent1
        prop="기여도"
        groupViewTop={490}
        textMarginLeft={-19}
        textTop={11}
        frameViewTop={42}
        textTop1={51}
        textTop2={51}
      />
      <GroupComponent1
        prop="소통"
        groupViewTop={600}
        textMarginLeft={-13}
        textTop={11}
        frameViewTop={42}
        textTop1={51}
        textTop2={51}
      />
      <GroupComponent1
        prop="프로필 경력 및 기술 객관성"
        groupViewTop={710}
        textMarginLeft={-78}
        textTop={12}
        frameViewTop={46}
        textTop1={55}
        textTop2={55}
      />
      <Image
        style={[
          styles.flowbitecaretRightSolidIcon,
          styles.flowbitecaretIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/flowbitecaretrightsolid.png")}
      />
      <Image
        style={[
          styles.flowbitecaretRightSolidIcon1,
          styles.flowbitecaretIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/flowbitecaretrightsolid1.png")}
      />
      <Text style={styles.text1}>1/5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    width: 372,
    left: 20,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "500",
    fontSize: FontSize.subTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  flowbitecaretIconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  child: {
    top: 0,
    left: 0,
    width: 412,
    height: 107,
    position: "absolute",
    backgroundColor: Color.grayWhite,
  },
  quantumChallenge: {
    top: 144,
    fontSize: FontSize.totalTitle_size,
    fontWeight: "700",
    color: Color.colorDimgray_600,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    width: 372,
    left: 20,
  },
  text: {
    top: 225,
    color: Color.colorDimgray_500,
    width: 372,
    left: 20,
    position: "absolute",
    fontWeight: "500",
  },
  goorm: {
    color: Color.grayWhite,
  },
  goormWrapper: {
    marginLeft: -44,
    top: 318,
    left: "50%",
    borderRadius: Border.br_5xs,
    backgroundColor: "rgba(42, 75, 160, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    position: "absolute",
  },
  flowbitecaretRightSolidIcon: {
    top: 325,
    left: 279,
  },
  flowbitecaretRightSolidIcon1: {
    top: 321,
    left: 97,
  },
  text1: {
    top: 825,
    left: 190,
    fontWeight: "600",
    color: Color.colorBlack,
    fontSize: FontSize.subTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    position: "absolute",
  },
  view: {
    flex: 1,
    width: "100%",
    height: 917,
    overflow: "hidden",
    backgroundColor: Color.grayWhite,
  },
});

export default Frame7;
