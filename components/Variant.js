import * as React from "react";
import { StyleSheet, View } from "react-native";
import Default from "./Default";

const Variant = () => {
  return (
    <View style={styles.variant8}>
      <Default
        prop="모집 중"
        defaultAlignSelf="stretch"
        defaultFlex={1}
        textFontSize={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  variant8: {
    width: 72,
    height: 32,
    flexDirection: "row",
  },
});

export default Variant;
