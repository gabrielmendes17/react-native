import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Post from "./src/Post";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f76d5d",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "titulo01",
        author: "Filano de tal",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Manduma pindureta quium dia nois paga."
      },
      {
        id: 2,
        title: "titulo02",
        author: "Beltrano de tal",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Manduma pindureta quium dia nois paga."
      },
      {
        id: 3,
        title: "titulo02",
        author: "Beltrano de tal",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Manduma pindureta quium dia nois paga."
      },
      {
        id: 4,
        title: "titulo02",
        author: "Beltrano de tal",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Manduma pindureta quium dia nois paga."
      },
      {
        id: 5,
        title: "titulo02",
        author: "Beltrano de tal",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Manduma pindureta quium dia nois paga."
      },
      {
        id: 6,
        title: "titulo02",
        author: "Beltrano de tal",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Manduma pindureta quium dia nois paga."
      },
      {
        id: 7,
        title: "titulo02",
        author: "Beltrano de tal",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Manduma pindureta quium dia nois paga."
      },
      {
        id: 8,
        title: "titulo02",
        author: "Beltrano de tal",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Manduma pindureta quium dia nois paga."
      }
    ]
  };
  render() {
    const posts = this.state.posts;
    return (
      <View style={styles.container}>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
