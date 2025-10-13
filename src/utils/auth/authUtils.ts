import { LoginCredentials, RegisterCredentials, User } from '@/stores/types/authTypes';

const API_BASE_URL = '/api'; // Можно вынести в .env

// --- Авторизация ---
export const loginUser = async (
    credentials: LoginCredentials
): Promise<{ user: User; token: string }> => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Ошибка входа');
    }

    const data = await response.json();
    return data; // ожидаем { user, token }
};

// --- Регистрация ---
export const registerUser = async (
    credentials: RegisterCredentials
): Promise<{ user: User; token: string }> => {
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });

    console.log(response);

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Ошибка регистрации');
    }

    const data = await response.json();
    return data; // ожидаем { user, token }
};
