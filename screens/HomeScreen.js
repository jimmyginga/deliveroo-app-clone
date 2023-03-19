import { ScrollView } from "react-native";
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
          title="Reataurants near you"
          description="List of restaurants closest to you"
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
          title="Featured dishes"
          description="Check out the list of featured dishes"
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
          title="Desserts"
          description="Check out the best desserts for you"
          featuredCategory="featured"
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        style={{marginBottom: 150}}>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imgUrl={restaurant.imgUrl}
              title={restaurant.name}
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
