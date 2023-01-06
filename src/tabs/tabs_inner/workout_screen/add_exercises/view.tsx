import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import HeaderComponents from "../../../../components/header/header";
import Tab_One from "../../../../components/tabs_header/tab_one/tab_one";
import Tab_Exercises from "../../../../components/tabs_header/tab_exercises/tab_exercises";
import Tab_Footer from "../../../../components/tabs_header/tab_exercises/tab_footer";
import BoxComponents from "../../../../components/home_components/box_components";
import { AddExercisesHooks } from "./hooks";
import Bottom_Auth from "../../../../components/bottom_auth/Bottom_Auth";
import { ROUTES } from "../../../../navigation/ROUTES";
import SafeAreaView from "react-native-safe-area-view";

const Add_Exercises_Screen = () => {
	const { navigation, trainingTypes, pickedTrainings } = AddExercisesHooks();
	const [state, setState] = useState(false);

	console.log(pickedTrainings, "QNJU ---------------");

	const onPress = () => {
		navigation.navigate(ROUTES.WORKOUT_ONE as never);
	};

	return (
		<View style={styles.container}>
			<SafeAreaView />
			<HeaderComponents />
			<Tab_One
				titleList={["Выбранные", "База упражнений"]}
				tab_one={
					<View style={{ marginTop: 15, flex: 1 }}>
						<Tab_Exercises
							tab_one={
								<Tab_Footer
									titleList={[
										"Верх груди",
										"Середина груди",
										"Низ груди",
									]}
									tab_one={
										<View style={{}}>
											<ScrollView
												showsVerticalScrollIndicator={
													false
												}
											>
												<View
													style={{
														marginBottom: 120,
													}}
												>
													{trainingTypes.map(
														(item: {
															title:
																| string
																| undefined;
															image: any;
															_id: string;
														}) => {
															return (
																<BoxComponents
																	imgBoolean={
																		true
																	}
																	active={
																		true
																	}
																	// isActive={
																	// 	pickedTrainings?.indexOf(
																	// 		item._id
																	// 	) !== -1
																	// }
																	//  onPress={() => navigation.navigate(item.screenPath as never)}
																	name={
																		item.title
																	}
																	img={
																		item.image
																	}
																/>
															);
														}
													)}
												</View>
											</ScrollView>
											<View style={styles.bottom}>
												<Bottom_Auth
													onPress={onPress}
													text="Добавить (5) упражнений"
												/>
											</View>
										</View>
									}
								/>
							}
						/>
					</View>
				}
			/>
		</View>
	);
};

export default Add_Exercises_Screen;
