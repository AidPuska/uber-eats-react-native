import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/Home"
import Details from "./screens/Details"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider as ReduxProvider } from "react-redux"
import configureStore from "./redux/store"
import OrderCompleted from "./screens/OrderCompleted"

const store = configureStore()

const RootNavigation = () => {
    
    const Stack = createNativeStackNavigator()

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Details' component={Details} />
                    <Stack.Screen options={{title: 'Order Completed'}} name='OrderCompleted' component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}

export default RootNavigation;