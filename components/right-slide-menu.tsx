import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions } from 'react-native'
import { styled } from 'styled-components/native'

const { width } = Dimensions.get('window')

interface IProps {
	isOpen: boolean
	children: React.ReactNode
}

export const RightSlidePanel = ({ isOpen, children }: IProps) => {
	const translateX = useRef(new Animated.Value(width)).current
	const overlayOpacity = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.parallel([
			Animated.timing(translateX, {
				toValue: isOpen ? 0 : width,
				duration: 300,
				useNativeDriver: true,
			}),
			Animated.timing(overlayOpacity, {
				toValue: isOpen ? 1 : 0,
				duration: 300,
				useNativeDriver: true,
			}),
		]).start()
	}, [isOpen])

	const panelStyle = {
		transform: [{ translateX }],
	}

	return <AnimatedContainer style={panelStyle}>{children}</AnimatedContainer>
}

const Container = styled.View`
	position: fixed;
	left: 0;
	background-color: '#f00';
	width: '100%';
	height: '100%';
	z-index: 1000;
`

const AnimatedContainer = Animated.createAnimatedComponent(Container)
