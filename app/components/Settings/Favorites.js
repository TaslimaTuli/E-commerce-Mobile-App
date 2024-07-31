import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";

import Jacket from "../../assets/Homepage/Top_Selling/Jacket.svg";
import Hoodie1 from "../../assets/Homepage/Hoodie1.svg";
import Hoodie2 from "../../assets/Homepage/Hoodie2.svg";
import Hoodie3 from "../../assets/Homepage/Hoodie3.svg";

import Love from "../../assets/Homepage/Top_Selling/RedHeart.svg";

export default function Favorites() {
	const topSellingItems = [
		{ name: "Men's Harrington Jacket", price: "$148.00", icon: Jacket },
		{ name: "Men's Fleece Pullover Hoodie", price: "$100.00", discount: "$100.97", icon: Hoodie1 },
		{ name: "Fleece Skate Hoodie", price: "$110.00", discount: "$100.97", icon: Hoodie2 },
		{ name: "Men's Ice-Dye Pullover Hoodie", price: "$128.97", discount: "$100.97", icon: Hoodie3 },
	];

	return (
		<KeyboardAvoidingView className="flex-1 bg-white" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<SafeAreaView className="flex-1 bg-white">
				<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
				<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white px-4" contentContainerStyle={{ flexGrow: 1 }}>
					{/* header */}
					<View className="flex-row items-center justify-center mt-7 mb-6">
						<TouchableOpacity className="w-0">
							<BackLogo />
						</TouchableOpacity>
						<Text className="text-black font-bold text-xl px-28">My Favorites (12)</Text>
					</View>

					{/* Cards */}
					<View className="flex-row flex-wrap justify-between items-center pb-7">
						{topSellingItems.map((item, index) => (
							<TouchableOpacity key={index} className="bg-stone-100 rounded-xl p-3 mb-4 w-[48%]">
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
		</KeyboardAvoidingView>
	);
}
