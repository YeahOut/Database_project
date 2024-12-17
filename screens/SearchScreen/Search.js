import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Top2 from "../../components/Top2";
import Top3 from "../../components/Top3";
import Component19 from "../../components/Component19";
import FrameComponent3 from "../../components/FrameComponent3";
import {
  FontFamily,
  FontSize,
  Padding,
  Color,
  Border,
  Gap,
} from "../../GlobalStyles";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.search}>
      <View style={styles.view}>
        <View style={styles.view1}>
          <Text style={[styles.text, styles.textTypo]}>최근 검색어</Text>
          <View style={styles.view2}>
            <View style={styles.buttonSpaceBlock}>
              <Text style={[styles.text1, styles.textTypo]}>코딩 공모전</Text>
            </View>
            <View style={[styles.button1, styles.buttonSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>디자인 공모전</Text>
            </View>
            <View style={[styles.button1, styles.buttonSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>삼성</Text>
            </View>
            <View style={[styles.button1, styles.buttonSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>토스</Text>
            </View>
            <View style={[styles.button1, styles.buttonSpaceBlock]}>
              <Text style={[styles.text1, styles.textTypo]}>토스뱅크</Text>
            </View>
          </View>
        </View>
        <Top2 />
        <Top3 />
      </View>
      <Component19
        viewRight="unset"
        viewLeft="50%"
        viewMarginLeft={-186}
        frameViewWidth={334}
        mingcutesearch2FillOverflow="unset"
        onMingcutesearch2FillPress={() => navigation.navigate("SearchList")}
      />
      <FrameComponent3 />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontSize: FontSize.size_mini,
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    backgroundColor: Color.grayInput,
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  text1: {
    fontWeight: "500",
    color: Color.colorDimgray_100,
  },
  button1: {
    flexDirection: "row",
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    backgroundColor: Color.grayInput,
    borderRadius: Border.br_xl,
  },
  view2: {
    flexWrap: "wrap",
    alignContent: "center",
    rowGap: 8,
    columnGap: 12,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  view1: {
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  view: {
    position: "absolute",
    top: 227,
    right: 20,
    left: 20,
    gap: 54,
  },
  search: {
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 917,
    overflow: "hidden",
  },
});

export default Search;
