import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/constants'

interface Props {
  title?: string,
}

const Active_border = ({ title }: Props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
      <TouchableOpacity style={styles.container}>
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Active_border

const styles = StyleSheet.create({
  container: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
    color: '#757575',
    marginHorizontal: 10,
  },
})