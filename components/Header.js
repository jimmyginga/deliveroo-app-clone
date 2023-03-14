import { View, Text, Image, TextInput } from "react-native";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline"

const Header = () => {
  return (
    <>
    <View className="flex-row space-x-3 items-center bg-white py-3 px-2">
      <Image
        source={{
          uri: "https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s1200d/3_Beautiful-girl-with-a-gentle-smile.jpg",
        }}
        className="w-10 h-10 rounded-full"
      />
      
      <View className="flex-1">
        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
        <Text className="font-bold text-lg justify" >Current Location
        <ChevronDownIcon size={20} color="#00CCBB"/>
        </Text>
      </View>
      <UserIcon size={35} color="#00CCBB" />
    </View>

    {/* Search */}
    <View className="flex-row space-x-2 pb-2 bg-white items-center px-2">
        <View className="flex-row bg-gray-200  space-x-2 flex-1 p-3 items-center">
        <MagnifyingGlassIcon size={20} color="grey" />
            <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
    </View>
    </>
  );
};

export default Header;
