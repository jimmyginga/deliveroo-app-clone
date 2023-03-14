import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const Restaurant = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown: false
    })
  },[])
  return (
  <ScrollView>
    <View className="relative">
        <Image source={{
            uri: imgUrl
        }} 
        className="w-full h-56 p-6 bg-gray-100"
        />
        <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 bg-gray-100 p-2 rounded-full"
        >
            <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
    </View>
  </ScrollView>
  );
};

export default Restaurant;
