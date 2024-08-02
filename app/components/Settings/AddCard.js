import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";

export default function AddCard() {
	const [CardNum, setCardNum] = useState("");
	const [name, setName] = useState("");
	const [CCV, setCCV] = useState("");
	const [Exp, setExp] = useState("");

	const isFormValid = CardNum || name || CCV || Exp;

	const navigation = useNavigation();
	const handleSave = () => {
		navigation.navigate("Payment");
		setCardNum("");
		setName("");
		setCCV("");
		setExp("");
	};

	return (
		<KeyboardAvoidingView className="flex-1 bg-stone-50" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<SafeAreaView className="flex-1 bg-stone-50">
				<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
				<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-stone-50 px-4" contentContainerStyle={{ flexGrow: 1 }}>
					{/* header */}
					<View className="flex-row items-center justify-center mt-5 mb-4">
						<TouchableOpacity className="mr-auto ml-2" onPress={() => navigation.goBack()}>
							<BackLogo />
						</TouchableOpacity>
						<Text className="text-black font-bold text-xl px-24 mr-12">Add Card</Text>
					</View>

					{/* ... */}
					<View className="px-4 space-y-3 items-center">
						<TextInput
							className="bg-stone-100 py-4 px-4 text-lg w-full rounded-xl"
							placeholder="Card Number"
							cursorColor={"rgb(139 92 246)"}
							maxLength={100}
							keyboardType="numeric"
							value={CardNum}
							onChangeText={setCardNum}
						/>
						<View className="flex-1 flex-row items-center justify-between space-x-5">
							<TextInput
								className="bg-stone-100 py-4 px-4 w-[47%] text-lg rounded-xl"
								placeholder="CCV"
								cursorColor={"rgb(139 92 246)"}
								maxLength={100}
								keyboardType="numeric"
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
						onPress={handleSave}
					>
						<Text className="text-lg font-semibold text-gray-50">Save</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
