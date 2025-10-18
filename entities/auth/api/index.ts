import { API_BASE_URL } from '@/shared/config'
import { SignInParams, SignUpParams } from './types'

export class AuthApi {
	static async signIn(params: SignInParams) {
		return await fetch(`${API_BASE_URL}/login`, {
			body: JSON.stringify(params),
			method: 'POST',
		})
	}

	static async signUp(params: SignUpParams) {
		return await fetch(`${API_BASE_URL}/register`, {
			body: JSON.stringify(params),
			method: 'POST',
		})
	}
}

export * from './types'
