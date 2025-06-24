<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" :class="headerClasses">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo with enhanced animation -->
        <div class="relative group">
          <div class="text-2xl font-bold bg-gradient-to-r from-secondary-500 via-primary-500 to-secondary-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
            Portfolio
          </div>
          <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500 group-hover:w-full transition-all duration-500"></div>
        </div>
        
        <!-- Desktop Navigation with enhanced effects -->
        <div class="hidden md:flex items-center space-x-1">
          <div 
            v-for="(item, index) in navItems" 
            :key="item.name"
            class="relative"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <a 
              :href="item.href"
              class="nav-link group relative px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              :class="{ 'nav-link-active': activeSection === item.href.slice(1) }"
              @click="scrollToSection($event, item.href)"
            >
              <!-- Background glow effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              <!-- Text -->
              <span class="relative z-10 font-medium text-gray-700 dark:text-gray-300 group-hover:text-secondary-500 dark:group-hover:text-secondary-400 transition-colors duration-300">
                {{ item.name }}
              </span>
              
              <!-- Animated underline -->
              <div class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500 group-hover:w-full group-hover:left-0 transition-all duration-500"></div>
              
              <!-- Active indicator -->
              <div 
                v-if="activeSection === item.href.slice(1)"
                class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-secondary-500 rounded-full animate-pulse"
              ></div>
            </a>
          </div>
        </div>

        <!-- Right side controls with enhanced styling -->
        <div class="flex items-center space-x-3">
          <!-- Language toggle -->
          <button
            @click="toggleLanguage"
            class="language-toggle relative p-3 rounded-xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50 hover:bg-secondary-100/20 dark:hover:bg-secondary-900/20 transition-all duration-500 group overflow-hidden"
            :aria-label="'Switch to ' + (currentLanguage === 'es' ? 'English' : 'Español')"
          >
            <!-- Background animation -->
            <div class="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Language indicator -->
            <div class="relative z-10 w-5 h-5 flex items-center justify-center">
              <span class="text-xs font-bold text-gray-700 dark:text-gray-300 group-hover:text-secondary-500 dark:group-hover:text-secondary-400 transition-colors duration-300">
                {{ currentLanguage.toUpperCase() }}
              </span>
            </div>
          </button>
          
          <!-- Theme toggle with enhanced animation -->
          <button
            @click="toggleTheme"
            class="theme-toggle relative p-3 rounded-xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50 hover:bg-secondary-100/20 dark:hover:bg-secondary-900/20 transition-all duration-500 group overflow-hidden"
            aria-label="Toggle theme"
          >
            <!-- Background animation -->
            <div class="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Icons with rotation animation -->
            <div class="relative z-10 w-5 h-5">
              <SunIcon 
                v-if="isDark" 
                class="w-5 h-5 text-tertiary-500 transform transition-transform duration-500 group-hover:rotate-180" 
              />
              <MoonIcon 
                v-else 
                class="w-5 h-5 text-gray-700 dark:text-gray-300 transform transition-transform duration-500 group-hover:-rotate-12" 
              />
            </div>
          </button>
          
          <!-- Mobile menu toggle with enhanced animation -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden relative p-3 rounded-xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50 hover:bg-secondary-100/20 dark:hover:bg-secondary-900/20 transition-all duration-500 group overflow-hidden"
            aria-label="Toggle menu"
          >
            <!-- Background animation -->
            <div class="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Hamburger animation -->
            <div class="relative z-10 w-6 h-6 flex flex-col justify-center items-center">
              <div class="hamburger-line" :class="{ 'hamburger-line-active-1': isMobileMenuOpen }"></div>
              <div class="hamburger-line" :class="{ 'hamburger-line-active-2': isMobileMenuOpen }"></div>
              <div class="hamburger-line" :class="{ 'hamburger-line-active-3': isMobileMenuOpen }"></div>
            </div>
          </button>
        </div>
      </div>

      <!-- Enhanced Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 transform -translate-y-4"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-4"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden mt-6">
          <!-- Backdrop blur -->
          <div class="absolute inset-x-0 top-full h-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-md -z-10"></div>
          
          <!-- Menu items -->
          <div class="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-2xl">
            <div class="flex flex-col space-y-2">
              <a 
                v-for="(item, index) in navItems" 
                :key="item.name"
                :href="item.href"
                class="mobile-nav-link group relative px-4 py-3 rounded-xl transition-all duration-300"
                :class="{ 'mobile-nav-link-active': activeSection === item.href.slice(1) }"
                :style="{ animationDelay: `${index * 0.1}s` }"
                @click="scrollToSection($event, item.href); toggleMobileMenu()"
              >
                <!-- Background effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <!-- Text -->
                <span class="relative z-10 font-medium text-gray-700 dark:text-gray-300 group-hover:text-secondary-500 dark:group-hover:text-secondary-400 transition-colors duration-300">
                  {{ item.name }}
                </span>
                
                <!-- Active indicator -->
                <div 
                  v-if="activeSection === item.href.slice(1)"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-secondary-500 rounded-full animate-pulse"
                ></div>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useTheme } from '../composables/useTheme'
import { useLanguage } from '../composables/useLanguage'

const { isDark, toggleTheme } = useTheme()
const { currentLanguage, toggleLanguage, t } = useLanguage()
const isMobileMenuOpen = ref(false)
const scrollY = ref(0)
const activeSection = ref('home')

const navItems = computed(() => [
  { name: t('nav.home'), href: '#home' },
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.skills'), href: '#skills' },
  { name: t('nav.projects'), href: '#projects' },
  { name: t('nav.contact'), href: '#contact' }
])

// Enhanced header classes with scroll effects
const headerClasses = computed(() => ({
  'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg': scrollY.value > 50,
  'bg-transparent': scrollY.value <= 50
}))

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollToSection = (event: Event, href: string) => {
  event.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Enhanced scroll tracking for active section
const updateActiveSection = () => {
  const sections = navItems.value.map(item => item.href.slice(1))
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

const handleScroll = () => {
  scrollY.value = window.scrollY
  updateActiveSection()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Enhanced navigation link styles */
.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link-active {
  @apply bg-gradient-to-r from-secondary-100/50 to-primary-100/50 dark:from-secondary-900/30 dark:to-primary-900/30;
}

.nav-link-active span {
  @apply text-secondary-500 dark:text-secondary-400;
}

/* Mobile navigation styles */
.mobile-nav-link {
  animation: slideInUp 0.5s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.mobile-nav-link-active {
  @apply bg-gradient-to-r from-secondary-100/50 to-primary-100/50 dark:from-secondary-900/30 dark:to-primary-900/30;
}

.mobile-nav-link-active span {
  @apply text-secondary-500 dark:text-secondary-400;
}

/* Hamburger menu animation */
.hamburger-line {
  @apply w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ease-in-out;
  margin: 2px 0;
  transform-origin: center;
}

.hamburger-line-active-1 {
  transform: rotate(45deg) translate(3px, 3px);
}

.hamburger-line-active-2 {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger-line-active-3 {
  transform: rotate(-45deg) translate(3px, -3px);
}

/* Theme toggle animation */
.theme-toggle:hover {
  transform: scale(1.05);
}

/* Gradient animation for logo */
@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
  background-size: 200% 200%;
}

.bg-size-200 {
  background-size: 200% 200%;
}

/* Slide in animation for mobile menu items */
@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>