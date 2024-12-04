import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'pro';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // In a real app, this would make an API call
        // For demo purposes, we'll simulate a successful login
        set({
          user: {
            id: '1',
            name: 'Demo User',
            email,
            plan: 'free',
          },
          isAuthenticated: true,
        });
      },
      signup: async (name: string, email: string, password: string) => {
        // In a real app, this would make an API call
        // For demo purposes, we'll simulate a successful signup
        set({
          user: {
            id: '1',
            name,
            email,
            plan: 'free',
          },
          isAuthenticated: true,
        });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);