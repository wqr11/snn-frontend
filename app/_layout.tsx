import { themeModel } from '@/entities/theme'
import { ThemeProvider } from '@/shared/components/provider'
import { useUnit } from 'effector-react'
import { Stack } from 'expo-router'

import { Header } from '@/widgets/header/Header'
import { useEffect } from 'react'
import { StatusBar, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function RootLayout() {
	const themeMode = useUnit(themeModel.$themeMode)

	useEffect(() => {
		if (themeMode === 'dark') {
			StatusBar.setBarStyle('light-content')

			StatusBar.setBackgroundColor('#f00')

			StatusBar.setTranslucent(false)
		} else {
			StatusBar.setBarStyle('dark-content')
			StatusBar.setBackgroundColor('#ffffff')
			StatusBar.setTranslucent(false)
		}
	}, [themeMode])

	return (
		<ThemeProvider mode={themeMode ?? 'light'}>
			<SafeAreaProvider>
				<SafeAreaView style={{ flex: 1 }}>
					<View style={{ flex: 1 }}>
						<Header />
						<Stack
							screenOptions={{
								headerShown: false,
							}}
						/>
					</View>
				</SafeAreaView>
			</SafeAreaProvider>
		</ThemeProvider>
	)
}
