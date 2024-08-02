import { View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function SignIn2() {
	const [Password, setPassword] = useState("");

	const navigation = useNavigation();
	const handleLogin = () => {
		navigation.navigate("Home");
		setPassword("");
	};
	return (
		<KeyboardAvoidingView className="flex-1 bg-stone-50 px-5 py-3" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
			<Text className="text-4xl font-bold text-black pt-16 pb-3">Sign In</Text>
			<TextInput
				className="bg-stone-200 mx-1 my-5 py-3 px-2 text-lg text-black rounded"
				placeholder="Password"
				blurOnSubmit={true}
				cursorColor={"rgb(139 92 246)"}
				secureTextEntry={true}
				maxLength={100}
				value={Password}
				onChangeText={setPassword}
			/>
			{/* Button */}
			<TouchableOpacity
				className={`items-center justify-center py-3 rounded-full ${Password ? "bg-violet-500" : "bg-violet-200"}`}
				disabled={!Password}
				onPress={handleLogin}
			>
				<Text className="text-lg font-semibold text-gray-50">Continue</Text>
			</TouchableOpacity>

			{/* Forgot Pass */}
			<View className="flex-row py-4">
				<Text className="text-sm text-black">Forgot Password ?</Text>
				<TouchableOpacity onPress={() => navigation.navigate("ForgotPass")}>
					<Text className="text-sm text-black font-bold ml-1">Reset</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
