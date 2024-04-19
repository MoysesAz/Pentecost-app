import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const Navigation = NavigationContainer
export const DSNavigation = Navigation;
export const DSNavigator = Stack.Navigator;
export const DSNavigationLink = Stack.Screen;
