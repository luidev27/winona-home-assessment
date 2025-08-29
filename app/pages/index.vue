<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-6">Articles</h1>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="page in pages" :key="page.id" class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">
            <NuxtLink :to="`/${page.id}`" class="link link-primary">
              {{ page.title }}
            </NuxtLink>
          </h2>
          <p class="text-sm opacity-70">
            📅 Published: {{ formatDate(page.datePublished) }}  
            🔄 Updated: {{ formatDate(page.dateModified) }}
          </p>
          <div class="card-actions justify-end mt-2">
            <NuxtLink :to="`/${page.id}`" class="btn btn-sm btn-primary">Read more</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePages } from '~/composables/usePages'
import type { PageSummary } from '~/types/page'

const { fetchPages } = usePages()
const pages: PageSummary[] = await fetchPages()

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric"
  })
}

useHead({
  title: "Articles - Winona",
  meta: [{ name: "description", content: "Browse all Winona articles with publication dates." }]
})
</script>

