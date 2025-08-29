<template>
  <label class="swap swap-rotate">
    <input
      type="checkbox"
      v-model="isDark"
      @change="toggleTheme"
    />
    <span class="swap-on">🌙 Dark</span>
    <span class="swap-off">☀️ Light</span>
  </label>
</template>

<script setup lang="ts">
const isDark = ref(false)
const theme = useState<'light' | 'dark'>('theme', () => 'light')

watch(theme, (val) => {
  isDark.value = val === 'dark'
})

function toggleTheme() {
  theme.value = isDark.value ? 'dark' : 'light'
}
</script>
