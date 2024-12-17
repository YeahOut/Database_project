import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Button6 = ({ text = "동료평가 하기" }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("Frame7")}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.subTitle_size,
    fontWeight: "600",
    fontFamily: FontFamily.semiTitle,
    color: Color.grayWhite,
    textAlign: "left",
  },
  button: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue_100,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
  },
});

export default Button6;
