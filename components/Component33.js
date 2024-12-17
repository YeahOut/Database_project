import * as React from "react";
import { StyleSheet, View } from "react-native";
import Component32 from "./Component32";

const Component33 = () => {
  return (
    <View style={styles.view}>
      <Component32 property="Default" text="전국" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
  },
});

export default Component33;
