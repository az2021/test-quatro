import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function BaseScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.view]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});


export default BaseScreen;
