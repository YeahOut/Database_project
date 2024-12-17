import * as React from "react";
import { StyleSheet, View } from "react-native";
import Component21 from "./Component21";

const Component29 = () => {
  return (
    <View style={styles.view}>
      <Component21 property="Default" text="교내" showView />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
  },
});

export default Component29;
