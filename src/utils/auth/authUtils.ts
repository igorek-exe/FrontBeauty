import { LoginCredentials, RegisterCredentials, User } from '@/stores/types/authTypes';

const API_BASE_URL = 'http://100.108.1.26:8000/auth'; // Можно вынести в .env

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

    return await response.json(); // ожидаем { user, token }
};

// --- Регистрация ---
export const registerUser = async (
    credentials: RegisterCredentials
): Promise<{ user: User; token: string }> => {
    const response = await fetch(`${API_BASE_URL}/registration/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        let message = 'Ошибка регистрации. Попробуйте позже.';

        if (data.email) {
            message = 'Данная почта уже используется.';
        } else if (data.username) {
            message = 'Данный логин уже существует.';
        } else if (data.detail) {
            message = 'Ошибка: ' + data.detail;
        }

        throw new Error(message);
    }

    return data;
};
