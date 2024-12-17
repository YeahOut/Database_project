import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FrameComponent3 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.searchInner}
      onPress={() => navigation.navigate("Keyword")}
    >
      <View style={styles.keywordParent}>
        <Text style={styles.keyword}>🗝️ keyword 설정하기</Text>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back-icon1.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  keyword: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_600,
    textAlign: "left",
  },
  backIcon: {
    width: 22,
    height: 20,
    overflow: "hidden",
  },
  keywordParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchInner: {
    position: "absolute",
    top: 132,
    left: 20,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorOldlace,
    width: 372,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xl,
    overflow: "hidden",
  },
});

export default FrameComponent3;
