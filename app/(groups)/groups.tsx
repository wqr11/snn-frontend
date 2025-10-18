import { InitGate } from '@/entities/init'
import { GroupsPageUI } from '@/pages/groups'
import { useGate } from 'effector-react'

export default function Index() {
	useGate(InitGate)

	return <GroupsPageUI />
}
