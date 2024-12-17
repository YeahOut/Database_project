import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  Padding,
  Color,
  Border,
  FontFamily,
  FontSize,
  Gap,
} from "../GlobalStyles";

const Keyboard1 = ({ configuration = "Base keyboard", style = "Portrait" }) => {
  return (
    <View style={[styles.keyboard, styles.navbarPosition]}>
      <Image
        style={[styles.bottomNavIcon, styles.bottomNavIconLayout]}
        contentFit="cover"
        source={require("../assets/bottom-nav.png")}
      />
      <View style={styles.keyboard1}>
        <View style={styles.firstRow}>
          <View style={[styles.q, styles.qFlexBox]}>
            <View style={[styles.q1, styles.q1FlexBox]}>
              <Text style={[styles.q2, styles.q2Typo]}>q</Text>
            </View>
          </View>
          <View style={[styles.w, styles.qFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>w</Text>
            </View>
          </View>
          <View style={[styles.e, styles.qFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>e</Text>
            </View>
          </View>
          <View style={[styles.r, styles.qFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>r</Text>
            </View>
          </View>
          <View style={[styles.t, styles.qFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>t</Text>
            </View>
          </View>
          <View style={[styles.y, styles.qFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>y</Text>
            </View>
          </View>
          <View style={[styles.u, styles.qFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>u</Text>
            </View>
          </View>
          <View style={[styles.i, styles.qFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>i</Text>
            </View>
          </View>
          <View style={[styles.o, styles.qFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>o</Text>
            </View>
          </View>
          <View style={[styles.p, styles.qFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>p</Text>
            </View>
          </View>
        </View>
        <View style={styles.firstRow}>
          <View style={[styles.a, styles.aFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>a</Text>
            </View>
          </View>
          <View style={[styles.s, styles.sPosition]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>s</Text>
            </View>
          </View>
          <View style={[styles.d, styles.dFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>d</Text>
            </View>
          </View>
          <View style={[styles.f, styles.aFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>f</Text>
            </View>
          </View>
          <View style={[styles.g, styles.aFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>g</Text>
            </View>
          </View>
          <View style={[styles.h, styles.aFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>h</Text>
            </View>
          </View>
          <View style={[styles.j, styles.jPosition]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>j</Text>
            </View>
          </View>
          <View style={[styles.k, styles.kPosition]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>k</Text>
            </View>
          </View>
          <View style={[styles.l, styles.aFlexBox]}>
            <View style={styles.q1FlexBox}>
              <Text style={[styles.q2, styles.q2Typo]}>l</Text>
            </View>
          </View>
        </View>
        <View style={styles.firstRow}>
          <View style={[styles.leftShift, styles.emojiPosition]}>
            <Image
              style={styles.shiftKeyIcon}
              contentFit="cover"
              source={require("../assets/shift-key.png")}
            />
          </View>
          <View style={[styles.thirdRow1, styles.keyPosition]}>
            <View style={[styles.z, styles.zLayout]}>
              <View style={styles.q1FlexBox}>
                <Text style={[styles.q2, styles.q2Typo]}>z</Text>
              </View>
            </View>
            <View style={[styles.x, styles.zLayout]}>
              <View style={styles.q1FlexBox}>
                <Text style={[styles.q2, styles.q2Typo]}>x</Text>
              </View>
            </View>
            <View style={[styles.c, styles.zLayout]}>
              <View style={styles.q1FlexBox}>
                <Text style={[styles.q2, styles.q2Typo]}>c</Text>
              </View>
            </View>
            <View style={[styles.v, styles.zLayout]}>
              <View style={styles.q1FlexBox}>
                <Text style={[styles.q2, styles.q2Typo]}>v</Text>
              </View>
            </View>
            <View style={[styles.b, styles.zLayout]}>
              <View style={styles.q1FlexBox}>
                <Text style={[styles.q2, styles.q2Typo]}>b</Text>
              </View>
            </View>
            <View style={[styles.n, styles.zLayout]}>
              <View style={styles.q1FlexBox}>
                <Text style={[styles.q2, styles.q2Typo]}>n</Text>
              </View>
            </View>
            <View style={[styles.m, styles.zLayout]}>
              <View style={styles.q1FlexBox}>
                <Text style={[styles.q2, styles.q2Typo]}>m</Text>
              </View>
            </View>
          </View>
          <View style={[styles.backspace, styles.emojiPosition]}>
            <Image
              style={styles.shiftKeyIcon}
              contentFit="cover"
              source={require("../assets/backspace.png")}
            />
          </View>
        </View>
        <View style={styles.firstRow}>
          <View style={[styles.view, styles.keyPosition]}>
            <Text style={styles.text}>?123</Text>
          </View>
          <View style={[styles.emoji, styles.emojiPosition]}>
            <Text style={[styles.text1, styles.q2Typo]}>,</Text>
            <Image
              style={styles.emojiIcon}
              contentFit="cover"
              source={require("../assets/emoji.png")}
            />
          </View>
          <View style={[styles.q3, styles.keyPosition]}>
            <Image
              style={styles.shiftKeyIcon}
              contentFit="cover"
              source={require("../assets/language.png")}
            />
          </View>
          <Image
            style={[styles.lightColorKeyBorder03, styles.keyPosition]}
            contentFit="cover"
            source={require("../assets/light-color-key-border03.png")}
          />
          <View style={[styles.period, styles.emojiPosition]}>
            <Text style={[styles.text1, styles.q2Typo]}>.</Text>
          </View>
          <View style={[styles.enterKey, styles.keyPosition]}>
            <Image
              style={styles.shiftKeyIcon}
              contentFit="cover"
              source={require("../assets/keyboard-return.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.navbar, styles.q1FlexBox]}>
        <Image
          style={styles.iconLeft}
          contentFit="cover"
          source={require("../assets/iconleft.png")}
        />
        <View style={styles.iconRowFlexBox}>
          <View style={[styles.iconsCentre, styles.iconRowFlexBox]}>
            <Image
              style={styles.shiftKeyIcon}
              contentFit="cover"
              source={require("../assets/gif.png")}
            />
            <Image
              style={styles.shiftKeyIcon}
              contentFit="cover"
              source={require("../assets/settings.png")}
            />
            <Image
              style={styles.shiftKeyIcon}
              contentFit="cover"
              source={require("../assets/g-translate.png")}
            />
            <Image
              style={styles.shiftKeyIcon}
              contentFit="cover"
              source={require("../assets/sticker.png")}
            />
          </View>
          <View style={styles.dividerLine} />
          <View style={styles.iconsRight}>
            <Image
              style={styles.shiftKeyIcon}
              contentFit="cover"
              source={require("../assets/more-horiz.png")}
            />
            <Image
              style={styles.shiftKeyIcon}
              contentFit="cover"
              source={require("../assets/mic.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarPosition: {
    left: 0,
    right: 0,
  },
  bottomNavIconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  qFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.schemesSurfaceContainerLow,
    borderRadius: Border.br_7xs,
    top: 0,
    height: 46,
    alignItems: "center",
    position: "absolute",
  },
  q1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  q2Typo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_2xl,
  },
  aFlexBox: {
    width: "8.59%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.schemesSurfaceContainerLow,
    top: 0,
    height: 46,
    alignItems: "center",
    position: "absolute",
  },
  sPosition: {
    left: "15.4%",
    right: "76.01%",
    width: "8.59%",
  },
  dFlexBox: {
    left: "25.51%",
    right: "65.91%",
    width: "8.59%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.schemesSurfaceContainerLow,
    borderRadius: Border.br_7xs,
    alignItems: "center",
  },
  jPosition: {
    right: "25.51%",
    borderRadius: Border.br_7xs,
  },
  kPosition: {
    left: "76.01%",
    right: "15.4%",
    width: "8.59%",
    paddingVertical: 0,
  },
  emojiPosition: {
    backgroundColor: Color.m3SysLightSurfaceContainerHighest,
    bottom: "0%",
    top: "0%",
    height: "100%",
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    borderRadius: Border.br_7xs,
    alignItems: "center",
    position: "absolute",
  },
  keyPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  zLayout: {
    width: "12.41%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.schemesSurfaceContainerLow,
    borderRadius: Border.br_7xs,
    alignItems: "center",
    position: "absolute",
  },
  iconRowFlexBox: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bottomNavIcon: {
    height: 36,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  q2: {
    lineHeight: 24,
    color: Color.m3SysLightOnSurface,
  },
  q1: {
    paddingBottom: Padding.p_9xs,
  },
  q: {
    right: "91.36%",
    left: "0%",
    width: "8.64%",
    paddingVertical: 0,
  },
  w: {
    right: "81.21%",
    left: "10.15%",
    width: "8.64%",
    paddingVertical: 0,
  },
  e: {
    right: "71.06%",
    left: "20.3%",
    width: "8.64%",
    paddingVertical: 0,
  },
  r: {
    right: "60.91%",
    left: "30.45%",
    width: "8.64%",
    paddingVertical: 0,
  },
  t: {
    right: "50.76%",
    left: "40.61%",
    width: "8.64%",
    paddingVertical: 0,
  },
  y: {
    right: "40.61%",
    left: "50.76%",
    width: "8.64%",
    paddingVertical: 0,
  },
  u: {
    right: "30.45%",
    left: "60.91%",
    width: "8.64%",
    paddingVertical: 0,
  },
  i: {
    right: "20.3%",
    left: "71.06%",
    width: "8.64%",
    paddingVertical: 0,
  },
  o: {
    right: "10.15%",
    left: "81.21%",
    width: "8.64%",
    paddingVertical: 0,
  },
  p: {
    left: "91.36%",
    right: "0%",
    width: "8.64%",
    paddingVertical: 0,
  },
  firstRow: {
    alignSelf: "stretch",
    height: 46,
  },
  a: {
    left: "5.3%",
    right: "86.11%",
    borderRadius: Border.br_7xs,
    width: "8.59%",
  },
  s: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.schemesSurfaceContainerLow,
    borderRadius: Border.br_7xs,
    top: 0,
    height: 46,
    alignItems: "center",
    position: "absolute",
  },
  d: {
    top: 0,
    position: "absolute",
    height: 46,
  },
  f: {
    right: "55.81%",
    left: "35.61%",
    borderRadius: Border.br_7xs,
    width: "8.59%",
  },
  g: {
    right: "45.71%",
    left: "45.71%",
    borderRadius: Border.br_7xs,
    width: "8.59%",
  },
  h: {
    right: "35.61%",
    left: "55.81%",
    borderRadius: Border.br_7xs,
    width: "8.59%",
  },
  j: {
    left: "65.91%",
    width: "8.59%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.schemesSurfaceContainerLow,
    top: 0,
    height: 46,
    alignItems: "center",
    position: "absolute",
  },
  k: {
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.schemesSurfaceContainerLow,
    left: "76.01%",
    borderRadius: Border.br_7xs,
    top: 0,
    height: 46,
    position: "absolute",
  },
  l: {
    right: "5.3%",
    left: "86.11%",
    borderRadius: Border.br_7xs,
    width: "8.59%",
  },
  shiftKeyIcon: {
    width: 24,
    height: 24,
  },
  leftShift: {
    width: "13.89%",
    paddingVertical: 0,
    flexDirection: "row",
    right: "86.11%",
    left: "0%",
  },
  z: {
    right: "87.59%",
    left: "0%",
  },
  x: {
    right: "72.99%",
    left: "14.6%",
  },
  c: {
    right: "58.39%",
    left: "29.2%",
  },
  v: {
    right: "43.8%",
    left: "43.8%",
  },
  b: {
    right: "29.2%",
    left: "58.39%",
  },
  n: {
    right: "14.6%",
    left: "72.99%",
  },
  m: {
    left: "87.59%",
    right: "0%",
  },
  thirdRow1: {
    width: "69.19%",
    right: "15.4%",
    top: "0%",
    height: "100%",
    left: "15.4%",
  },
  backspace: {
    width: "13.89%",
    paddingVertical: 0,
    flexDirection: "row",
    left: "86.11%",
    right: "0%",
  },
  text: {
    fontSize: FontSize.mainContent_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.m3SysLightOnSecondaryContainer,
    textAlign: "left",
  },
  view: {
    backgroundColor: Color.m3SysLightSecondaryContainer,
    borderRadius: Border.br_81xl,
    width: "13.89%",
    paddingVertical: 0,
    flexDirection: "row",
    right: "86.11%",
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    alignItems: "center",
    left: "0%",
  },
  text1: {
    color: Color.m3SysLightOnSurfaceVariant,
    width: 11,
  },
  emojiIcon: {
    width: 12,
    height: 12,
  },
  emoji: {
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_5xl,
    left: "15.4%",
    right: "76.01%",
    width: "8.59%",
  },
  q3: {
    left: "25.51%",
    right: "65.91%",
    width: "8.59%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.schemesSurfaceContainerLow,
    borderRadius: Border.br_7xs,
    alignItems: "center",
  },
  lightColorKeyBorder03: {
    width: "38.89%",
    maxHeight: "100%",
    right: "25.51%",
    borderRadius: Border.br_7xs,
    left: "35.61%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  period: {
    left: "76.01%",
    right: "15.4%",
    width: "8.59%",
    paddingVertical: 0,
  },
  enterKey: {
    borderRadius: Border.br_491xl,
    backgroundColor: Color.m3SysLightInversePrimary,
    width: "13.89%",
    paddingVertical: 0,
    flexDirection: "row",
    left: "86.11%",
    right: "0%",
    paddingHorizontal: Padding.p_3xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
  keyboard1: {
    top: 52,
    right: 8,
    left: 8,
    gap: Gap.gap_3xs,
    alignItems: "center",
    position: "absolute",
  },
  iconLeft: {
    width: 26,
    height: 26,
    borderRadius: Border.br_81xl,
  },
  iconsCentre: {
    paddingRight: Padding.p_13xl,
    alignItems: "center",
  },
  dividerLine: {
    backgroundColor: Color.m3SysLightOutlineVariant,
    width: 1,
    height: 24,
  },
  iconsRight: {
    justifyContent: "flex-end",
    paddingLeft: Padding.p_xl,
    gap: Gap.gap_4xl,
    flexDirection: "row",
    alignItems: "center",
  },
  navbar: {
    height: 44,
    padding: Padding.p_5xs,
    gap: Gap.gap_xl,
    flexDirection: "row",
    top: 0,
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  keyboard: {
    backgroundColor: Color.m3SysLightSurface,
    height: 338,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
});

export default Keyboard1;
