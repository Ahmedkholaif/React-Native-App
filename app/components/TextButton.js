import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const TextButton = ({
  action,
  text,
  style,
  textStyle,
  seconds,
  subText,
  ...rest
}) => (
  <TouchableOpacity style={[style]} onPress={action}>
    <Text style={[styles.text, textStyle]}>
      {text + (subText ? subText : "")}
    </Text>
  </TouchableOpacity>
);

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
const styles = EStyleSheet.create({
  text: {
    color: "#9600FF",
    textAlign: "center",
    fontSize: "13rem",
    fontWeight: "500"
  }
});

export default TextButton;
