import { ref, type Ref } from 'vue'
import { setThemeMode, isDarkMode } from '../vendor/jelly/jelly.js'

const STORAGE_KEY = 'theme'

export function useTheme (): { isDark: Ref<boolean>, toggle: () => void } {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (stored === 'light' || stored === 'dark') {
    setThemeMode(stored)
  }

  const isDark = ref<boolean>(isDarkMode())

  function toggle (): void {
    isDark.value = !isDark.value

    const mode = isDark.value ? 'dark' : 'light'

    localStorage.setItem(STORAGE_KEY, mode)
    setThemeMode(mode)
  }

  return { isDark, toggle }
}
