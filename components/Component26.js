import * as React from "react";
    import {Text, StyleSheet, View} from "react-native";
import { FontFamily, FontSize, Color, Gap, Border, Padding } from "../GlobalStyles";
    
const Component26 = ({ text="2024 국민건강보험 숏츠/릴스 영상 공모전\n\n■ 공모주제 : “국민건강보험에 관한 모든 것, 무엇이든 말해줘!”\n (예시 : 건강보험 수혜 사례, 건강보험에 바라는 점, 소통과 배려 등 핵심가치 표현)\n- 드라마, 애니메이션, 댄스, 노래, 패러디, 콩트 등 전 장르 가능\n\n■ 참가자격\n- 대한민국 국적을 가진 누구나\n\n■ 접수기간 \n2024.10. 25.(금) ~ 11.22.(금) 18:00까지\n 대학생 대외활동 공모전 채용 사이트 링커리어 https://linkareer.com/" }) => {

  return (
    <View style={styles.view}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo]} />
        <Text style={[styles.httpslinkareercom, styles.textTypo]}>{text}</Text>
      </View>
    </View>);
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiTitle,
    fontWeight: "600",
    fontSize: FontSize.subTitle_size,
    alignSelf: "stretch"
  },
  text: {
    color: Color.fontMain,
    display: "none"
  },
  httpslinkareercom: {
    color: Color.fontSub
  },
  parent: {
    alignItems: "center",
    gap: Gap.gap_sm,
    alignSelf: "stretch"
  },
  view: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.grayInput,
    width: 372,
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_13xl
  }
});

export default Component26;
