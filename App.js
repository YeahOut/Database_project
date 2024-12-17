const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Component from "./screens/Component";
import Frame9 from "./screens/Frame9";
import Chat11 from "./screens/Chat11";
import List1 from "./screens/List1";
import Search1 from "./screens/Search1";
import Frame from "./screens/write";
import PostImpl from "./screens/PostImpl";
import Rank from "./screens/Rank";
import Home from "./screens/Home";
import Frame2 from "./screens/Frame2";
import Done from "./screens/Done";
import Component3 from "./screens/Component3";
import Chat1 from "./screens/Chat1";
import Post from "./screens/Post";
import Frame3 from "./screens/Frame3";
import Profile from "./screens/Profile";
import Apply from "./screens/Apply";
import Frame6 from "./screens/Frame6";
import Search from "./screens/Search";
import Frame5 from "./screens/Frame5";
import SearchTap from "./screens/SearchTap";
import Keyword from "./screens/Keyword";
import ProfileEdit from "./screens/ProfileEdit";
import Frame7 from "./screens/test";
import SearchList from "./screens/SearchList";
import My from "./screens/My";
import Frame8 from "./screens/Frame8";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "RubikMonoOne-Regular": require("./assets/fonts/RubikMonoOne-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Component"
              component={Component}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame9"
              component={Frame9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="List1"
              component={List1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search1"
              component={Search1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostImpl"
              component={PostImpl}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rank"
              component={Rank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Done"
              component={Done}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component1"
              component={Component3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat1"
              component={Chat1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Post"
              component={Post}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Apply1"
              component={Apply}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame6"
              component={Frame6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchTap"
              component={SearchTap}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keyword"
              component={Keyword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileEdit"
              component={ProfileEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame7"
              component={Frame7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchList"
              component={SearchList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="My"
              component={My}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame8"
              component={Frame8}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
