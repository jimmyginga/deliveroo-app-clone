import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View className='px-4'>
      <View className='flex-row justify-between mt-4 items-center'>
        <Text>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className='text-xs text-gray-400'>{description}</Text> 
    </View>
  );
};

export default FeaturedRow;
