import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button3 from "./Button3";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button5 = ({
  buttonBorderTopRightRadius,
  buttonBackgroundColor,
  buttonBorderTopLeftRadius,
}) => {
  const button3Style = useMemo(() => {
    return {
      ...getStyleValue("borderTopRightRadius", buttonBorderTopRightRadius),
      ...getStyleValue("backgroundColor", buttonBackgroundColor),
      ...getStyleValue("borderTopLeftRadius", buttonBorderTopLeftRadius),
    };
  }, [
    buttonBorderTopRightRadius,
    buttonBackgroundColor,
    buttonBorderTopLeftRadius,
  ]);

  const navigation = useNavigation();

  return (
    <View style={[styles.button, button3Style]}>
      <Text style={[styles.text, styles.textLayout]}>
        <Text
          style={styles.text1}
        >{`🔔 [디자이너 한명 구합니다] 모집 공고에 `}</Text>
        <Text style={styles.text2}>디자인 파트</Text>
        <Text style={styles.text1}> 지원이 전달되었습니다.</Text>
      </Text>
      <View style={styles.figmaXdWrapper}>
        <Text style={[styles.figmaXd, styles.textLayout]}>
          figma / xd 다룰 수 있고 프로젝트 경험 있습니다! 프로필 확인
          부탁드립니다.
        </Text>
      </View>
      <Button3
        text="프로필 확인하러 가기"
        buttonBackgroundColor="#2a4ba0"
        buttonPosition="unset"
        buttonRight="unset"
        buttonBottom="unset"
        buttonLeft="unset"
        buttonTop="unset"
        buttonWidth="unset"
        buttonHeight={42}
        buttonAlignSelf="stretch"
        textColor="#fff"
        textFontSize={14}
        onButtonPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    maxWidth: 202,
    textAlign: "left",
  },
  text1: {
    fontWeight: "600",
    color: Color.colorBlack,
    fontFamily: FontFamily.semiTitle,
  },
  text2: {
    fontWeight: "700",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.semiTitle,
  },
  text: {
    fontSize: FontSize.size_mini,
  },
  figmaXd: {
    flex: 1,
    fontSize: FontSize.mainContent_size,
    fontWeight: "500",
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.semiTitle,
  },
  figmaXdWrapper: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayWhite,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_xs,
    justifyContent: "center",
  },
  button: {
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.grayInput,
    padding: Padding.p_base,
    gap: Gap.gap_4xs,
    justifyContent: "center",
  },
});

export default Button5;
