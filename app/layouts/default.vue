<template>
  <!-- Bind theme dynamically -->
  <div :data-theme="theme" class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="navbar bg-base-100 shadow-sm">
      <NuxtLink to="/" class="btn btn-ghost text-xl">Demo</NuxtLink>
      <div class="ml-auto">
        <!-- Theme toggle -->
        <label class="swap swap-rotate">
          <input
            type="checkbox"
            v-model="isDark"
            @change="toggleTheme"
          />
          
          <svg
            class="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64 17.657A9 9 0 1118 5.64 7 7 0 005.64 17.657z"/>
          </svg>

          <svg
            class="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"/>
          </svg>
        </label>
      </div>
    </header>

    <!-- Scrollable content -->
    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer bg-base-200 p-4 flex justify-center">
      <label class="swap swap-rotate">
        <input
          type="checkbox"
          v-model="isDark"
          @change="toggleTheme"
        />
        <span class="swap-on">🌙 Dark</span>
        <span class="swap-off">☀️ Light</span>
      </label>
    </footer>
  </div>
</template>

<script setup lang="ts">
const isDark = ref(false)
const theme = ref('light')

// sync theme toggle
function toggleTheme() {
  theme.value = isDark.value ? 'dark' : 'light'
}
</script>
