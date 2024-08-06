import { View, Text, StatusBar, TouchableOpacity, ScrollView, SafeAreaView, useColorScheme } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";
import Jacket from "../../assets/Homepage/Top_Selling/Jacket.svg";
import Hoodie1 from "../../assets/Homepage/Hoodie1.svg";
import Hoodie2 from "../../assets/Homepage/Hoodie2.svg";
import Hoodie3 from "../../assets/Homepage/Hoodie3.svg";
import Love from "../../assets/Homepage/Top_Selling/Love.svg";
import { useNavigation } from "@react-navigation/native";

export default function MoreCategories() {
	const color = useColorScheme();
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
		<SafeAreaView className={`flex-1 ${color === "light" ? "bg-stone-50" : "bg-gray-900"} px-4 pt-4`}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<StatusBar
					backgroundColor={color === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
					barStyle={color === "light" ? "dark-content" : "light-content"}
				/>
				<TouchableOpacity className="my-4 mr-auto" onPress={() => navigation.goBack()}>
					{color === "light" ? <BackLogo /> : <BackDark />}
				</TouchableOpacity>
				<Text className={`text-xl font-extrabold ${color === "light" ? "text-black" : "text-white"} pb-3`}>Hoodies (240)</Text>

				<View className="flex-row flex-wrap space-y-4 px-3 justify-between items-center">
					{topSellingItems.map((item, index) => (
						<TouchableOpacity
							key={index}
							className={`rounded-xl overflow-hidden pb-5 w-[159] ${color === "light" ? "bg-stone-100" : "bg-gray-700"}`}
							onPress={() => navigation.navigate("Product")}
						>
							<item.icon />
							<TouchableOpacity className=" absolute top-2 right-3">
								<Love />
							</TouchableOpacity>
							<Text
								className={`mt-2 px-1.5 text-base font-medium ${color === "light" ? "text-black" : "text-white"}`}
								numberOfLines={1}
								ellipsizeMode="tail"
							>
								{item.name}
							</Text>
							<View className="flex-row space-x-3">
								<Text className={`mt-1 px-1.5  text-base font-black ${color === "light" ? "text-black" : "text-white"}`}>{item.price}</Text>
								{item.discount && (
									<Text className={`mt-1 text-base ${color === "light" ? "text-stone-500" : "text-gray-400"} line-through`}>
										{item.discount}
									</Text>
								)}
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
