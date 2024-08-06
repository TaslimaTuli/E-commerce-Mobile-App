import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform, useColorScheme } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";

export default function AddCard() {
	const [cardNum, setCardNum] = useState("");
	const [name, setName] = useState("");
	const [ccv, setCCV] = useState("");
	const [exp, setExp] = useState("");

	const colorScheme = useColorScheme();

	const isFormValid = cardNum && name && ccv && exp;

	const navigation = useNavigation();
	const handleSave = () => {
		navigation.navigate("Payment");
		setCardNum("");
		setName("");
		setCCV("");
		setExp("");
	};

	return (
		<KeyboardAvoidingView
			className={`flex-1 ${colorScheme === "dark" ? "bg-gray-900" : "bg-stone-50"}`}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<SafeAreaView className={`flex-1 ${colorScheme === "dark" ? "bg-gray-900" : "bg-stone-50"}`}>
				<StatusBar
					backgroundColor={colorScheme === "dark" ? "rgb(17 24 39)" : "rgb(250 250 249)"}
					barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
				/>
				<ScrollView
					showsVerticalScrollIndicator={false}
					className={`flex-1 ${colorScheme === "dark" ? "bg-gray-900" : "bg-stone-50"} px-4`}
					contentContainerStyle={{ flexGrow: 1 }}
				>
					{/* Header */}
					<View className="flex-row items-center justify-center mt-5 mb-4">
						<TouchableOpacity className="mr-auto ml-2" onPress={() => navigation.goBack()}>
							{colorScheme === "light" ? <BackLogo /> : <BackDark />}
						</TouchableOpacity>
						<Text className={`text-xl font-bold px-24 mr-12 ${colorScheme === "dark" ? "text-white" : "text-black"}`}>Add Card</Text>
					</View>

					{/* Form */}
					<View className="px-4 space-y-3">
						<TextInput
							className={`bg-${colorScheme === "dark" ? "gray-800" : "stone-100"} py-4 px-4 text-lg w-full rounded-xl ${
								colorScheme === "dark" ? "text-white" : "text-black"
							}`}
							placeholder="Card Number"
							placeholderTextColor={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
							cursorColor={"rgb(139 92 246)"}
							maxLength={19}
							keyboardType="numeric"
							value={cardNum}
							onChangeText={setCardNum}
						/>
						<View className="flex-row items-center justify-between space-x-5">
							<TextInput
								className={`bg-${colorScheme === "dark" ? "gray-800" : "stone-100"} py-4 px-4 w-[47%] text-lg rounded-xl ${
									colorScheme === "dark" ? "text-white" : "text-black"
								}`}
								placeholder="CCV"
								placeholderTextColor={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
								cursorColor={"rgb(139 92 246)"}
								maxLength={4}
								keyboardType="numeric"
								value={ccv}
								onChangeText={setCCV}
							/>
							<TextInput
								className={`bg-${colorScheme === "dark" ? "gray-800" : "stone-100"} py-4 px-4 text-lg w-[47%] rounded-xl ${
									colorScheme === "dark" ? "text-white" : "text-black"
								}`}
								placeholder="Exp (MM/YY)"
								placeholderTextColor={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
								cursorColor={"rgb(139 92 246)"}
								maxLength={5}
								value={exp}
								onChangeText={setExp}
							/>
						</View>
						<TextInput
							className={`bg-${colorScheme === "dark" ? "gray-800" : "stone-100"} py-4 px-4 text-lg w-full rounded-xl ${
								colorScheme === "dark" ? "text-white" : "text-black"
							}`}
							placeholder="Cardholder Name"
							placeholderTextColor={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
							cursorColor={"rgb(139 92 246)"}
							maxLength={100}
							value={name}
							onChangeText={setName}
						/>
					</View>
				</ScrollView>
				{/* Save Button */}
				<View className="px-4 mb-10">
					<TouchableOpacity
						className={`items-center justify-center py-4 rounded-full ${isFormValid ? "bg-violet-500" : "bg-violet-200"} ${
							colorScheme === "dark" ? "shadow-gray-600" : "shadow-stone-500"
						}`}
						disabled={!isFormValid}
						onPress={handleSave}
					>
						<Text className="text-lg font-semibold text-gray-50">Save</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
