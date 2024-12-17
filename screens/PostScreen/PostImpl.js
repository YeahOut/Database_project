import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Component13 from "../../components/Component13";
import FrameComponent10 from "../../components/FrameComponent10";
import Component21 from "../../components/Component21";
import Component37 from "../../components/Component37";
import {
  Color,
  FontFamily,
  Gap,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";

const PostImpl = () => {
  return (
    <View style={styles.postimpl}>
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
      <View style={styles.lineParent}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <View style={styles.groupItem} />
        <Text style={styles.text}>프로젝트 정보</Text>
        <Text style={[styles.text1, styles.textTypo1]}>팀원 정보</Text>
      </View>
      <View style={styles.postimplChild} />
      <FrameComponent10 prop={require("../assets/2.png")} />
      <ScrollView style={styles.parent}>
        <View style={[styles.view, styles.viewPosition]}>
          <Text style={[styles.text2, styles.textTypo1]}>게시물 키워드</Text>
          <View style={styles.groupFlexBox}>
            <Component21
              property="New value"
              text="# 일반 기획"
              showView
              keywordFontWeight="500"
              keywordFontFamily="Pretendard"
            />
            <Component21
              property="New value"
              text="# 서비스 기획"
              showView
              keywordFontWeight="500"
              keywordFontFamily="Pretendard"
            />
            <Component21
              property="New value"
              text="# PM"
              showView
              keywordFontWeight="500"
              keywordFontFamily="Pretendard"
            />
            <Component21
              property="New value"
              text="# 데이터 분석"
              showView
              keywordFontWeight="500"
              keywordFontFamily="Pretendard"
            />
            <Component21
              property="New value"
              text="# 웹디자인"
              showView
              keywordFontWeight="500"
              keywordFontFamily="Pretendard"
            />
          </View>
          <View style={[styles.container, styles.groupFlexBox]}>
            <Component21
              property="New value"
              text="# 일반 기획"
              showView={false}
              keywordFontWeight="500"
              keywordFontFamily="Pretendard"
            />
            <Component21
              property="New value"
              text="# PM"
              showView={false}
              keywordFontWeight="500"
              keywordFontFamily="Pretendard"
            />
            <Component21
              property="New value"
              text="# 웹디자인"
              showView={false}
              keywordFontWeight="500"
              keywordFontFamily="Pretendard"
            />
          </View>
        </View>
        <View style={[styles.frameChild, styles.childLayout]} />
        <Component37 />
        <View style={[styles.view1, styles.viewPosition]}>
          <Text style={[styles.text2, styles.textTypo1]}> 우대사항</Text>
          <View style={styles.frameView}>
            <View style={styles.view2}>
              <View style={styles.parent1}>
                <Text style={styles.text4}>{`기획            | `}</Text>
                <Text style={styles.textTypo}>
                  pm 경험 있으신 분 우대합니다!
                </Text>
              </View>
            </View>
            <View style={styles.view2}>
              <View style={styles.parent1}>
                <Text style={styles.text4}>{`디자인        | `}</Text>
                <Text style={[styles.text6, styles.textTypo]}>
                  미니멀 디자인과 아이콘 제작 경험 있으신 분 구합니다!!
                </Text>
              </View>
            </View>
            <View style={styles.view2}>
              <View style={styles.parent1}>
                <Text style={styles.text4}>{`백엔드        | `}</Text>
                <Text style={styles.textTypo}>따로 없습니다</Text>
              </View>
            </View>
            <View style={styles.view2}>
              <View style={styles.parent1}>
                <Text style={styles.text4}>{`프론트엔드 | `}</Text>
                <Text style={[styles.text10, styles.textTypo]}>
                  웹 앱 프로젝트 가능하신 분이면 좋겠습니다!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 1,
    width: 413,
    borderTopWidth: 1,
    borderColor: Color.grayGray1,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo1: {
    color: Color.fontSub,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  viewPosition: {
    gap: Gap.gap_sm,
    width: 370,
    left: "50%",
    marginLeft: -188,
    position: "absolute",
  },
  groupFlexBox: {
    columnGap: 12,
    rowGap: 8,
    alignContent: "center",
    flexWrap: "wrap",
    overflow: "hidden",
    width: 367,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontWeight: "500",
    fontSize: FontSize.subTitle_size,
    color: Color.fontSub,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
  },
  groupChild: {
    top: 63,
    left: 0,
  },
  groupItem: {
    top: 0,
    left: 1,
    width: 410,
    height: 60,
    position: "absolute",
    backgroundColor: Color.grayWhite,
  },
  text: {
    left: 49,
    color: Color.colorDarkgray_400,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    top: 21,
    position: "absolute",
  },
  text1: {
    left: 262,
    fontSize: FontSize.size_xl,
    top: 21,
    color: Color.fontSub,
    position: "absolute",
  },
  lineParent: {
    top: 97,
    left: -1,
    width: 412,
    height: 63,
    position: "absolute",
  },
  postimplChild: {
    top: 159,
    left: 205,
    borderColor: Color.colorDarkslateblue_100,
    borderTopWidth: 3,
    width: 212,
    height: 3,
    borderStyle: "solid",
    position: "absolute",
  },
  text2: {
    fontSize: FontSize.semiTitle_size,
    alignSelf: "stretch",
  },
  container: {
    height: 28,
  },
  view: {
    top: 830,
  },
  frameChild: {
    top: 803,
    left: -12,
  },
  text4: {
    color: Color.colorGray_100,
    fontSize: FontSize.subTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
  },
  parent1: {
    gap: Gap.gap_xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  view2: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayInput,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_lg,
    alignSelf: "stretch",
  },
  text6: {
    width: 246,
  },
  text10: {
    flex: 1,
  },
  frameView: {
    gap: Gap.gap_5xs,
    alignSelf: "stretch",
  },
  view1: {
    top: 26,
  },
  parent: {
    top: 160,
    left: 12,
    width: 392,
    maxWidth: 392,
    position: "absolute",
    flex: 1,
  },
  postimpl: {
    width: "100%",
    height: 917,
    flex: 1,
    backgroundColor: Color.grayWhite,
  },
});

export default PostImpl;
