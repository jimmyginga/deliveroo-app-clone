import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const DeliveryScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-10">
        <View className="flex-row justify-between items-center p-3">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={25} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-lg text-white">Order Help</Text>
        </View>

        <View className="bg-white mx-5 py-10 px-3 rounded-md">
          <View className="flex-row">
            <View>
              <Text className="text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45 - 55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://media4.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif",
              }}
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="text-gray-400 mt-5">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-14 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white px-5 pb-5 flex-row items-center space-x-2">
      <Image
        source={{
          uri: "https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s1200d/3_Beautiful-girl-with-a-gentle-smile.jpg",
        }}
        className="w-10 h-10 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-xl">Isa Samuel</Text>
        <Text className="text-gray-400">Your Rider</Text>
      </View>
      <Text className="text-[#00CCBB] font-bold text-xl">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
