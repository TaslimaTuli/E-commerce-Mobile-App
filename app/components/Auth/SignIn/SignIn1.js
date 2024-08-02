import { View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import AppleLogo from "../../../assets/Login&Onboarding/Apple.svg";
import FbLogo from " ../../../assets/Login&Onboarding/Fb.svg";
import GoogleLogo from "../../../assets/Login&Onboarding/Google.svg";
import { useNavigation } from "@react-navigation/native";

export default function SignIn1() {
	const [email, setEmail] = useState("");

	const navigation = useNavigation();
	const handleNext = () => {
		navigation.navigate("SignIn2");
	};

	return (
		<KeyboardAvoidingView className="flex-1 bg-stone-50 px-5 py-3" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
			<Text className="text-4xl font-bold text-black pt-16 pb-3">Sign In</Text>
			<TextInput
				className="bg-stone-200 mx-1 my-5 py-3 px-2 text-lg text-black rounded"
				placeholder="Email Address"
				blurOnSubmit={true}
				keyboardType="email-address"
				cursorColor={"rgb(139 92 246)"}
				maxLength={320}
				value={email}
				onChangeText={setEmail}
			/>
			{/* Button */}
			<TouchableOpacity
				className={`items-center justify-center py-3 rounded-full ${email ? "bg-violet-500" : "bg-violet-200"}`}
				disabled={!email}
				onPress={handleNext}
			>
				<Text className="text-lg font-semibold text-gray-50">Continue</Text>
			</TouchableOpacity>
			<View className="flex-row py-4">
				<Text className="text-sm text-black">Don't have an Account ?</Text>
				<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
					<Text className="text-sm text-black font-bold ml-1">Create One</Text>
				</TouchableOpacity>
			</View>
			{/* Other Options */}
			<View className="mt-16 space-y-4 ">
				<TouchableOpacity className="flex-row items-center justify-center bg-stone-200 py-3 px-4 rounded-full">
					<AppleLogo />
					<Text className="text-black text-lg font-semibold mx-20">Continue With Apple</Text>
				</TouchableOpacity>
				<TouchableOpacity className="flex-row items-center justify-center bg-stone-200 py-3 px-4 rounded-full">
					<GoogleLogo />
					<Text className="text-black text-lg font-semibold mx-20">Continue With Google</Text>
				</TouchableOpacity>
				<TouchableOpacity className="flex-row items-center justify-center bg-stone-200 py-3 px-4 rounded-full">
					<FbLogo />
					<Text className="text-black text-lg font-semibold mx-[70] ">Continue With Facebook</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
