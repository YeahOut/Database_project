import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import Component13 from "../../components/Component13";
import Component42 from "../../components/Component42";
import Component26 from "../../components/Component26";
import { useNavigation } from "@react-navigation/native";
import Component16 from "../../components/Component16";
import FrameComponent10 from "../../components/FrameComponent10";
import { Color, FontFamily, FontSize, Gap, Padding } from "../../GlobalStyles";

const Post = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.post}>
      <Component13
        prop="2024 퀀텀 챌린지 (Quantum..."
        mingcutecheckFill={require("../assets/mingcutecheckfill2.png")}
        showBackIcon
        showMingcutecheckFillIcon={false}
        viewWidth={372}
        viewJustifyContent="flex-start"
        viewLeft={20}
        viewTop={55}
        viewPosition="absolute"
        mingcutecheckFillIconOverflow="hidden"
      />
      <ScrollView style={styles.postInner}>
        <View style={styles.parent}>
          <Component42 />
          <View style={[styles.frameChild, styles.childLayout]} />
          <View style={styles.group}>
            <View style={styles.view}>
              <Text style={[styles.text, styles.textTypo1]}>
                {" "}
                프로젝트 상세 정보
              </Text>
              <Component26
                text={`2024 국민건강보험 숏츠/릴스 영상 공모전

■ 공모주제 : “국민건강보험에 관한 모든 것, 무엇이든 말해줘!”
 (예시 : 건강보험 수혜 사례, 건강보험에 바라는 점, 소통과 배려 등 핵심가치 표현)
- 드라마, 애니메이션, 댄스, 노래, 패러디, 콩트 등 전 장르 가능

■ 참가자격
- 대한민국 국적을 가진 누구나

■ 접수기간 
2024.10. 25.(금) ~ 11.22.(금) 18:00까지
대학생 대외활동 공모전 채용 사이트 링커리어 https://linkareer.com/`}
              />
            </View>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={[styles.groupItem, styles.groupPosition]} />
              <Text style={[styles.text1, styles.textTypo]}>프로젝트 정보</Text>
              <Pressable
                style={[styles.pressable, styles.text1Position]}
                onPress={() => navigation.navigate("PostImpl")}
              >
                <Text style={[styles.text2, styles.textTypo]}>팀원 정보</Text>
              </Pressable>
            </View>
            <View style={[styles.frameParent, styles.containerFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text3, styles.textTypo1]}>지원 기간</Text>
                <Component16
                  property1="Default"
                  viewWidth={40}
                  viewHeight={22}
                />
              </View>
              <Text style={[styles.text4, styles.textTypo1]}>
                24.11.10~24.11.24
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <FrameComponent10
        prop={require("../assets/2.png")}
        frameViewBottom={0}
        frameViewWidth="unset"
        frameViewRight={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.grayGray1,
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.semiTitle_size,
  },
  groupPosition: {
    top: 42,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  text1Position: {
    top: 0,
    position: "absolute",
  },
  containerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameChild: {
    borderStyle: "solid",
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.grayGray1,
    alignSelf: "stretch",
  },
  text: {
    color: Color.fontSub,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.semiTitle_size,
    alignSelf: "stretch",
  },
  view: {
    top: 158,
    left: 18,
    width: 378,
    gap: Gap.gap_sm,
    position: "absolute",
  },
  groupChild: {
    width: 411,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.grayGray1,
  },
  groupItem: {
    borderColor: Color.colorDarkslateblue_100,
    borderTopWidth: 3,
    width: 211,
    height: 3,
  },
  text1: {
    left: 49,
    width: 109,
    top: 0,
    position: "absolute",
    color: Color.fontSub,
  },
  text2: {
    color: Color.colorDarkgray_400,
  },
  pressable: {
    left: 261,
  },
  lineParent: {
    top: 76,
    height: 42,
    left: 0,
    width: 410,
    position: "absolute",
  },
  text3: {
    color: Color.fontSub,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.semiTitle_size,
  },
  container: {
    padding: Padding.p_3xs,
    gap: Gap.gap_5xs,
    justifyContent: "center",
  },
  text4: {
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.semiTitle_size,
  },
  frameParent: {
    left: 22,
    width: 370,
    justifyContent: "space-between",
    top: 0,
    position: "absolute",
  },
  group: {
    height: 582,
    width: 410,
  },
  parent: {
    top: 8,
    left: -6,
    gap: 19,
    justifyContent: "center",
    alignItems: "center",
    width: 410,
    position: "absolute",
    overflow: "hidden",
  },
  postInner: {
    top: 107,
    left: 8,
    width: 384,
    maxWidth: 384,
    position: "absolute",
    flex: 1,
  },
  post: {
    backgroundColor: Color.grayWhite,
    width: "100%",
    height: 917,
    overflow: "hidden",
    flex: 1,
  },
});

export default Post;
