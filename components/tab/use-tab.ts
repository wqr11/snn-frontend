import { useCallback, useState } from 'react'

export const useTabNavigation = <T = string>(
	tabs: { id: T }[],
	initialTab?: T
) => {
	const [activeTab, setActiveTab] = useState(initialTab || tabs[0]?.id)

	const handleTabChange = useCallback((tabId: T) => {
		setActiveTab(tabId)
	}, [])

	return {
		activeTab,
		setActiveTab: handleTabChange,
	}
}
