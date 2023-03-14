import { View, Text, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/data.json";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <Categories />
        <FeaturedRow
          id="123"
          title="Pratos Títicos"
          description="Confira os pratos típicos dos restaurantes associados a nós"
          featuredCategory="featured"
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imgUrl={restaurant.imgUrl}
              title={restaurant.title}
              rating={restaurant.rating}
              genre={restaurant.genre}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
        </ScrollView>
        <FeaturedRow
          id="1234"
          title="Pratos principais"
          description="Confira a lista de pratos principais"
          featuredCategory="featured"
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imgUrl={restaurant.imgUrl}
              title={restaurant.title}
              rating={restaurant.rating}
              genre={restaurant.genre}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
        </ScrollView>
        <FeaturedRow
          id="1235"
          title="Sobremesas"
          description="Payments"
          featuredCategory="featured"
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        style={{marginBottom: 150}}>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imgUrl={restaurant.imgUrl}
              title={restaurant.title}
              rating={restaurant.rating}
              genre={restaurant.genre}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
