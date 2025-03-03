import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" />
            <Stack.Screen name="propiedades" />
        </Stack>
    )
}

export default Layout