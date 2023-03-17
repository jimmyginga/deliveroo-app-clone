import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { XCircleIcon } from "react-native-heroicons/solid";
import BasketItem from "../components/BasketItem";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);

  console.log("==>", typeof groupItemsInBasket)
  useMemo(() => {
    const groupedItems = items.reduce((resutls, item) => {
      (resutls[item.id] = resutls[item.id] || []).push(item);
      return resutls;
    }, {});

    setGroupItemsInBasket(groupedItems);
  }, [items]);
  return (
    <>
      <SafeAreaView className="">
        <View className="p-5 bg-white flex-row justify-between items-center">
          <View></View>
          <View className="items-center">
            <Text className="font-bold text-xl text-justify">Basket</Text>
            <Text>{restaurant.name}</Text>
          </View>
          <XCircleIcon onPress={navigation.goBack} size={40} color="#00CCBB" />
        </View>
        <View className="flex-row items-center p-4 mb-4 bg-white mt-2 space-x-2">
          <Image
            source={{
              uri: "https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s1200d/3_Beautiful-girl-with-a-gentle-smile.jpg",
            }}
            className="w-10 h-10 rounded-full"
          />
          <Text className="flex-1">Deliver at 06:54 am</Text>
          <Text className="text-[#00CCBB]">Change</Text>
        </View>
        <ScrollView>
          {/* {restaurant.} */}
          {Object.entries(groupItemsInBasket).map(([key, item]) => (
            <BasketItem
              key={key}
              qty={item.length}
              imgUrl={item[0]?.imgUrl}
              restauranteName={item[0]?.title}
              value={item[0]?.price}
            />
          ))} 
        </ScrollView>
      </SafeAreaView>
      <View className="absolute bottom-0 py-2 bg-white w-full">
        <View className="flex-row justify-between items-center p-3">
          <Text className="text-gray-500">Subtotal</Text>
          <Text className="text-gray-500">$23</Text>
        </View>
        <View className="flex-row justify-between items-center p-3">
          <Text className="text-gray-500">Delivery fee</Text>
          <Text className="text-gray-500">$23</Text>
        </View>
        <View className="flex-row justify-between items-center p-3">
          <Text className="font-bold">Order Total</Text>
          <Text className="font-bold">$23</Text>
        </View>
        <TouchableOpacity className=" p-5 m-3 bg-[#00CCBB] my-5 rounded-md">
          <Text className="text-white font-bold text-center">Place Order</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BasketScreen;
