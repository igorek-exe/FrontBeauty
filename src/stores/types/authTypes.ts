export interface User {
    id: string;
    role: 'client' | 'master';
    login: string;
    email: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: {
        user: User;
        token: string;
    };
}

interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: string;
}

interface LogoutAction {
    type: typeof LOGOUT;
}

export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction | LogoutAction;

export interface LoginCredentials {
    login: string;
    password: string;
}

export enum Role {
    master = 'master',
    client = 'client',
}

export interface RegisterMasterCredentials {
    role: 'master';
    username: string;
    email: string;
    password: string;
}

export interface RegisterClientCredentials {
    role: 'client';
    username: string;
    email: string;
    password: string;
}

export type RegisterCredentials = RegisterClientCredentials | RegisterMasterCredentials;
