import { useEffect, useState } from 'react'
import { Dimensions, Pressable, Text, View } from 'react-native'
import { styled } from 'styled-components/native'

interface IProps {
	data: {
		title: string
		id: string
		count: number
	}[]
	activeId: string
	setActiveId: (activeId: string) => void
	margin?: {
		top?: number
		bottom?: number
	}
}

const { width } = Dimensions.get('window')

export const Tab = ({
	data,
	activeId,
	setActiveId,
	margin = {
		bottom: 0,
		top: 0,
	},
}: IProps) => {
	const [translateX, setTranslateX] = useState(0)
	const [barWidth, setBarWidth] = useState(0)

	const [tabSizes, setTabSizes] = useState<{
		[key: string]: { x: number; width: number }
	}>({})

	const handleTabLayout = (tabId: string) => (event: any) => {
		const { x, width } = event.nativeEvent.layout

		setTabSizes(prev => ({
			...prev,
			[tabId]: { x, width },
		}))
	}

	useEffect(() => {
		const activeTabData = tabSizes[activeId]

		if (activeTabData) {
			const { x, width } = activeTabData

			setTranslateX(x)
			setBarWidth(width)
		}
	}, [activeId, tabSizes])

	return (
		<View
			style={{
				flexDirection: 'row',
				width,
				paddingHorizontal: 16,
				gap: 24,
				alignItems: 'center',
				marginTop: margin.top,
				marginBottom: margin.bottom,
			}}
		>
			<ActiveBar translateX={translateX} width={barWidth} />

			{data.map(({ id, title, count }) => (
				<Pressable
					key={id}
					onPress={() => setActiveId(id)}
					style={{ flexDirection: 'row', gap: 10 }}
					onLayout={handleTabLayout(id)}
				>
					{activeId === id ? (
						<>
							<ActiveText>{title}</ActiveText>

							<CountBox>
								<CountActiveText>{count}</CountActiveText>
							</CountBox>
						</>
					) : (
						<>
							<CommonText>{title}</CommonText>

							<CountBox>
								<CountCommonText>{count}</CountCommonText>
							</CountBox>
						</>
					)}
				</Pressable>
			))}
		</View>
	)
}

const ActiveBar = styled(View)<{ width: number; translateX: number }>`
	height: 2px;
	background-color: ${({ theme }) => theme.accent.primary};
	width: ${({ width }) => width}px;
	transform: translateX(${({ translateX }) => translateX}px);
	position: absolute;
	bottom: -10px;
`

const ActiveText = styled(Text)`
	color: ${({ theme }) => theme.accent.primary};
	font-size: 14px;
	font-weight: 500;
`

const CommonText = styled(Text)`
	color: ${({ theme }) => theme.grayScale.gray1};
	font-size: 14px;
	font-weight: 500;
`

const CountActiveText = styled(ActiveText)`
	fontsize: 12px;
	border-radius: 4px;
`

const CountCommonText = styled(CommonText)`
	fontsize: 12px;
	border-radius: 4px;
`

const CountBox = styled(View)`
	width: 22px;
	height: 22px;
	background-color: ${({ theme }) => theme.grayScale.gray3};
	justify-content: center;
	align-items: center;
`
