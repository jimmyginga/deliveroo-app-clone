import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg"
        title="Sushi"
      />
    </ScrollView>
  );
};

export default Categories;
