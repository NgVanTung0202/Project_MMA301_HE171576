// frontend/navigation/RandomNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RandomMenuScreen from '../screens/random/RandomMenuScreen';
import RandomSplitScreen from '../screens/random/RandomSplitScreen';
import RandomPickerScreen from '../screens/random/RandomPickerScreen';
import { COLORS } from '../utils/constants';

const Stack = createNativeStackNavigator();
const Icon = Ionicons;

const RandomNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerTintColor: COLORS.primary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: ({ canGoBack }) =>
          canGoBack ? (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginRight: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          ) : null,
      }}
    >
      <Stack.Screen
        name="RandomMenu"
        component={RandomMenuScreen}
        options={{
          title: 'Công cụ ngẫu nhiên',
        }}
      />
      <Stack.Screen
        name="RandomSplit"
        component={RandomSplitScreen}
        options={{
          title: 'Chia tiền ngẫu nhiên',
        }}
      />
      <Stack.Screen
        name="RandomPicker"
        component={RandomPickerScreen}
        options={{
          title: 'Bộ chọn ngẫu nhiên',
        }}
      />
    </Stack.Navigator>
  );
};

export default RandomNavigator;