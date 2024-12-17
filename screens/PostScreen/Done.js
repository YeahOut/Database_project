import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Button3 from "../../components/Button3";
import { FontFamily, FontSize, Color } from "../../GlobalStyles";

const Done = () => {
  return (
    <View style={styles.done}>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.textTypo]}>{`게시물 등록이 성공적으로 
완료되었습니다!`}</Text>
      </View>
      <Button3
        text="게시물 확인하기"
        buttonBackgroundColor="#2a4ba0"
        buttonPosition="absolute"
        buttonRight="unset"
        buttonBottom="unset"
        buttonLeft={20}
        buttonTop={806}
        buttonWidth={372}
        buttonHeight={50}
        buttonAlignSelf="unset"
        textColor="#fff"
        textFontSize={16}
      />
      <Text style={[styles.text1, styles.textTypo]}>홈화면으로 돌아가기</Text>
      <Image
        style={styles.doneChild}
        contentFit="cover"
        source={require("../assets/frame-1192448109.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  text: {
    alignSelf: "stretch",
    fontSize: FontSize.totalTitle_size,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  wrapper: {
    top: 175,
    left: 20,
    width: 335,
    position: "absolute",
  },
  text1: {
    marginLeft: -64,
    top: 758,
    left: "50%",
    fontSize: FontSize.subTitle_size,
    textDecoration: "underline",
    fontWeight: "600",
    color: Color.colorDimgray_300,
    position: "absolute",
  },
  doneChild: {
    top: 343,
    left: 91,
    width: 230,
    height: 230,
    position: "absolute",
    overflow: "hidden",
  },
  done: {
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 917,
    overflow: "hidden",
  },
});

export default Done;
