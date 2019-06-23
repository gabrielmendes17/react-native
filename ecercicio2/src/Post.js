import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { bold } from "ansi-colors";

const white = "#FFF";
const title = "#333";

const Post = ({ data }) => (
  <View style={styles.post}>
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.author}>{data.author}</Text>
    <Text>{data.content}</Text>
  </View>
);

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#ede4e3",
    padding: 20,
    marginTop: 20,
    borderRadius: 7.5
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: title
  },
  author: {
    fontSize: 14,
    paddingBottom: 20,
    color: "#7a7777"
  }
});

export default Post;
