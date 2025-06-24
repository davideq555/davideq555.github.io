<template>
  <section id="about" class="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="section-title animate-slide-up">{{ t('about.title') }}</h2>
        
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="animate-slide-up">
            <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              {{ t('about.paragraph1') }}
            </p>
            
            <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              {{ t('about.paragraph2') }}
            </p>

            <div class="flex flex-wrap gap-4">
              <div class="bg-secondary-100 dark:bg-secondary-900/30 px-4 py-2 rounded-full">
                <span class="text-secondary-700 dark:text-secondary-300 font-medium">{{ t('about.experience') }}</span>
              </div>
              <div class="bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full">
                <span class="text-primary-700 dark:text-primary-300 font-medium">{{ t('about.projects') }}</span>
              </div>
            </div>
          </div>

          <div class="animate-slide-up flex justify-center">
              <MacTerminal />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MacTerminal from './MacTerminal.vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>