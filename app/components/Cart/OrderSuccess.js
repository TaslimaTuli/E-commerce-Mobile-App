import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import React from "react";

import Success from "../../assets/Cart/Success.svg";

export default function OrderSuccess() {
	return (
		<SafeAreaView className="flex-1 bg-violet-500  items-center justify-center">
			<StatusBar backgroundColor={"rgb(139 92 246)"} barStyle={"light-content"} />
			<View className="absolute top-32">
				<Success />
			</View>

			<View className="absolute bottom-0 items-center justify-center w-full bg-stone-100 rounded-t-2xl h-96 ">
				<Text className="text-3xl font-bold text-black text-center px-14 tracking-widest">Order Placed Successfully</Text>
				<Text className="text-lg  text-gray-500 text-center py-6">You will receive an email confirmation</Text>
				<TouchableOpacity className=" py-3 px-28 mt-24 rounded-full bg-violet-500">
					<Text className="text-base font-semibold text-gray-50">See Order Details</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
