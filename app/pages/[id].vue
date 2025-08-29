<template>
  <div class="container mx-auto">
    <div class="card bg-base-100 shadow-md">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <NuxtLink to="/" class="btn btn-circle btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </NuxtLink>

          <h1 class="text-2xl font-bold">{{ page.title }}</h1>
        </div>
        <p class="text-sm opacity-70 mb-4">
          📅 Published: {{ formatDate(page.datePublished) }}
          &nbsp;&nbsp;&nbsp;&nbsp;
          🔄 Updated: {{ formatDate(page.dateModified) }}
        </p>

        <article class="prose max-w-none" v-html="page.body"></article>

        <p class="mt-6 text-sm opacity-70">
          ✅ Reviewed by <strong>{{ page.reviewer.name }}</strong>,
          {{ page.reviewer.credentials }} ({{ page.reviewer.affiliation }})
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePages } from '~/composables/usePages'
import type { PageDetail } from '~/types/page'
import { formatDate } from '~/utils/formatDate'

const route = useRoute()
const { fetchPageById } = usePages()
const page: PageDetail = await fetchPageById(route.params.id as string)

useHead({
  title: page.seo.title,
  meta: [{ name: "description", content: page.seo.description }]
})
</script>


