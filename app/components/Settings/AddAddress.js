import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";

export default function AddAddress() {
	const [streetAddress, setStreetAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");

	const navigation = useNavigation();

	const isFormValid = streetAddress || city || state || zip;

	const handleSave = () => {
		navigation.navigate("Address");
		setStreetAddress("");
		setCity("");
		setState("");
		setZip("");
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
						<Text className="text-black font-bold text-xl px-24 mr-10">Add Address</Text>
					</View>

					{/* ... */}
					<View className="px-4 space-y-3 items-center">
						<TextInput
							className="bg-stone-100 py-4 px-4 text-lg w-full rounded-xl"
							placeholder="Street Address"
							cursorColor={"rgb(139 92 246)"}
							maxLength={100}
							value={streetAddress}
							onChangeText={setStreetAddress}
						/>
						<TextInput
							className="bg-stone-100 py-4 px-4 text-lg w-full rounded-xl"
							placeholder="City"
							cursorColor={"rgb(139 92 246)"}
							maxLength={100}
							value={city}
							onChangeText={setCity}
						/>
						<View className="flex-1 flex-row items-center justify-between space-x-5">
							<TextInput
								className="bg-stone-100 py-4 px-4 w-[47%] text-lg rounded-xl"
								placeholder="State"
								cursorColor={"rgb(139 92 246)"}
								maxLength={100}
								value={state}
								onChangeText={setState}
							/>
							<TextInput
								className="bg-stone-100 py-4 px-4 text-lg w-[47%] rounded-xl"
								placeholder="Zip code"
								cursorColor={"rgb(139 92 246)"}
								keyboardType="numeric"
								maxLength={100}
								value={zip}
								onChangeText={setZip}
							/>
						</View>
					</View>
				</ScrollView>
				{/* Button */}
				<TouchableOpacity
					className={`mx-4 items-center justify-center my-10 py-4 rounded-full ${isFormValid ? "bg-violet-500" : "bg-violet-200"}`}
					disabled={!isFormValid}
					onPress={handleSave}
				>
					<Text className="text-lg font-semibold text-gray-50">Save</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
