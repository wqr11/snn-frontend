import { authModel } from '@/entities/auth'
import { sample } from 'effector'
import { createForm } from 'effector-forms'

export const $form = createForm({
	fields: {
		isGroup: {
			init: false,
		},
		name: {
			init: '',
			rules: [
				{
					name: 'required',
					validator: val => !!val,
					errorText: 'Пароль обязателен',
				},
			],
		},
		email: {
			init: '',
			rules: [
				{
					name: 'required',
					validator: val => !!val,
					errorText: 'E-mail обязателен',
				},
				{
					name: 'email',
					validator: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
					errorText: 'E-mail невалидный',
				},
			],
		},
		password: {
			init: '',
			rules: [
				{
					name: 'required',
					validator: val => !!val,
					errorText: 'Пароль обязателен',
				},
			],
		},
		confirmPassword: {
			init: '',
			rules: [
				{
					name: 'required',
					validator: val => !!val,
					errorText: 'Пароль обязателен',
				},
				{
					name: 'equals-pass',
					validator: (val, form) => val === form.password,
					errorText: 'Пароли не совпадают',
				},
			],
		},
	},
})

sample({
	clock: $form.submit,
	source: { valid: $form.$isValid, values: $form.$values },
	filter: ({ valid }) => valid,
	fn: ({ values }) => ({ ...values }),
	target: authModel.signUpFx,
})
