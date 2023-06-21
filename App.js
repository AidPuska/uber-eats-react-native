import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation';
import Details from './screens/Details';
import Home from './screens/Home';

export default function App() {
  return (
    <RootNavigation />
  );
}
