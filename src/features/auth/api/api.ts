import { UserProfileDto } from "@/entities/user/model/types";
import { jsonApiInstance } from "@/shared/api/api-instance";
import { UseQueryOptions } from "@tanstack/react-query";

export const authApi = {
  baseKey: "user",
  getUser: (): UseQueryOptions => {
    return {
      queryKey: [authApi.baseKey],
      queryFn: ({ signal }) =>
        jsonApiInstance<UserProfileDto>(`/profile`, {
          signal,
          json: null,
        }),
    };
  },
};