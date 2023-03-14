import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
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
        })
      }
      className="bg-white m-4 shadow"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-[100%] rounded-sm"
      />
      <View className="m-2 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row space-x-2 items-center">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-sm text-gray-500">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-center">Neraby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
