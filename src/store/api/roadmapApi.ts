import { api } from './baseApi';
import type { RoadmapSection, ApiResponse } from '@/types';

export const roadmapApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSections: builder.query<RoadmapSection[], void>({
      query: () => '/roadmap/sections',
      providesTags: ['Roadmap'],
    }),
    getSectionById: builder.query<RoadmapSection, string>({
      query: (id) => `/roadmap/sections/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Roadmap', id }],
    }),
    updateUserProgress: builder.mutation({
      query: ({ sectionId, completed }) => ({
        url: `/roadmap/progress/${sectionId}`,
        method: 'PUT',
        body: { completed },
      }),
      invalidatesTags: ['Progress'],
    }),
  }),
});

export const { useGetSectionsQuery, useGetSectionByIdQuery, useUpdateUserProgressMutation } = roadmapApi;
