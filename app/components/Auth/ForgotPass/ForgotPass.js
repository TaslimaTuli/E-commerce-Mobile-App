import { View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";

import BackLogo from "../../../assets/Login&Onboarding/Back.svg";
import { useNavigation } from "@react-navigation/native";

export default function ForgotPass() {
	const [Password, setPassword] = useState("");

	const navigation = useNavigation();
	const handleSubmit = () => {
		navigation.navigate("ResetEmailSent");
	};

	return (
		<KeyboardAvoidingView className="flex-1 bg-stone-50 px-5 py-3" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
			<TouchableOpacity className="my-4 mr-auto " onPress={() => navigation.goBack()}>
				<BackLogo />
			</TouchableOpacity>
			<Text className="text-4xl font-bold text-black pb-3">Forgot Password</Text>
			<TextInput
				className="bg-stone-200 mx-1 my-5 py-3 px-2 text-lg text-black rounded"
				placeholder="Enter email address"
				blurOnSubmit={true}
				cursorColor={"rgb(139 92 246)"}
				maxLength={100}
				value={Password}
				onChangeText={setPassword}
			/>
			{/* Button */}
			<TouchableOpacity
				className={`items-center justify-center py-3 rounded-full ${Password ? "bg-violet-500" : "bg-violet-200"}`}
				disabled={!Password}
				onPress={handleSubmit}
			>
				<Text className="text-lg font-semibold text-gray-50">Continue</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}
