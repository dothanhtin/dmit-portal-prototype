// API Client for CMS
const API_BASE_URL = 'http://localhost:3001/api';

class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        
        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Request failed');
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Posts API
    async getPosts(status = 'all') {
        const query = status !== 'all' ? `?status=${status}` : '';
        return this.request(`/posts${query}`);
    }

    async getPost(id) {
        return this.request(`/posts/${id}`);
    }

    async createPost(postData) {
        return this.request('/posts', {
            method: 'POST',
            body: JSON.stringify(postData)
        });
    }

    async updatePost(id, postData) {
        return this.request(`/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(postData)
        });
    }

    async deletePost(id) {
        return this.request(`/posts/${id}`, {
            method: 'DELETE'
        });
    }

    async publishPost(id) {
        return this.request(`/posts/${id}/publish`, {
            method: 'POST'
        });
    }

    // Notifications API
    async getNotifications() {
        return this.request('/notifications');
    }

    async createNotification(notificationData) {
        return this.request('/notifications', {
            method: 'POST',
            body: JSON.stringify(notificationData)
        });
    }

    async updateNotification(id, notificationData) {
        return this.request(`/notifications/${id}`, {
            method: 'PUT',
            body: JSON.stringify(notificationData)
        });
    }

    async deleteNotification(id) {
        return this.request(`/notifications/${id}`, {
            method: 'DELETE'
        });
    }

    async sendNotification(id) {
        return this.request(`/notifications/${id}/send`, {
            method: 'POST'
        });
    }

    // Enterprises API
    async getEnterprises(filters = {}) {
        const params = new URLSearchParams();
        Object.keys(filters).forEach(key => {
            if (filters[key]) params.append(key, filters[key]);
        });
        const query = params.toString() ? `?${params.toString()}` : '';
        return this.request(`/enterprises${query}`);
    }

    async createEnterprise(enterpriseData) {
        return this.request('/enterprises', {
            method: 'POST',
            body: JSON.stringify(enterpriseData)
        });
    }

    async updateEnterprise(id, enterpriseData) {
        return this.request(`/enterprises/${id}`, {
            method: 'PUT',
            body: JSON.stringify(enterpriseData)
        });
    }

    async deleteEnterprise(id) {
        return this.request(`/enterprises/${id}`, {
            method: 'DELETE'
        });
    }
}

// Create global API client instance
const api = new APIClient(API_BASE_URL);
