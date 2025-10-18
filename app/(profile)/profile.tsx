import { InitGate } from '@/entities/init'
import { ProfilePageUI } from '@/pages/profile'
import { useGate } from 'effector-react'

export default function Index() {
	useGate(InitGate)

	return <ProfilePageUI />
}
