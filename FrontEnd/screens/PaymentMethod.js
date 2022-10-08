import { View, Text } from 'react-native'
import React from 'react'
import StripeApp from './StripeApp'

const PaymentMethod = () => {
  return (
    <View>
      <Text>PaymentMethod</Text>
      <StripeApp/>
    </View>
  )
}

export default PaymentMethod