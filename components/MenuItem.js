import { useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const MenuItem = ({ id, title, desc, imgUrl, price }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const addItem = () => {
     dispatch(addToBasket({ id, title, desc, imgUrl, price }));
  }; 
  const removeItem = () => {
    if(! items.length > 0 )return
     dispatch(removeFromBasket({id}));
  };
  return (
    <TouchableOpacity>
      <View className="flex-row bg-white p-3">
        <View className="flex-1">
          <Text className="font-bold text-lg">{title}</Text>
          <Text>{desc}</Text>
          <Text>$ {price}</Text>
        </View>
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-20 h-30"
        />
      </View>
      <View className="flex-row items-center space-x-2 bg-white p-2 mb-3">
        <TouchableOpacity disabled={!items.length} onPress={removeItem}>
          <MinusCircleIcon size={25} color="#00CCBB" />
        </TouchableOpacity>
        <Text>{items?.length}</Text>
        <TouchableOpacity onPress={addItem}>
          <PlusCircleIcon size={25} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
