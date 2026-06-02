import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";

const StoryCircle = () => {
  const stories = [
    {
      id: "user1",
      name: "Test user",
      imgUrl:
        "https://www.corporatephotographerslondon.com/wp-content/uploads/2023/02/LinkedIn_Profile_Photo.jpg",
    },
    {
      id: "user2",
      name: "Rahul",
      imgUrl:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "user3",
      name: "Priya",
      imgUrl:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "user4",
      name: "Saniya",
      imgUrl:
        "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      id: "user5",
      name: "Kartik",
      imgUrl:
        "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: "user6",
      name: "Aman",
      imgUrl:
        "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      id: "user7",
      name: "Shreyash",
      imgUrl:
        "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.storyContainer}>
            <Image
              source={{ uri: item.imgUrl }}
              style={styles.storyImage}
            />
            <Text style={styles.storyText}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingLeft: 10,
  },

  storyContainer: {
    alignItems: "center",
    marginRight: 15,
  },

  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3.5,
    borderColor: "#4fbdcc",
  },

  storyText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "500",
  },
});

export default StoryCircle;