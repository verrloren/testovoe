import { useQuery } from '@tanstack/react-query';
import { authApi } from '../api/api';

export const useUserQuery = () => {
  const { data, isLoading, error } = useQuery(authApi.getUser());
  return { user: data, isLoading, error };
};