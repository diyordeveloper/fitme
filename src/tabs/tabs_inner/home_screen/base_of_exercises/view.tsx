import { View, Text, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponents from '../../../../components/header/header'
import Tab_Exercises from '../../../../components/tabs_header/tab_exercises/tab_exercises'
import Tab_Footer from '../../../../components/tabs_header/tab_exercises/tab_footer'
import BoxComponents from '../../../../components/home_components/box_components'
import { ExercisesHooks } from './hooks'
import SafeAreaView from 'react-native-safe-area-view'




const Base_Of_Exercises_Screen = () => {

    const { navigation, exercise, onBenchPress, trainingTypes } = ExercisesHooks();

    // console.log(trainingTypes,'NIMAKEVOTTTIII ______-----------------')

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <HeaderComponents title='База упражнений' />
            <Tab_Exercises
                tab_one={
                    <Tab_Footer
                        titleList={['Верх груди', 'Середина груди', 'Низ груди']}
                        tab_one={
                            <View style={{ marginBottom: 60, }}>
                                {exercise.map((item: { title: string | undefined; image: any }) => {
                                    return (
                                        <BoxComponents
                                            imgBoolean={true}
                                            onPress={() => onBenchPress(item)}
                                            name={item.title}
                                            img={item.image}

                                        />
                                    )
                                })}
                            </View>
                        }
                    />

                }
            />
        </View>
    )
}

export default Base_Of_Exercises_Screen