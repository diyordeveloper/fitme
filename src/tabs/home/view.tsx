import { View, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import BoxComponents from '../../components/home_components/box_components'
import { useNavigation } from '@react-navigation/native'
import { HomeHooks } from './hooks'
import SafeAreaView from 'react-native-safe-area-view';


const HomeScreen = () => {
  const { data } = HomeHooks();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 100, }}>
          {data.map((item) => {
            return (
              <BoxComponents
                name={item.name}
                title={item.title}
                imgUrl={item.imageUrl}
                onPress={() => navigation.navigate(item.screenPath as never)}
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen