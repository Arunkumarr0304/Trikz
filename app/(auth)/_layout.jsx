import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Stack} from "expo-router";

const Authlayout = () => {
  return (
    <Stack>
        <Stack.Screen name='login' options={{headerShown: false}} />
        <Stack.Screen name='language' options={{headerShown: false}} />
        <Stack.Screen name='age_screen' options={{headerShown: false}} />
        <Stack.Screen name='gender' options={{headerShown: false}} />
        <Stack.Screen name='favourite' options={{headerShown: false}} />
        <Stack.Screen name='nick_name' options={{headerShown: false}} />
    </Stack>
  )
}

export default Authlayout;

const styles = StyleSheet.create({})