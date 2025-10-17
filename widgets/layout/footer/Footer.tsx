import { RelativePathString, useRouter } from 'expo-router'
import { FlatList } from 'react-native'
import { styled } from 'styled-components/native'
import { NavItem } from '../nav-item/NavItem'
import { navList } from '../nav-list.data'

export const Footer = () => {
	const { navigate } = useRouter()

	return (
		<FooterContainer>
			<FlatList
				data={navList}
				renderItem={({ item }: any) => (
					<NavItem
						key={item.link}
						onPress={() => navigate(item.link as RelativePathString)}
						{...item}
						paddingVertical={10}
						isIcon={false}
					/>
				)}
			/>
		</FooterContainer>
	)
}

const FooterContainer = styled.View`
	background-color: #fff;
	flex-direction: row;
	justify-content: space-between;
	padding: 12px 16px;
`
