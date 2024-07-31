import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";

export default function AddCard() {
	const [CardNum, setCardNum] = useState("");
	const [name, setName] = useState("");
	const [CCV, setCCV] = useState("");
	const [Exp, setExp] = useState("");

	const isFormValid = CardNum || name || CCV || Exp;

	return (
		<KeyboardAvoidingView className="flex-1 bg-white" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<SafeAreaView className="flex-1 bg-white">
				<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
				<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white px-4" contentContainerStyle={{ flexGrow: 1 }}>
					{/* header */}
					<View className="flex-row items-center justify-center my-7">
						<TouchableOpacity className="w-0">
							<BackLogo />
						</TouchableOpacity>
						<Text className="text-black font-bold text-xl mx-32">Add Card</Text>
					</View>

					{/* ... */}
					<View className="px-4 space-y-3 items-center">
						<TextInput
							className="bg-stone-100 py-4 px-4 text-lg w-full rounded-xl"
							placeholder="Card Number"
							cursorColor={"rgb(139 92 246)"}
							maxLength={100}
							value={CardNum}
							onChangeText={setCardNum}
						/>
						<View className="flex-1 flex-row items-center justify-between space-x-5">
							<TextInput
								className="bg-stone-100 py-4 px-4 w-[47%] text-lg rounded-xl"
								placeholder="CCV"
								cursorColor={"rgb(139 92 246)"}
								maxLength={100}
								value={CCV}
								onChangeText={setCCV}
							/>
							<TextInput
								className="bg-stone-100 py-4 px-4 text-lg w-[47%] rounded-xl"
								placeholder="Exp"
								cursorColor={"rgb(139 92 246)"}
								maxLength={100}
								value={Exp}
								onChangeText={setExp}
							/>
						</View>
						<TextInput
							className="bg-stone-100 py-4 px-4 text-lg w-full rounded-xl"
							placeholder="Cardholder Name"
							cursorColor={"rgb(139 92 246)"}
							maxLength={100}
							value={name}
							onChangeText={setName}
						/>
					</View>
				</ScrollView>
				{/* Button */}
				<View className="px-4">
					<TouchableOpacity
						className={`items-center justify-center my-10 py-4 rounded-full ${isFormValid ? "bg-violet-500" : "bg-violet-200"}`}
						disabled={!isFormValid}
					>
						<Text className="text-lg font-semibold text-gray-50">Save</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
