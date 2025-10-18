import React, { useRef, useState } from 'react'
import {
	Keyboard,
	Pressable,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import { styled } from 'styled-components/native'
import { Icon } from '../icon'

interface Tag {
	id: string
	text: string
}

interface TagInputProps {
	tags: Tag[]
	onChangeTags: (tags: Tag[]) => void
	placeholder?: string
	maxTags?: number
	disabled?: boolean
}

export const TagInput: React.FC<TagInputProps> = ({
	tags,
	onChangeTags,
	placeholder,
	maxTags = 10,
	disabled = false,
}) => {
	const [inputValue, setInputValue] = useState('')
	const inputRef = useRef<TextInput>(null)

	const addTag = () => {
		const trimmedValue = inputValue.trim()

		if (trimmedValue && tags.length < maxTags && !disabled) {
			if (
				!tags.some(tag => tag.text.toLowerCase() === trimmedValue.toLowerCase())
			) {
				const newTag: Tag = {
					id: Date.now().toString(),
					text: trimmedValue,
				}
				onChangeTags([...tags, newTag])
				setInputValue('')
			}
		}
	}

	const removeTag = (tagId: string) => {
		if (!disabled) {
			onChangeTags(tags.filter(tag => tag.id !== tagId))
		}
	}

	const handleInputSubmit = () => {
		addTag()
	}

	const handleInputChange = (text: string) => {
		if (!disabled) {
			if (text.endsWith(',') || text.endsWith(';') || text.endsWith(' ')) {
				const tagText = text.slice(0, -1).trim()
				if (tagText) {
					setInputValue('')
					if (
						!tags.some(
							tag => tag.text.toLowerCase() === tagText.toLowerCase()
						) &&
						tags.length < maxTags
					) {
						const newTag: Tag = {
							id: Date.now().toString(),
							text: tagText,
						}
						onChangeTags([...tags, newTag])
					}
				}
			} else {
				setInputValue(text)
			}
		}
	}

	const focusInput = () => {
		if (!disabled) {
			inputRef.current?.focus()
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container>
				<Pressable onPress={focusInput}>
					<InputWrapper>
						<StyledTextInput
							ref={inputRef}
							value={inputValue}
							onChangeText={handleInputChange}
							onSubmitEditing={handleInputSubmit}
							placeholder={tags.length === 0 ? placeholder : 'Добавить еще...'}
							editable={!disabled}
							returnKeyType='done'
						/>
						<AddButton
							onPress={addTag}
							disabled={
								disabled || !inputValue.trim() || tags.length >= maxTags
							}
						>
							<Icon name={'plus'} color={'#fff'} />
						</AddButton>
					</InputWrapper>
				</Pressable>

				<TagsContainer>
					{tags.map(tag => (
						<TagItem key={tag.id}>
							<TagText>#{tag.text}</TagText>
							{!disabled && (
								<RemoveButton onPress={() => removeTag(tag.id)}>
									<RemoveText>×</RemoveText>
								</RemoveButton>
							)}
						</TagItem>
					))}
				</TagsContainer>

				<Footer>
					<TagsCount>
						{tags.length} / {maxTags}
					</TagsCount>
					{tags.length >= maxTags && (
						<MaxTagsWarning>Максимум тегов</MaxTagsWarning>
					)}
				</Footer>
			</Container>
		</TouchableWithoutFeedback>
	)
}

const Container = styled(View)`
	border-width: 1px;
	border-color: ${({ theme }) => theme.grayScale.gray2};
	border-radius: 8px;
	padding: 10px;
`

const InputWrapper = styled(View)`
	flex-direction: row;
	align-items: center;
	margin-bottom: 12px;
`

const AddButton = styled(Pressable)<{ disabled: boolean }>`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${({ theme, disabled }) =>
		disabled ? theme.grayScale.gray2 : theme.accent.primary};
	justify-content: center;
	align-items: center;
`

const StyledTextInput = styled(TextInput)`
	flex: 1;
	font-size: 16px;
	padding: 12px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.grayScale.gray3};
	border-radius: 8px;
	margin-right: 8px;
`

const TagItem = styled(View)`
	flex-direction: row;
	align-items: center;
	background-color: ${({ theme }) => theme.accent.primary}20;
	border-radius: 30px;
	padding: 5px 18px;
	gap: 5px;
`

const TagsContainer = styled(View)`
	flex-direction: row;
	flex-wrap: wrap;
	gap: 8px;
`

const TagText = styled(Text)`
	color: ${({ theme }) => theme.accent.primary};
	font-size: 14px;
	font-weight: 600;
`

const RemoveButton = styled(Pressable)`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.accent.primary};
	justify-content: center;
	align-items: center;
`

const RemoveText = styled(Text)`
	color: white;
	font-size: 12px;
	font-weight: bold;
	line-height: 14px;
`

const Footer = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 12px;
	padding-top: 8px;
	border-top-width: 1px;
	border-top-color: ${({ theme }) => theme.grayScale.gray2};
`

const TagsCount = styled(Text)`
	color: ${({ theme }) => theme.grayScale.gray1};
	font-size: 12px;
`

const MaxTagsWarning = styled(Text)`
	color: #f00;
	font-size: 12px;
	font-weight: 500;
`
