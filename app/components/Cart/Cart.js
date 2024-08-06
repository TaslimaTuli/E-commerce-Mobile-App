import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, useColorScheme, Platform } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";

import Order1 from "../../assets/Cart/Order1.svg";
import Order2 from "../../assets/Cart/Order2.svg";

import Discount from "../../assets/Cart/Discount.svg";
import Arrow from "../../assets/Cart/Arrow_Violet.svg";

import Plus from "../../assets/Homepage/Products/Plus.svg";
import Minus from "../../assets/Homepage/Products/Minus.svg";

export default function Cart() {
	const navigation = useNavigation();
	const colorScheme = useColorScheme();

	const orders = [
		{ orderName: "Men's Harrington Jacket", price: "$148.00", icon: Order1, size: "M", color: "Lemon" },
		{ orderName: "Men's Coaches Jacket", price: "$52.00", icon: Order2, size: "M", color: "Black" },
	];

	return (
		<KeyboardAvoidingView
			className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"}`}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<SafeAreaView className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"}`}>
				<StatusBar
					backgroundColor={colorScheme === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
					barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
				/>
				<ScrollView
					showsVerticalScrollIndicator={false}
					className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"} px-4`}
					contentContainerStyle={{ flexGrow: 1 }}
				>
					{/* header */}
					<View className="flex-row items-center justify-center mt-5">
						<TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
							{colorScheme === "light" ? <BackLogo /> : <BackDark />}
						</TouchableOpacity>
						<Text className={`font-bold text-xl px-28 mr-14 ${colorScheme === "light" ? "text-black" : "text-white"}`}>Cart</Text>
					</View>
					{/* Remove all */}
					<View className="items-end pb-1">
						<TouchableOpacity className="w-20 items-center">
							<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>Remove All</Text>
						</TouchableOpacity>
					</View>
					<View className="flex-grow mb-6">
						{orders.map((order, index) => (
							<View
								key={index}
								className={`flex-col py-3 px-2 mt-2 rounded-lg shadow-sm ${
									colorScheme === "light" ? "bg-stone-100 shadow-stone-500" : "bg-gray-700 shadow-gray-500"
								}`}
							>
								<View className="flex-row items-center">
									<order.icon />
									<View className="flex-col flex-1 pl-2">
										<Text className={`text-base ${colorScheme === "light" ? "text-black" : "text-white"}`}>{order.orderName}</Text>
										<View className="flex-row items-center py-2">
											<Text className={`text-sm font-bold ${colorScheme === "light" ? "text-stone-400" : "text-gray-400"}`}>
												Size - <Text className={colorScheme === "light" ? "text-black" : "text-white"}>{order.size}</Text>
											</Text>
											<Text className={`text-sm font-bold px-2 ${colorScheme === "light" ? "text-stone-400" : "text-gray-400"}`}>
												Color - <Text className={colorScheme === "light" ? "text-black" : "text-white"}>{order.color}</Text>
											</Text>
										</View>
									</View>
									<View className="flex-col justify-end items-center space-y-2">
										<Text className={`text-sm font-bold ml-5 ${colorScheme === "light" ? "text-black" : "text-white"}`}>{order.price}</Text>
										<View className="flex-row justify-end items-center mr-2">
											<TouchableOpacity className="mr-2">
												<Plus height={25} width={25} />
											</TouchableOpacity>
											<TouchableOpacity>
												<Minus height={25} width={25} />
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						))}
					</View>
					<View className="py-2 mt-auto">
						<View className="flex-row justify-between py-1 px-4">
							<Text className={`text-lg ${colorScheme === "light" ? "text-stone-400" : "text-gray-400"}`}>Subtotal</Text>
							<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>$200</Text>
						</View>
						<View className="flex-row justify-between py-1 px-4">
							<Text className={`text-lg ${colorScheme === "light" ? "text-stone-400" : "text-gray-400"}`}>Shipping Cost</Text>
							<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>$8.00</Text>
						</View>
						<View className="flex-row justify-between py-1 px-4">
							<Text className={`text-lg ${colorScheme === "light" ? "text-stone-400" : "text-gray-400"}`}>Tax</Text>
							<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>$0.00</Text>
						</View>
						<View className="flex-row justify-between py-1 px-4 mb-6">
							<Text className={`text-lg ${colorScheme === "light" ? "text-stone-400" : "text-gray-400"}`}>Total</Text>
							<Text className={`text-lg font-bold ${colorScheme === "light" ? "text-black" : "text-white"}`}>$208.00</Text>
						</View>
						<View
							className={`flex-row items-center py-1 px-4 space-x-4 mx-4 mb-8 rounded-xl ${
								colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"
							}`}
						>
							<Discount />
							<TextInput
								className={`text-base flex-1 ${colorScheme === "light" ? "text-stone-400" : "text-gray-400"}`}
								placeholder="Enter Coupon Code"
								placeholderTextColor={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
								cursorColor={"rgb(139 92 246)"}
								maxLength={100}
							/>
							<TouchableOpacity>
								<Arrow />
							</TouchableOpacity>
						</View>
						<View className="py-4 px-4">
							<TouchableOpacity className="py-4 rounded-full items-center bg-violet-500" onPress={() => navigation.navigate("Checkout")}>
								<Text className="text-gray-50 text-lg">Checkout</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
