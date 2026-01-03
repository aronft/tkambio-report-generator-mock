export const USER_TOKEN = 'user_token'

export const AUTH_ROUTES = {
  LOGIN: 'auth-login',
} as const

export const MOCK_USER_CREDENTIALS = {
  access_token: 'token',
  token_type: 'Bearer',
  user: {
    id: '1',
    name: 'user-tkambio',
  },
}
