import api from '../api/axios';

export const GithubService = {
    async getGithubRESPONSEUrl() {
        try {
            const response = await api.get('/github/data');
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error getting GitHub RESPONSE URL:', error);
            throw error;
        }
    }
};