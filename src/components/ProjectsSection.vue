<template>
  <section id="projects" class="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="section-title animate-slide-up">{{ t('projects.recentProjects') }}</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="(project, index) in projects" 
            :key="index"
            class="card p-6 animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center mr-4">
                  <component :is="project.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ t(`projects.projectData.${index}.title`) }}</h3>
                  <p class="text-gray-500 dark:text-gray-400 text-sm">{{ t(`projects.projectData.${index}.type`) }}</p>
                </div>
              </div>
              <div class="flex space-x-2">
                <a 
                  v-if="project.github"
                  :href="project.github" 
                  target="_blank"
                  class="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                  aria-label="View on GitHub"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <button
                  v-if="project.images && project.images.length"
                  @click="openGallery(project.images, project.imageDescriptions || [])"
                  class="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-300"
                  :aria-label="t('projects.gallery.viewImages')"
                >
                  <svg class="w-4 h-4 text-primary-600 dark:text-primary-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 15l-5-5L5 21" />
                  </svg>
                </button>
              </div>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {{ t(`projects.projectData.${index}.description`) }}
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Galería Modal Mejorada -->
    <div v-if="galleryImages.length" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div class="relative w-[80vw] max-w-4xl h-[80vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex flex-col justify-center items-center p-6">
        <button @click="closeGallery" class="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl font-bold focus:outline-none" :aria-label="t('projects.gallery.close')">
          &times;
        </button>
        <div class="flex-1 flex flex-col justify-center items-center w-full">
          <img
            :src="galleryImages[galleryIndex]"
            :alt="t('projects.gallery.projectImage')"
            class="rounded-lg shadow-lg max-h-[60vh] max-w-full object-contain border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
          />
          <!-- Caja de descripción -->
          <div class="w-full mt-4 bg-gray-100 dark:bg-gray-800 rounded p-4 text-gray-700 dark:text-gray-200 text-center shadow">
            {{ galleryDescriptions[galleryIndex] || t('projects.gallery.noDescription') }}
          </div>
          <div class="flex justify-between items-center w-full mt-4">
            <button
              @click="prevImage"
              :disabled="galleryIndex === 0"
              class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold disabled:opacity-50 transition"
            >{{ t('projects.gallery.previous') }}</button>
            <span class="text-gray-500 dark:text-gray-400 text-sm select-none">
              {{ t('projects.gallery.imageOf') }} {{ galleryIndex + 1 }} {{ t('projects.gallery.of') }} {{ galleryImages.length }}
            </span>
            <button
              @click="nextImage"
              :disabled="galleryIndex === galleryImages.length - 1"
              class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold disabled:opacity-50 transition"
            >{{ t('projects.gallery.next') }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  ServerIcon,  
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  BarsArrowUpIcon,
} from '@heroicons/vue/24/outline'
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const galleryImages = ref<string[]>([])
const galleryDescriptions = ref<string[]>([])
const galleryIndex = ref(0)

function openGallery(images: string[], descriptions: string[] = []) {
  galleryImages.value = images
  galleryDescriptions.value = descriptions
  galleryIndex.value = 0
}
function closeGallery() {
  galleryImages.value = []
  galleryDescriptions.value = []
  galleryIndex.value = 0
}
function prevImage() {
  if (galleryIndex.value > 0) galleryIndex.value--
}
function nextImage() {
  if (galleryIndex.value < galleryImages.value.length - 1) galleryIndex.value++
}

const projects = computed(() => [
  {
    icon: BarsArrowUpIcon,
    technologies: ['N8n', 'Chatwoot', 'Postgres', 'Redis', 'FastAPI'],
    github: 'https://github.com/davideq555/whatsapp-contactos',
    images: []
  },
  {
    icon: ComputerDesktopIcon,
    technologies: ['Python', 'Ollama'],
    github: 'https://github.com/davideq555/app_reconocimiento_fotos',
    images: []
  },
  {
    icon: ChatBubbleLeftRightIcon,
    technologies: ['N8n', 'Chatwoot', 'Evolution API', 'Docker'],
    images: [
      '/Screenshot_20250609_161654.png',
      '/Screenshot_20250609_161730.png',
    ],
    imageDescriptions: [
      t('projects.gallery.imageDescriptions.0'),
      t('projects.gallery.imageDescriptions.1'),
    ]
  },
  {
    icon: ServerIcon,
    technologies: ['Django', 'PostgreSQL', 'Docker', 'Nginx', 'SQL Server', 'Gunicorn'],
    images: [
      '/Screenshot_20250609_163954.png',
    ],
    imageDescriptions: [
      t('projects.gallery.imageDescriptions.2'),
    ]
  }
])
</script>