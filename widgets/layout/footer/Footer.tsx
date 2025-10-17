import { RelativePathString, usePathname, useRouter } from 'expo-router'
import { styled } from 'styled-components/native'
import { NavItem } from '../nav-item/NavItem'
import { navList } from '../nav-list.data'

export const Footer = () => {
	const { navigate } = useRouter()

	const pathname = usePathname()

	return (
		<FooterContainer>
			{navList.map(item => (
				<NavItem
					key={item.link}
					onPress={() => navigate(item.link as RelativePathString)}
					{...item}
					paddingVertical={10}
					isText={false}
					isActive={pathname === item.link}
				/>
			))}
		</FooterContainer>
	)
}

const FooterContainer = styled.View`
	background-color: ${({ theme }) => theme.background};
	flex-direction: row;
	justify-content: space-between;
	padding: 12px 34px;
	width: 100%;
	position: absolute;
	left: 0;
	z-index: 1000;
	bottom: 0;
	border-top-width: 1px;
	border-top-color: ${({ theme }) => theme.grayScale.gray2};
`
