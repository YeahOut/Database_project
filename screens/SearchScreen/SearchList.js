import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Component19 from "../../components/Component19";
import Component15 from "../../components/Component15";
import Component6 from "../../components/Component6";
import { useNavigation } from "@react-navigation/native";
import Component17 from "../../components/Component17";
import { Gap, FontSize, FontFamily, Color } from "../../GlobalStyles";

const SearchList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchlist}>
      <Component19
        viewRight={20}
        viewLeft={20}
        viewMarginLeft="unset"
        frameViewFlex={1}
        frameViewWidth="unset"
        mingcutesearch2FillOverflow="hidden"
      />
      <View style={styles.iconoirfilterSolidParent}>
        <Image
          style={styles.iconoirfilterSolid}
          contentFit="cover"
          source={require("../assets/iconoirfiltersolid.png")}
        />
        <Component15
          viewBackgroundColor="#fff1b7"
          viewBorderColor="#d0c197"
          viewBackgroundColor1="#ededed"
          viewBorderColor1="#6c757d"
        />
      </View>
      <Text style={styles.text}>총 4개의 검색결과</Text>
      <Component6 vector={require("../assets/vector8.png")} textWidth={21} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Post")}
      >
        <Component17
          title="KPR 대학생 PR 아이디어 제22회 공모전 팀원 모집!!"
          userId="김예나"
          maskGroup={require("../assets/mask-group.png")}
          image={require("../assets/image.png")}
          prop1="24.11.23 오후 14:30"
          prop2="조회수 130"
          prop3={require("../assets/.png")}
        />
        <Component17
          title={`2024 한 해 마무리 & 내년 계획 공모전 함께 해요!`}
          userId="최예진"
          maskGroup={require("../assets/mask-group1.png")}
          image={require("../assets/image1.png")}
          prop1="24.11.10 오후 17:23"
          prop2="조회수 122"
          prop3={require("../assets/1.png")}
        />
        <Component17
          title="2024 퀀텀 챌린지(Quantum Challenge) 프로젝트 멤버 구합니다!"
          userId="서주인"
          maskGroup={require("../assets/mask-group2.png")}
          image={require("../assets/image2.png")}
          prop1="24.11.13 오전 8:00"
          prop2="조회수 110"
          prop3={require("../assets/.png")}
        />
        <Component17
          title="[해커톤 모집] 전체 파트 모집합니다~! 편하게 연락주세요!!"
          userId="이사랑"
          maskGroup={require("../assets/mask-group3.png")}
          image={require("../assets/image3.png")}
          prop1="24.10.03 오후 15:45"
          prop2="조회수 87"
          prop3={require("../assets/1.png")}
        />
        <Component17
          title="Blaybus 실전 앱 개발 경진대회 안드로이드 파트 자리 남았어요!"
          userId="김동국"
          maskGroup={require("../assets/mask-group4.png")}
          image={require("../assets/image4.png")}
          prop1="24.11.30 오후 13:29"
          prop2="조회수 50"
          prop3={require("../assets/1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Frame")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/frame-1192448108.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconoirfilterSolid: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconoirfilterSolidParent: {
    top: 115,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_5xs,
    position: "absolute",
  },
  text: {
    top: 165,
    left: 23,
    fontSize: FontSize.subContent_size,
    fontWeight: "500",
    fontFamily: FontFamily.semiTitle,
    color: Color.colorDimgray_200,
    textAlign: "left",
    position: "absolute",
  },
  pressable: {
    marginLeft: -183,
    top: 194,
    left: "50%",
    width: 365,
    gap: Gap.gap_lg,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 332,
    top: 769,
    width: 64,
    height: 64,
    position: "absolute",
  },
  searchlist: {
    backgroundColor: Color.grayWhite,
    flex: 1,
    height: 917,
    overflow: "hidden",
    width: "100%",
  },
});

export default SearchList;
