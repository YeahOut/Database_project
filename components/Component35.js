import * as React from "react";
import { StyleSheet, View } from "react-native";
import Component13 from "./Component13";

const Component35 = () => {
  return (
    <View style={styles.view}>
      <Component13
        prop="키워드 설정"
        mingcutecheckFill={require("../assets/mingcutecheckfill1.png")}
        showBackIcon
        showMingcutecheckFillIcon={false}
        viewWidth={372}
        viewJustifyContent="flex-start"
        viewLeft="unset"
        viewTop="unset"
        viewPosition="unset"
        mingcutecheckFillIconOverflow="hidden"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    top: 55,
    right: 20,
    left: 20,
    flexDirection: "row",
  },
});

export default Component35;
