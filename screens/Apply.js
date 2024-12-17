import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent24 from "../components/FrameComponent24";
import Button3 from "../components/Button3";
import Component13 from "../components/Component13";
import { Color } from "../GlobalStyles";

const Apply = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.apply}>
      <View style={styles.applyInnerPosition}>
        <View style={[styles.groupChild, styles.applyInnerPosition]} />
      </View>
      <FrameComponent24 />
      <Button3
        text="지원하기"
        buttonBackgroundColor="#2a4ba0"
        buttonPosition="absolute"
        buttonRight={20}
        buttonBottom={49}
        buttonLeft={20}
        buttonTop="unset"
        buttonWidth="unset"
        buttonHeight={50}
        buttonAlignSelf="unset"
        textColor="#fff"
        textFontSize={16}
        onButtonPress={() => navigation.navigate("Chat1")}
      />
      <Component13
        prop="지원하기"
        showBackIcon
        showMingcutecheckFillIcon
        viewWidth={372}
        viewJustifyContent="space-between"
        viewLeft={20}
        viewTop={55}
        viewPosition="absolute"
        mingcutecheckFillIconOverflow="unset"
        onMingcutecheckFillPress={() => navigation.navigate("Chat1")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  applyInnerPosition: {
    height: 107,
    width: 412,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.grayWhite,
  },
  apply: {
    flex: 1,
    width: "100%",
    height: 917,
    overflow: "hidden",
    backgroundColor: Color.grayWhite,
  },
});

export default Apply;
