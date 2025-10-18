import { SearchField } from '@/components/search-field'
import { Tab } from '@/components/tab/tab'
import { useTabNavigation } from '@/components/tab/use-tab'
import { View } from 'react-native'
import { styled } from 'styled-components/native'
import { AllGroups } from './all-groups/AllGroups'

type IdType = 'all' | 'companies' | 'competencies'

const tabs = [
	{
		id: 'all',
		title: 'Все',
		count: 24,
	},
	{
		id: 'companies',
		title: 'Компании',
		count: 15,
	},
	{
		id: 'competencies',
		title: 'Компетенции',
		count: 9,
	},
]

export const GroupsPageUI = () => {
	const { activeTab, setActiveTab } = useTabNavigation(tabs)

	return (
		<View>
			<Container>
				<SearchField placeholder='Поиск' />
			</Container>

			<Tab
				margin={{
					bottom: 16,
					top: 16,
				}}
				setActiveId={setActiveTab}
				activeId={activeTab}
				data={tabs}
			/>

			<Container>
				<AllGroups />
			</Container>
		</View>
	)
}
const Container = styled.View`
	padding: 0 16px;
`
