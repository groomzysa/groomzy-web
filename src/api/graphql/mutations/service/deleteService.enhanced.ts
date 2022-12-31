import { api } from "./deleteService.generated";

export const enhancedDeleteServiceApi = api.enhanceEndpoints({
  addTagTypes: ["Services"],
  endpoints: {
    deleteService: { invalidatesTags: ["Services"] },
  },
});

export const { useDeleteServiceMutation } = enhancedDeleteServiceApi;
