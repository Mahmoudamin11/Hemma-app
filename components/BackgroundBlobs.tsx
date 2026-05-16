import { AppColors } from "@/constants/theme/theme.types";
import React from "react";
import {
    StyleSheet,
    View
} from "react-native";


export function BackgroundBlobs({ c }: { c: AppColors }) {
  return (
    <>
      <View
        style={[
          styles.blob,
          {
            width: 240,
            height: 240,
            top: -80,
            right: -80,
            backgroundColor: c.primary,
            opacity: 0.08,
          },
        ]}
      />
      <View
        style={[
          styles.blob,
          {
            width: 160,
            height: 160,
            bottom: 60,
            left: -50,
            backgroundColor: c.secondary,
            opacity: 0.1,
          },
        ]}
      />
      <View
        style={[
          styles.blob,
          {
            width: 100,
            height: 100,
            top: 220,
            left: 20,
            backgroundColor: c.primary,
            opacity: 0.07,
          },
        ]}
      />
    </>
  );
}


const styles = StyleSheet.create({
  blob: { position: "absolute", borderRadius: 999 }
});