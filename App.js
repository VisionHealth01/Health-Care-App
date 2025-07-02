
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MeditationScreen from './src/screens/MeditationScreen';
import JournalScreen from './src/screens/JournalScreen';
import MoodTrackerScreen from './src/screens/MoodTrackerScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';
import ReminderScreen from './src/screens/ReminderScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Meditation">
        <Tab.Screen name="Meditation" component={MeditationScreen} />
        <Tab.Screen name="Journal" component={JournalScreen} />
        <Tab.Screen name="Mood" component={MoodTrackerScreen} />
        <Tab.Screen name="Chatbot" component={ChatbotScreen} />
        <Tab.Screen name="Reminders" component={ReminderScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
