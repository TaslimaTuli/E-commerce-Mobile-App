import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

import Notification_with_dot from "../../assets/Notifications/Notification_with_dot.svg";
import Notification from "../../assets/Notifications/Notification.svg";

export default function Notifications() {
	const notifications = [
		{ details: "Gilbert, you placed an order. Check your order history for full details.", icon: Notification_with_dot },
		{ details: "Gilbert, thank you for shopping with us. We have canceled order #24568.", icon: Notification },
		{ details: "Gilbert, your Order #24568 has been confirmed. Check your order history for full details.", icon: Notification },
		// { details: "Gilbert, you placed an order. Check your order history for full details.", icon: Notification },
		// { details: "Gilbert, your Order #24568 has been confirmed. Check your order history for full details.", icon: Notification },
		// { details: "Gilbert, thank you for shopping with us. We have canceled order #24568.", icon: Notification },
		// { details: "Gilbert, you placed an order. Check your order history for full details.", icon: Notification },
		// { details: "Gilbert, your Order #24568 has been confirmed. Check your order history for full details.", icon: Notification },
		// { details: "Gilbert, thank you for shopping with us. We have canceled order #24568.", icon: Notification },
		// { details: "Gilbert, you placed an order. Check your order history for full details.", icon: Notification },
		// { details: "Gilbert, your Order #24568 has been confirmed. Check your order history for full details.", icon: Notification },
		// { details: "Gilbert, thank you for shopping with us. We have canceled order #24568.", icon: Notification },
	];

	return (
		<SafeAreaView className="flex-1 bg-white px-4">
			<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
			<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white">
				<View className="flex items-center justify-center mt-7 mb-2">
					<Text className="text-black font-extrabold text-xl">Notifications</Text>
				</View>
				<View className="my-4 px-2">
					{notifications.map((notification, index) => (
						<TouchableOpacity key={index} className="flex-col px-2.5 py-4 mt-2 bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
							<View className="flex-row justify-start items-center space-x-2">
								<notification.icon />
								<Text className="text-base text-black px-7" numberOfLines={2} ellipsizeMode="tail">
									{notification.details}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
