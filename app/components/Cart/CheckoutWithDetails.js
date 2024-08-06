import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, useColorScheme, Platform } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";
import ArrowRight from "../../assets/Notifications/Arrow_right.svg";
import ArrowRightWhite from "../../assets/Notifications/Arrow_R_w.svg";
import MasterCard from "../../assets/Cart/MasterCard.svg";
import { useNavigation } from "@react-navigation/native";

export default function CheckoutWithDetails() {
	const navigation = useNavigation();
	const colorScheme = useColorScheme();

	const orders = [
		{ big: "2715 Ash Dr. San Jose, South Dakota 83475", small: "Shipping Address", icon: MasterCard, screen: "Address" },
		{ big: "****4187", small: "Payment Method", icon: MasterCard, screen: "Payment" },
	];

	const handleOrder = () => {
		navigation.navigate("OrderSuccess");
	};

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
						<Text className={`font-bold text-xl px-24 mr-14 ${colorScheme === "light" ? "text-black" : "text-white"}`}>Checkout</Text>
					</View>

					<View className="flex-grow mb-6">
						{orders.map((order, index) => (
							<TouchableOpacity
								key={index}
								className={`flex-col py-3 px-2 mt-4 rounded-lg shadow-sm ${
									colorScheme === "light" ? "bg-stone-100 shadow-stone-500" : "bg-gray-700 shadow-gray-500"
								}`}
								onPress={() => navigation.navigate(order.screen)}
							>
								<View className="flex-row items-center">
									<View className="flex-1 pl-2 space-y-2">
										<Text className={`text-sm ${colorScheme === "light" ? "text-stone-500" : "text-gray-400"}`}>{order.small}</Text>
										<View className="flex-row space-x-2 items-center">
											<Text
												className={`text-base ${colorScheme === "light" ? "text-black" : "text-white"}`}
												numberOfLines={1}
												ellipsizeMode="tail"
											>
												{order.big}
											</Text>
											<order.icon />
										</View>
									</View>
									<View className="ml-20">{colorScheme === "light" ? <ArrowRight /> : <ArrowRightWhite />}</View>
								</View>
							</TouchableOpacity>
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

						<View className="py-4 px-4">
							<TouchableOpacity className="flex-row justify-between px-6 py-3 rounded-full items-center bg-violet-500" onPress={handleOrder}>
								<Text className="text-gray-50 text-sm font-bold">$208.00</Text>
								<Text className="text-gray-50 text-lg">Place Order</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
