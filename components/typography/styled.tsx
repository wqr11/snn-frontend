import { Text } from 'react-native'
import { css, styled } from 'styled-components/native'

export interface TypographyProps {
	$variant?: 'regular' | 'semibold' | 'thin' | 'h1'
	$color?: string
	$size?: number
	$weight?: number
}

export const Typography = styled(Text)<TypographyProps>`
	font-family: Commissioner;
	color: ${({ theme, $color }) => $color ?? theme.foreground};
	${({ $variant }) => {
		switch ($variant) {
			case 'h1':
				return css`
					font-size: 36px;
					font-weight: 700;
					line-height: 42px;
				`
			case 'semibold':
				return css`
					font-size: 16px;
					font-height: 22px;
					font-weight: 700;
				`
			case 'thin':
				return css`
					font-size: 16px;
					font-height: 22px;
					font-weight: 400;
				`
			default:
			case 'regular':
				return css`
					font-size: 16px;
					font-height: 22px;
					font-weight: 500;
				`
		}
	}}
	${({ $size }) =>
		$size &&
		css`
			font-size: ${$size}px !important;
		`}
    ${({ $weight }) =>
		$weight &&
		css`
			font-size: ${$weight}px !important;
		`}
`
