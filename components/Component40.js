import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Gap } from "../GlobalStyles";

const Component40 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={[styles.text, styles.textTypo1]}>팀빌딩 시작하기</Text>
      <View style={styles.groupParent}>
        <View style={styles.frameWrapper}>
          <Pressable
            style={[styles.parent, styles.groupLayout]}
            onPress={() => navigation.navigate("List1")}
          >
            <Text style={[styles.text1, styles.textTypo]}>
              <Text style={[styles.text2, styles.textTypo1]}>{`나에게 
맞는 `}</Text>
              <Text style={styles.text3}>팀 찾기</Text>
            </Text>
            <Image
              style={styles.frame11924479081}
              contentFit="cover"
              source={require("../assets/frame-1192447908-1.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={[styles.group, styles.groupLayout]}
          onPress={() => navigation.navigate("Frame")}
        >
          <Text style={[styles.text4, styles.textTypo]}>
            <Text style={[styles.text2, styles.textTypo1]}>{`함께 할
`}</Text>
            <Text style={styles.text3}>팀원 구하기</Text>
          </Text>
          <Image
            style={styles.group11924479171}
            contentFit="cover"
            source={require("../assets/group-1192447917-1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    fontWeight: "600",
    fontFamily: FontFamily.semiTitle,
  },
  groupLayout: {
    overflow: "hidden",
    backgroundColor: Color.colorGold_200,
    borderRadius: Border.br_3xs,
    width: 180,
    top: 0,
    height: 162,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorDarkslateblue_300,
    fontSize: FontSize.size_xl,
    top: 97,
    position: "absolute",
  },
  text: {
    alignSelf: "stretch",
    fontSize: FontSize.semiTitle_size,
    color: Color.colorGray_500,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  text2: {
    fontFamily: FontFamily.semiTitle,
  },
  text3: {
    fontWeight: "800",
    fontFamily: FontFamily.semiTitle,
  },
  text1: {
    left: 71,
  },
  frame11924479081: {
    top: -70,
    left: -53,
    width: 213,
    height: 213,
    position: "absolute",
  },
  parent: {
    left: 0,
    backgroundColor: Color.colorGold_200,
    borderRadius: Border.br_3xs,
  },
  frameWrapper: {
    width: 180,
    top: 0,
    left: 0,
    height: 162,
    position: "absolute",
  },
  text4: {
    left: 76,
  },
  group11924479171: {
    top: -89,
    left: -44,
    width: 271,
    height: 269,
    position: "absolute",
  },
  group: {
    left: 192,
  },
  groupParent: {
    height: 162,
    width: 372,
  },
  view: {
    marginLeft: -186,
    top: 354,
    left: "50%",
    alignItems: "center",
    gap: Gap.gap_xl,
    width: 372,
    position: "absolute",
  },
});

export default Component40;
