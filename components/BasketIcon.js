import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectTotal);
  const navigation = useNavigation()
  const handleNavigation = () => navigation.navigate("Basket")

  if(items.length <= 0) return null
  return (
    <View className="absolute bottom-8 w-full">
      <TouchableOpacity onPress={handleNavigation} className="mx-5 bg-[#00CCBB] p-2 rounded-lg flex-row justify-between items-center space-x-1">
        <Text className="bg-[#02776d] text-white rounded p-2">
          {items?.length}
        </Text>
        <Text className="font-bold text-white">View Basket</Text>
        <Text className="text-white font-bold">
          <Currency quantity={total} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
