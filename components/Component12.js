import * as React from "react";
import { StyleSheet, View } from "react-native";
import Component13 from "./Component13";

const Component12 = () => {
  return (
    <View style={styles.view}>
      <Component13
        prop="기술 스택 추가하기"
        mingcutecheckFill={require("../assets/mingcutecheckfill.png")}
        showBackIcon
        showMingcutecheckFillIcon={false}
        viewWidth={372}
        viewJustifyContent="flex-start"
        viewLeft={0}
        viewTop={0}
        viewPosition="absolute"
        mingcutecheckFillIconOverflow="hidden"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    top: 55,
    left: 20,
    width: 372,
    height: 42,
  },
});

export default Component12;
