import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { ThemeProvider } from '../theme/ThemeContext';
import { useEffect } from 'react';
import { QuizProvider } from '../Quiz_context/Quiz_context';

const Root_layout = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('(auth)/login');
  }, []);

  return (
    <ThemeProvider>
      <QuizProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(auth)' />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='(screens)/paginationscreens' />
        <Stack.Screen name='(screens)/score' />
        <Stack.Screen name='(screens)/levels' />
        <Stack.Screen name='(screens)/profile_edit' />
      </Stack>
      </QuizProvider>
    </ThemeProvider>
  );
}

export default Root_layout;

const styles = StyleSheet.create({});
