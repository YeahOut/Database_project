import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Component13 from "../../components/Component13";
import FrameComponent17 from "../../components/FrameComponent17";
import FrameComponent18 from "../../components/FrameComponent18";
import { Color, Gap } from "../../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Component13
          prop="게시물 작성"
          showBackIcon
          showMingcutecheckFillIcon
          viewWidth={376}
          viewJustifyContent="space-between"
          viewLeft={20}
          viewTop={55}
          viewPosition="absolute"
          mingcutecheckFillIconOverflow="unset"
          onMingcutecheckFillPress={() => navigation.navigate("Done")}
        />
      </View>
      <View style={styles.frameParent}>
        <FrameComponent17 />
        <FrameComponent18 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 107,
    width: 412,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.grayWhite,
  },
  frameParent: {
    top: 135,
    left: 16,
    width: 380,
    gap: Gap.gap_6xl,
    position: "absolute",
  },
  view: {
    flex: 1,
    width: "100%",
    height: 1892,
    overflow: "hidden",
    backgroundColor: Color.grayWhite,
  },
});

export default Frame;
