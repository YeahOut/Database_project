import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Top1 from "../../components/Top1";
import Component40 from "../../components/Component40";
import Component39 from "../../components/Component39";
import Component6 from "../../components/Component6";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Top1 />
      <Component40 />
      <Component39 />
      <View style={[styles.view, styles.viewFlexBox]}>
        <View style={styles.viewFlexBox}>
          <View style={styles.tablerpuzzleLayout}>
            <Image
              style={[styles.tablerpuzzleFilledIcon, styles.tablerpuzzleLayout]}
              contentFit="cover"
              source={require("../assets/tablerpuzzlefilled1.png")}
            />
          </View>
          <Text style={styles.mesh}>MESH</Text>
        </View>
        <Image
          style={styles.child}
          contentFit="cover"
          source={require("../assets/frame-1000013779.png")}
        />
      </View>
      <Component6 vector={require("../assets/vector7.png")} />
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/group-1192447912.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  tablerpuzzleLayout: {
    height: 46,
    width: 48,
  },
  tablerpuzzleFilledIcon: {
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  mesh: {
    fontSize: FontSize.totalTitle_size,
    fontFamily: FontFamily.aDLaMDisplay,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
  },
  child: {
    width: 28,
    height: 28,
  },
  view: {
    top: 55,
    right: 20,
    left: 20,
    justifyContent: "space-between",
    position: "absolute",
  },
  homeChild: {
    top: 128,
    left: 233,
    width: 192,
    height: 192,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 917,
    overflow: "hidden",
  },
});

export default Home;
