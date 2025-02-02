import { create } from 'zustand';
import { LOCAL_STORAGE_KEYS, getFromStorage } from '@/shared/lib/local-storage';
import type { UserProfileDto } from '../model/types';

interface UserStore {
  user: UserProfileDto | null;
  setUser: (user: UserProfileDto | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: getFromStorage(LOCAL_STORAGE_KEYS.USER_PROFILE),
  setUser: (user) => set({ user })
}));