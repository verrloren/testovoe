export const LOCAL_STORAGE_KEYS = {
  USER_PROFILE: 'user_profile'
} as const;

export const setToStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeFromStorage = (key: string) => {
	localStorage.removeItem(key);
}