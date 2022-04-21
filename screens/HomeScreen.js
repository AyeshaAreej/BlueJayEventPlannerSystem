import React from 'react'
import { View,Text, TextInput,Button} from 'react-native'
import { Formik } from 'formik'

function HomeScreen() {
  return (
    <View >
    <Text>Login Screen</Text>
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <TextInput
            name="email"
            placeholder="Email Address"
            style={{padding:20}}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          <TextInput
            name="password"
            placeholder="Password"
            style={{padding:30}}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          <Button onPress={handleSubmit} title="Submit" />
        </>
      )}
    </Formik>
  </View>

  )
}

export default HomeScreen;