import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";

import Order1 from "../../assets/Cart/Order1.svg";
import Order2 from "../../assets/Cart/Order2.svg";

import Discount from "../../assets/Cart/Discount.svg";
import Arrow from "../../assets/Cart/Arrow_Violet.svg";

import Plus from "../../assets/Homepage/Products/Plus.svg";
import Minus from "../../assets/Homepage/Products/Minus.svg";

export default function Cart() {
	const orders = [
		{ orderName: "Men's Harrington Jacket", price: "$148.00", icon: Order1, size: "M", color: "Lemon" },
		{ orderName: "Men's Coaches Jacket", price: "$52.00", icon: Order2, size: "M", color: "Black" },
	];

	return (
		<KeyboardAvoidingView className="flex-1 bg-white" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<SafeAreaView className="flex-1 bg-white">
				<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
				<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white px-4" contentContainerStyle={{ flexGrow: 1 }}>
					{/* header */}
					<View className="flex-row items-center justify-center mt-7 mb-2">
						<TouchableOpacity className="w-0">
							<BackLogo />
						</TouchableOpacity>
						<Text className="text-black font-bold text-xl px-36">Cart</Text>
					</View>
					<View className="items-end pb-1">
						<TouchableOpacity className=" w-20 items-center">
							<Text className="text-black text-lg">Remove All</Text>
						</TouchableOpacity>
					</View>
					<View className="flex-grow mb-6">
						{orders.map((order, index) => (
							<View key={index} className="flex-col py-3 px-2 mt-2 bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
								<View className="flex-row items-center">
									<order.icon />
									<View className="flex-col flex-1 pl-2">
										<Text className="text-base text-black">{order.orderName}</Text>
										<View className="flex-row items-center py-2">
											<Text className="text-sm font-bold text-stone-400">
												Size - <Text className="text-black">{order.size}</Text>
											</Text>
											<Text className="text-sm font-bold text-stone-400 px-2">
												Color - <Text className="text-black">{order.color}</Text>
											</Text>
										</View>
									</View>
									<View className="flex-col justify-end items-center space-y-2">
										<Text className="text-sm font-bold text-black ml-5">{order.price}</Text>
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
							<Text className="text-lg text-stone-400">Subtotal</Text>
							<Text className="text-lg text-black">$200</Text>
						</View>
						<View className="flex-row justify-between py-1 px-4">
							<Text className="text-lg text-stone-400">Shipping Cost</Text>
							<Text className="text-lg text-black">$8.00</Text>
						</View>
						<View className="flex-row justify-between py-1 px-4">
							<Text className="text-lg text-stone-400">Tax</Text>
							<Text className="text-lg text-black">$0.00</Text>
						</View>
						<View className="flex-row justify-between py-1 px-4 mb-6">
							<Text className="text-lg text-stone-400">Total</Text>
							<Text className="text-lg text-black font-bold">$208.00</Text>
						</View>
						<View className="flex-row items-center py-1 px-4 space-x-4 mx-4 mb-8 rounded-xl bg-stone-100">
							<Discount />
							<TextInput
								className="text-base text-stone-400 flex-1"
								placeholder="Enter Coupon Code"
								cursorColor={"rgb(139 92 246)"}
								maxLength={100}
							/>
							<TouchableOpacity>
								<Arrow />
							</TouchableOpacity>
						</View>
						<View className="py-4 px-4 ">
							<TouchableOpacity className="py-4 rounded-full items-center bg-violet-500">
								<Text className="text-gray-50 text-lg">Checkout</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
