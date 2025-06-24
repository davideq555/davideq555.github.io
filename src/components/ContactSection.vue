<template>
  <section id="contact" class="min-h-screen flex items-center py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="section-title animate-slide-up">{{ t('contact.title') }}</h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div class="animate-slide-up">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">{{ t('contact.workTogether') }}</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {{ t('contact.workDescription') }}
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 dark:text-white">{{ t('contact.emailLabel') }}</h4>
                  <a href="mailto:davide.aramayo@gmail.com" class="text-secondary-600 dark:text-secondary-400 hover:underline">
                    davide.aramayo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="animate-slide-up flex flex-col items-center justify-center space-y-6">
            <h4 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">{{ t('contact.socialNetworks') }}</h4>
            <div class="flex space-x-6">
              <a
                href="https://github.com/davideq555"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/davideqa/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                class="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/>
                </svg>
              </a>
              <a
                href="https://codestats.net/users/davideq555"
                target="_blank"
                rel="noopener"
                aria-label="CodeStats"
                class="text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 7.163 16 16 16s16-7.163 16-16c0-8.837-7.163-16-16-16zm0 29.333C8.636 29.333 2.667 23.364 2.667 16S8.636 2.667 16 2.667 29.333 8.636 29.333 16 23.364 29.333 16 29.333zm-2.667-8.666l-6-4 6-4v8zm2.667 2.667c-1.472 0-2.667-1.195-2.667-2.667s1.195-2.667 2.667-2.667 2.667 1.195 2.667 2.667-1.195 2.667-2.667 2.667zm2.667-2.667v-8l6 4-6 4z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- Leyenda final -->
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © {{ new Date().getFullYear() }} {{ t('contact.footerText') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>