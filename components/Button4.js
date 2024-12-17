import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Button4 = ({
  text = "게시물 수정",
  icbaselineEdit,
  showButton,
  onButtonPress,
}) => {
  const navigation = useNavigation();

  return (
    showButton && (
      <Pressable style={styles.button} onPress={onButtonPress}>
        <Text style={styles.text}>{text}</Text>
        <Image
          style={styles.icbaselineEditIcon}
          contentFit="cover"
          source={icbaselineEdit}
        />
      </Pressable>
    )
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.subContent_size,
    fontWeight: "500",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorSlategray_100,
    textAlign: "left",
  },
  icbaselineEditIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  button: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro_200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_8xs,
    gap: Gap.gap_7xs,
  },
});

export default Button4;
