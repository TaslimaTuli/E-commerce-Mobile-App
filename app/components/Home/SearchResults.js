import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";

import Jacket from "../../assets/Homepage/Top_Selling/Jacket.svg";
import Hoodie1 from "../../assets/Homepage/Hoodie1.svg";
import Hoodie2 from "../../assets/Homepage/Hoodie2.svg";
import Hoodie3 from "../../assets/Homepage/Hoodie3.svg";

import Love from "../../assets/Homepage/Top_Selling/Love.svg";
import Search from "../../assets/Homepage/Search.svg";
import Cancel from "../../assets/Homepage/Cancel.svg";
import Selected from "../../assets/Homepage/Selected.svg";
import Filter from "../../assets/Homepage/Filter.svg";
import More from "../../assets/Login&Onboarding/More.svg";
import MoreWhite from "../../assets/Login&Onboarding/MoreWhite.svg";

export default function SearchResult() {
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState("");
	const [selectedSortBy, setSelectedSortBy] = useState("");
	const [selectedGender, setSelectedGender] = useState("");
	const [selectedDeals, setSelectedDeals] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");

	const topSellingItems = [
		{ name: "Men's Harrington Jacket", price: "$148.00", icon: Jacket },
		{ name: "Men's Fleece Pullover Hoodie", price: "$100.00", discount: "$100.97", icon: Hoodie1 },
		{ name: "Fleece Skate Hoodie", price: "$110.00", discount: "$100.97", icon: Hoodie2 },
		{ name: "Men's Ice-Dye Pullover Hoodie", price: "$128.97", discount: "$100.97", icon: Hoodie3 },
		{ name: "Men's Harrington Jacket", price: "$148.00", icon: Jacket },
		{ name: "Men's Fleece Pullover Hoodie", price: "$100.00", discount: "$100.97", icon: Hoodie1 },
		{ name: "Fleece Skate Hoodie", price: "$110.00", discount: "$100.97", icon: Hoodie2 },
		{ name: "Men's Ice-Dye Pullover Hoodie", price: "$128.97", discount: "$100.97", icon: Hoodie3 },
	];

	const sortBy = ["Recommended", "Newest", "Lowest - Highest Price", "Highest - Lowest Price"];
	const gender = ["Men", "Women", "Kids"];
	const deals = ["On Sale", "Free Shipping Eligible"];

	const handleModalOpen = (type) => {
		setModalType(type);
		setShowModal(true);
	};

	const handleModalClose = () => {
		setShowModal(false);
	};

	const handleClear = (type) => {
		switch (type) {
			case "Deals":
				setSelectedDeals("");
				break;
			case "Sort By":
				setSelectedSortBy("");
				break;
			case "Gender":
				setSelectedGender("");
				break;
			case "Price":
				setMinPrice("");
				setMaxPrice("");
				break;
			default:
				break;
		}
		handleModalClose();
	};

	// Updates the selected filter based on user input
	const handleSelect = (item, type) => {
		switch (type) {
			case "Deals":
				setSelectedDeals(item);
				break;
			case "SortBy":
				setSelectedSortBy(item);
				break;
			case "Gender":
				setSelectedGender(item);
				break;
			default:
				break;
		}
		handleModalClose();
	};

	// Renders a button for each filter type with conditional styling based on whether it's selected
	const renderFilterButton = (type, selected, defaultText) => (
		<TouchableOpacity
			className={`flex-row items-center justify-between px-4 py-2 rounded-full space-x-1 ${selected ? "bg-violet-500" : "bg-stone-100"}`}
			onPress={() => handleModalOpen(type)}
		>
			<Text className={`text-base ${selected ? "text-white" : "text-black"}`}>{selected || defaultText}</Text>
			{selected ? <MoreWhite /> : <More />}
		</TouchableOpacity>
	);

	// Counts the number of active filters
	const getSelectedFiltersCount = () => {
		let count = 0;
		if (selectedSortBy) count++;
		if (selectedGender) count++;
		if (selectedDeals) count++;
		if (minPrice && maxPrice) count++;
		return count;
	};

	return (
		<>
			<SafeAreaView className="flex-1 bg-white px-4 pt-4">
				<ScrollView showsVerticalScrollIndicator={false} keyboardDismissMode="on-drag">
					<StatusBar backgroundColor="white" barStyle="dark-content" />

					{/* Header */}
					<View className="flex-row justify-between items-center py-4">
						<TouchableOpacity className="pr-3 w-0">
							<BackLogo />
						</TouchableOpacity>
						<View className="flex-row items-center bg-stone-200 w-5/6 px-4 rounded-full">
							<Search />
							<TextInput className="flex-1 text-lg py-2 text-black pl-3" placeholder="Search" cursorColor="rgb(139 92 246)" maxLength={100} />
						</View>
					</View>

					{/* Filters */}
					<ScrollView horizontal showsHorizontalScrollIndicator={false} className="">
						<View className="flex-row space-x-2 px-2 py-1">
							<View
								className={`flex-row items-center justify-between px-3 py-2 rounded-full ${
									getSelectedFiltersCount() > 0 ? " bg-violet-500" : "bg-stone-100"
								}`}
							>
								<Filter />
								<Text className={`text-base ${getSelectedFiltersCount() > 0 ? " text-white" : "text-black"} `}>
									{getSelectedFiltersCount()}
								</Text>
							</View>

							{/* (type, selected option, default Text shown in the filter) */}
							{renderFilterButton("Deals", selectedDeals, "Deals")}
							{renderFilterButton("Price", minPrice && maxPrice ? `$${minPrice} - $${maxPrice}` : "", "Price")}
							{renderFilterButton("Sort By", selectedSortBy, "Sort By")}
							{renderFilterButton("Gender", selectedGender, "Gender")}
						</View>
					</ScrollView>

					{/* Result */}
					<Text className="text-base py-3 text-black">53 Results Found</Text>

					<View className="flex-row flex-wrap justify-between items-center pb-7">
						{topSellingItems.map((item, index) => (
							<TouchableOpacity key={index} className="bg-stone-100 rounded-xl p-3 mb-4 w-[48%]">
								<TouchableOpacity className="items-end mb-2">
									<Love />
								</TouchableOpacity>
								<View className="items-center justify-center">
									<item.icon />
								</View>
								<Text className="mt-2 text-lg text-black font-medium" numberOfLines={1} ellipsizeMode="tail">
									{item.name}
								</Text>
								<View className="flex-row space-x-3 mb-2">
									<Text className="mt-1 text-base text-black font-black">{item.price}</Text>
									{/* {item.discount && <Text className="mt-1 text-base text-stone-500 line-through">{item.discount}</Text>} */}
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
			</SafeAreaView>

			{/* Modals */}
			<Modal animationType="slide" transparent visible={showModal} statusBarTranslucent onRequestClose={handleModalClose}>
				<View className="flex-1 justify-end" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
					<TouchableWithoutFeedback onPress={handleModalClose}>
						<View className="flex-1" />
					</TouchableWithoutFeedback>
					<View className="h-[500] bg-white pt-4 px-4 rounded-t-3xl">
						<View className="flex-row justify-between items-center mb-6 px-2">
							<TouchableOpacity onPress={() => handleClear(modalType)}>
								<Text className="text-lg text-black">Clear</Text>
							</TouchableOpacity>
							<Text className="text-2xl text-black font-black ">{modalType}</Text>
							<TouchableOpacity onPress={handleModalClose}>
								<Cancel />
							</TouchableOpacity>
						</View>
						<ScrollView showsVerticalScrollIndicator={false}>
							{modalType === "Sort By" &&
								sortBy.map((item, index) => (
									<TouchableOpacity
										key={index}
										className={`flex-row items-center justify-between mb-3 px-5 py-4 rounded-full ${
											item === selectedSortBy ? "bg-violet-500" : "bg-stone-100"
										} shadow-sm shadow-stone-400`}
										onPress={() => handleSelect(item, "SortBy")}
									>
										<Text className={`text-lg font-extrabold ${item === selectedSortBy ? "text-white" : "text-black"}`}>{item}</Text>
										{item === selectedSortBy && <Selected />}
									</TouchableOpacity>
								))}
							{modalType === "Gender" &&
								gender.map((item, index) => (
									<TouchableOpacity
										key={index}
										className={`flex-row items-center justify-between mb-3 px-5 py-4 rounded-full ${
											item === selectedGender ? "bg-violet-500" : "bg-stone-100"
										} shadow-sm shadow-stone-400`}
										onPress={() => handleSelect(item, "Gender")}
									>
										<Text className={`text-lg font-extrabold ${item === selectedGender ? "text-white" : "text-black"}`}>{item}</Text>
										{item === selectedGender && <Selected />}
									</TouchableOpacity>
								))}
							{modalType === "Deals" &&
								deals.map((item, index) => (
									<TouchableOpacity
										key={index}
										className={`flex-row items-center justify-between mb-3 px-5 py-4 rounded-full ${
											item === selectedDeals ? "bg-violet-500" : "bg-stone-100"
										} shadow-sm shadow-stone-400`}
										onPress={() => handleSelect(item, "Deals")}
									>
										<Text className={`text-lg font-extrabold ${item === selectedDeals ? "text-white" : "text-black"}`}>{item}</Text>
										{item === selectedDeals && <Selected />}
									</TouchableOpacity>
								))}
							{modalType === "Price" && (
								<View className="pb-2">
									<TextInput
										className="bg-stone-200 mx-1 mt-3 py-3 px-5 text-lg text-black rounded-full"
										placeholder="Min Price"
										keyboardType="numeric"
										value={minPrice}
										onChangeText={setMinPrice}
									/>
									<TextInput
										className="bg-stone-200 mx-1 mt-3 py-3 px-5 text-lg text-black rounded-full"
										placeholder="Max Price"
										keyboardType="numeric"
										value={maxPrice}
										onChangeText={setMaxPrice}
										onSubmitEditing={handleModalClose}
									/>
								</View>
							)}
						</ScrollView>
					</View>
				</View>
			</Modal>
		</>
	);
}
