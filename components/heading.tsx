import { StyledText } from './styled-text'

interface IProps {
	title: string
	marginBottom?: number
}

export const Heading = ({ title, marginBottom = 0 }: IProps) => {
	return <StyledText style={{ fontSize: 36, marginBottom }}>{title}</StyledText>
}
