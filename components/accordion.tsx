import React, { ReactNode, useState } from 'react'
import { Pressable, View } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import { styled } from 'styled-components/native'

interface AccordionItem {
	id: string
	header: (isOpen: boolean) => ReactNode
	content: ReactNode
}

interface AccordionProps {
	items: AccordionItem[]
	multiple?: boolean
}

export const Accordion: React.FC<AccordionProps> = ({
	items,
	multiple = false,
}) => {
	const [openItems, setOpenItems] = useState<Set<string>>(new Set())
	const [contentHeights, setContentHeights] = useState<{
		[key: string]: number
	}>({})

	const toggleItem = (itemId: string) => {
		setOpenItems(prev => {
			const newSet = new Set(prev)
			if (newSet.has(itemId)) {
				newSet.delete(itemId)
			} else {
				if (!multiple) {
					newSet.clear()
				}
				newSet.add(itemId)
			}
			return newSet
		})
	}

	const handleContentLayout = (itemId: string, height: number) => {
		setContentHeights(prev => ({
			...prev,
			[itemId]: height,
		}))
	}

	return (
		<Container>
			{items.map(item => (
				<AccordionItemWithHeader
					key={item.id}
					item={item}
					isOpen={openItems.has(item.id)}
					contentHeight={contentHeights[item.id] || 0}
					onToggle={() => toggleItem(item.id)}
					onContentLayout={handleContentLayout}
				/>
			))}
		</Container>
	)
}

interface AccordionItemWithHeaderProps {
	item: AccordionItem
	isOpen: boolean
	contentHeight: number
	onToggle: () => void
	onContentLayout: (itemId: string, height: number) => void
}

const AccordionItemWithHeader: React.FC<AccordionItemWithHeaderProps> = ({
	item,
	isOpen,
	contentHeight,
	onToggle,
	onContentLayout,
}) => {
	const height = useSharedValue(0)
	const opacity = useSharedValue(0)
	const rotate = useSharedValue(0)

	const animatedStyle = useAnimatedStyle(() => ({
		height: height.value,
		opacity: opacity.value,
	}))

	React.useEffect(() => {
		if (isOpen && contentHeight > 0) {
			height.value = withTiming(contentHeight, { duration: 300 })
			opacity.value = withTiming(1, { duration: 200 })
			rotate.value = withTiming(180, { duration: 300 })
		} else {
			height.value = withTiming(0, { duration: 300 })
			opacity.value = withTiming(0, { duration: 150 })
			rotate.value = withTiming(0, { duration: 300 })
		}
	}, [isOpen, contentHeight])

	const handleLayout = (event: any) => {
		const { height: layoutHeight } = event.nativeEvent.layout
		if (layoutHeight > 0) {
			onContentLayout(item.id, layoutHeight)
		}
	}

	return (
		<View>
			<Header onPress={onToggle}>
				<HeaderContent>{item.header(isOpen)}</HeaderContent>
			</Header>

			<ContentContainer style={animatedStyle}>
				<ContentWrapper onLayout={handleLayout}>{item.content}</ContentWrapper>
			</ContentContainer>
		</View>
	)
}

const Container = styled(View)`
	width: 100%;
`

const Header = styled(Pressable)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const HeaderContent = styled(View)`
	flex: 1;
`

const ContentContainer = styled(Animated.View)`
	overflow: hidden;
`

const ContentWrapper = styled(View)`
	position: absolute;
	width: 100%;
	padding: 16px;
`
