export const formatNumber = (num: number): string => {
	if (num >= 1000000) {
		const millions = Math.floor(num / 1000000)
		return `${millions}M+`
	} else if (num >= 1000) {
		const thousands = Math.floor(num / 1000)
		return `${thousands}K+`
	}
	return num.toString()
}
