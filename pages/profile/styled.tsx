import { Divider, Icon, IconType } from '@/components'
import { OpacityText } from '@/components/opacity-text'
import { THEMES } from '@/components/provider'
import { StyledText } from '@/components/styled-text'
import { themeModel } from '@/entities/theme'
import { useUnit } from 'effector-react'
import { Alert, Linking, Pressable, TouchableOpacity, View } from 'react-native'
import { styled } from 'styled-components/native'

export type ContactTypeType = 'phone' | 'email' | 'web-site'

const contactIcons: Record<ContactTypeType, IconType> = {
	email: 'envelope',
	phone: 'phone',
	'web-site': 'globe',
}

const contactTitles: Record<ContactTypeType, string> = {
	email: 'Email',
	phone: 'Телефон',
	'web-site': 'Веб-сайт',
}

const contactLinks: Record<ContactTypeType, string> = {
	email: 'mailto:',
	phone: 'tel:',
	'web-site': '',
}

const openExternalLink = async ({ type, value }: ContactType) => {
	const url = `${contactLinks[type]}${value}`

	try {
		const supported = await Linking.canOpenURL(url)

		if (supported) {
			await Linking.openURL(url)
		} else {
			Alert.alert('Ошибка', 'Это приложение не может открыть данную ссылку')
		}
	} catch (error) {
		Alert.alert('Ошибка', 'Не удалось открыть ссылку')
		console.error(error)
	}
}

export type ContactType = {
	type: ContactTypeType
	value: string
}

interface IContactList {
	contacts: ContactType[]
}

export const ContactList = ({ contacts }: IContactList) => {
	return (
		<View style={{ gap: 16 }}>
			{contacts.map(({ type, value }) => (
				<ContactItem
					key={type}
					value={value}
					type={type}
					icon={contactIcons[type]}
					title={contactTitles[type]}
				/>
			))}
		</View>
	)
}

interface IContactItem {
	icon: IconType
	title: string
	value: string
	type: ContactTypeType
}

export const ContactItem = ({ value, icon, title, type }: IContactItem) => {
	const themeMode = useUnit(themeModel.$themeMode)

	return (
		<TouchableOpacity
			style={{
				gap: 16,
			}}
			onPress={async () => await openExternalLink({ type, value })}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						gap: 12,
					}}
				>
					<IconContainer>
						<Icon name={icon} color={THEMES[themeMode].accent.primary} />
					</IconContainer>

					<View>
						<StyledText style={{ fontWeight: '700', opacity: 0.6 }}>
							{title}
						</StyledText>

						<OpacityText>{value}</OpacityText>
					</View>
				</View>

				<Pressable>
					<Icon name={'share'} />
				</Pressable>
			</View>

			<Divider />
		</TouchableOpacity>
	)
}

const IconContainer = styled.View`
	height: 40px;
	width: 40px;
	background-color: ${({ theme }) => theme.accent.primaryLight};
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`
