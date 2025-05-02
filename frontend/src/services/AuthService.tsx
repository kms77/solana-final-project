import api from '../api/axios';

export const AuthService = {
    async getGithubSignInUrl() {
        try {
            const response = await api.get('/auth/github');
            return response.data;
        } catch (error) {
            console.error('Error getting GitHub sign-in URL:', error);
            throw error;
        }
    }
};