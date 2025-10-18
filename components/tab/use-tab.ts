import { useCallback, useState } from 'react'

export const useTabNavigation = (
	tabs: { id: string }[],
	initialTab?: string
) => {
	const [activeTab, setActiveTab] = useState(initialTab || tabs[0]?.id)

	const handleTabChange = useCallback((tabId: string) => {
		setActiveTab(tabId)
	}, [])

	return {
		activeTab,
		setActiveTab: handleTabChange,
	}
}
