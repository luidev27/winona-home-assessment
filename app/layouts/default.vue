<template>
  <div :data-theme="theme" class="flex flex-col h-screen">
    <header class="navbar bg-base-100 shadow-sm flex-none">
      <div class="flex-1">
        <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">Winona Home Assessment</NuxtLink>
      </div>
      <div class="flex-none">
        <ThemeToggle />
      </div>
    </header>

    <main class="flex-1 overflow-y-auto p-6">
      <slot />
    </main>

    <footer class="footer bg-base-200 p-4 justify-center flex-none">
      <ThemeToggle />
    </footer>
  </div>
</template>

<script setup lang="ts">
const theme = useState<'light' | 'dark'>('theme', () => 'light')
</script>
