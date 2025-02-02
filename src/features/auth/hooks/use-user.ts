import { useUserStore } from "@/entities/user/store/use-user-store";

export const useUser = () => {
  return useUserStore(state => state.user);
};