import { ScrollView, Text } from 'react-native'

import { Button } from '@/components/button'
import { Post } from '@/entities/post'
import { PostShortcut } from '@/features/post-shortcut'
import { Stack, router } from 'expo-router'

export const MainPageUI = () => {
	return (
		<ScrollView>
			<Stack.Screen
				options={{
					title: 'feed',
				}}
			/>
			<PostShortcut />
			<Button onTouchStart={() => router.replace('/sign-in')}>
				<Text>Логин</Text>
			</Button>
			<Button onTouchStart={() => router.replace('/sign-up')}>
				<Text>Регистрация</Text>
			</Button>
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
			<Post $desc='asd' $username='asda' $role='se' />
		</ScrollView>
	)
}
