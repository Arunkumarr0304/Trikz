import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { ThemeProvider } from '../theme/ThemeContext';
import { useEffect } from 'react';

const Root_layout = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('(auth)/login');
  }, []);

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(auth)' />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='(screens)/paginationscreens' />
        <Stack.Screen name='(screens)/score' />
      </Stack>
    </ThemeProvider>
  );
}

export default Root_layout;

const styles = StyleSheet.create({});
