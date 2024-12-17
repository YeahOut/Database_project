import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent4 from "./FrameComponent4";
import Button4 from "./Button4";

const FrameComponent32 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <FrameComponent4 />
      <Button4
        text="내 정보 수정"
        icbaselineEdit={require("../assets/icbaselineedit1.png")}
        showButton
        onButtonPress={() => navigation.navigate("ProfileEdit")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default FrameComponent32;
