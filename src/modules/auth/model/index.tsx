export interface LoginRequest {
     email: string
     password: string
}

export interface RegisterRequest {
     username: string
     email: string
     password: string
}

export interface LoginResponse {
     token: string
     username: string
}

export interface AuthData {
     token: string
     username: string
     isAuthenticated: boolean
     isLoading: boolean
     error: string
}