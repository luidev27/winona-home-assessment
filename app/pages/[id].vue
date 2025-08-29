<template>
  <div class="container mx-auto">
    <div class="card bg-base-100 shadow-md">
      <div class="card-body">
        <h1 class="text-3xl font-bold mb-2">{{ page.title }}</h1>
        <p class="text-sm opacity-70 mb-4">
          📅 Published: {{ formatDate(page.datePublished) }}  
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

const route = useRoute()
const { fetchPageById } = usePages()
const page: PageDetail = await fetchPageById(route.params.id as string)

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric"
  })
}

useHead({
  title: page.seo.title,
  meta: [{ name: "description", content: page.seo.description }]
})
</script>

