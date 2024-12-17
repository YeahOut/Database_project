import * as React from "react";
import { StyleSheet, View } from "react-native";
import FrameComponent4 from "./FrameComponent4";
import Button4 from "./Button4";
import { Gap } from "../GlobalStyles";

const FrameComponent21 = () => {
  return (
    <View style={styles.frameParent}>
      <FrameComponent4 />
      <Button4
        text="게시물 수정"
        icbaselineEdit={require("../assets/icbaselineedit1.png")}
        showButton={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_xl,
  },
});

export default FrameComponent21;
