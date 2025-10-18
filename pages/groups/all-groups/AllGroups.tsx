import { ScrollView } from 'react-native'
import { GroupItem } from '../styled'

export const AllGroups = () => {
	return (
		<ScrollView
			contentContainerStyle={{
				paddingRight: 10,
			}}
		>
			{new Array(12).fill(null).map((_, i) => (
				<GroupItem
					key={i}
					description='jdjdjdjd'
					title='Nginx'
					image='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCsAlJDmV4GbbMpHa1WUi4Dth7LqW7aLSrGov2IsBS3Jz1gZy0wWS8XE_1uyhaE4MDvCVU5Yp--tOeW6SE0RXBls4V8xfB32a6VwEnlmRY'
					type='company'
				/>
			))}
		</ScrollView>
	)
}
