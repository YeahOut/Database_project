import * as React from "react";
import { StyleSheet, View } from "react-native";
import Default from "./Default";

const Component27 = ({ property1 = "Default" }) => {
  return (
    <View style={styles.root}>
      <Default
        property1="Default"
        prop="모집 중"
        defaultAlignSelf="unset"
        textFontSize={12}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },
});

export default Component27;
