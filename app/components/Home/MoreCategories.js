import { View, Text, StatusBar, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import Jacket from "../../assets/Homepage/Top_Selling/Jacket.svg";
import Hoodie1 from "../../assets/Homepage/Hoodie1.svg";
import Hoodie2 from "../../assets/Homepage/Hoodie2.svg";
import Hoodie3 from "../../assets/Homepage/Hoodie3.svg";
import Love from "../../assets/Homepage/Top_Selling/Love.svg";
import { useNavigation } from "@react-navigation/native";

export default function MoreCategories() {
	const navigation = useNavigation();

	const topSellingItems = [
		{ name: "Men's Harrington Jacket", price: "$148.00", icon: Jacket },
		{ name: "Men's Fleece Pullover Hoodie", price: "$100.00", discount: "$100.97", icon: Hoodie1 },
		{ name: "Fleece Skate Hoodie", price: "$110.00", discount: "$100.97", icon: Hoodie2 },
		{ name: "Men's Ice-Dye Pullover Hoodie", price: "$128.97", discount: "$100.97", icon: Hoodie3 },
		{ name: "Men's Harrington Jacket", price: "$148.00", icon: Jacket },
		{ name: "Men's Fleece Pullover Hoodie", price: "$100.00", discount: "$100.97", icon: Hoodie1 },
		{ name: "Fleece Skate Hoodie", price: "$110.00", discount: "$100.97", icon: Hoodie2 },
		{ name: "Men's Ice-Dye Pullover Hoodie", price: "$128.97", discount: "$100.97", icon: Hoodie3 },
	];

	return (
		<SafeAreaView className="flex-1 bg-stone-50 px-4 pt-7">
			<ScrollView showsVerticalScrollIndicator={false}>
				<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
				<TouchableOpacity className="my-4 mr-auto " onPress={() => navigation.goBack()}>
					<BackLogo />
				</TouchableOpacity>
				<Text className="text-xl font-extrabold text-black pb-5">Hoodies (240)</Text>

				<View className="flex-row flex-wrap justify-between items-center">
					{topSellingItems.map((item, index) => (
						<TouchableOpacity key={index} className="bg-stone-100 rounded-xl p-3 mb-4 w-[48%]" onPress={() => navigation.navigate("Product")}>
							<TouchableOpacity className="items-end mb-2">
								<Love />
							</TouchableOpacity>
							<View className="items-center justify-center">
								<item.icon />
							</View>
							<Text className="mt-2 text-lg text-black font-medium" numberOfLines={1} ellipsizeMode="tail">
								{item.name}
							</Text>
							<View className="flex-row space-x-3 mb-2">
								<Text className="mt-1 text-base text-black font-black">{item.price}</Text>
								{/* {item.discount && <Text className="mt-1 text-base text-stone-500 line-through">{item.discount}</Text>} */}
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
