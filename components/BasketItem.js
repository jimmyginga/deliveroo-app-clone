import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
const BasketItem = ({ qty, imgUrl, restauranteName, value }) => {
  return (
    <View className="flex-row items-center justify-between  bg-white p-3">
      <View className="space-x-2 flex-row items-center">
        <Text className="text-[#00CCBB]">{qty}x</Text>
        <Image source={{ uri: imgUrl }} className="w-10 h-10 rounded-full" />
        <Text className="font-bold">{restauranteName}</Text>
      </View>
      <View className="flex-row space-x-2">
        <Text>
        <Currency quantity={value} currency="USD" />
        </Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketItem;
