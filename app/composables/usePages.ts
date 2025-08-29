import type { PageSummary, PageDetail } from '~/types/page'

export const usePages = () => {
  const config = useRuntimeConfig()

  const fetchPages = async (): Promise<PageSummary[]> => {
    return await $fetch<PageSummary[]>(`${config.public.apiBase}/pages`, {
      headers: { Authorization: config.public.apiAuth }
    })
  }

  const fetchPageById = async (id: string): Promise<PageDetail> => {
    return await $fetch<PageDetail>(`${config.public.apiBase}/pages/${id}`, {
      headers: { Authorization: config.public.apiAuth }
    })
  }

  return { fetchPages, fetchPageById }
}
