import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import MenuItem from "../components/MenuItem";
import { restaurants } from "../data/data.json";
import BasketIcon from "../components/BasketIcon";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
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
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
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
    );
  }, [dispatch]);

  return (
    <>
      <ScrollView className="bg-gray-200">
        <View className="relative bg-white">
          <Image
            source={{
              uri: imgUrl,
            }}
            className="w-full h-56 p-6"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 bg-gray-100 p-2 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <Text className="font-bold text-3xl p-3">{title}</Text>
          <View className="flex-row items-center space-x-2 px-3">
            <StarIcon size={20} color="#00CCBB" opacity={0.5} />
            <Text className="text-xs">{rating} - Offers</Text>
            <MapPinIcon size={20} color="#00CCBB" />
            <Text className="text-xs">Nearby - {address}</Text>
          </View>
          <Text className="m-4">{short_description}</Text>
          <View className="flex-row m-3 space-x-2">
            <QuestionMarkCircleIcon size={19} color="grey" />
            <Text className="flex-1 font-bold">Have a food allergy?</Text>
            <ChevronRightIcon color="#00CCBB" />
          </View>
        </View>
        <Text className="m-4 font-bold text-xl">Menu</Text>
        {restaurants[0].dishes.map((restaurant) => (
          <MenuItem
            key={restaurant.id}
            id={restaurant.id}
            title={restaurant.name}
            imgUrl={restaurant.imgUrl}
            desc={restaurant.description}
            price={restaurant.price}
          />
        ))}
      </ScrollView>
      <BasketIcon />
    </>
  );
};

export default RestaurantScreen;
