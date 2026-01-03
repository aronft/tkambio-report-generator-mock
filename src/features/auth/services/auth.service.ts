import type { AuthResponse, LoginCredentials } from '../types/auth.types'
import { MOCK_USER_CREDENTIALS } from '../auth.constants'

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    if (credentials.email === 'user@tkambio.com' && credentials.password === 'tkambio123') {
      return MOCK_USER_CREDENTIALS
    }
    throw new Error('Invalid credentials')
  },

  async verifyToken() {
    return MOCK_USER_CREDENTIALS.user
  },
}
