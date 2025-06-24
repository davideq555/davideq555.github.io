<template>
  <section id="skills" class="min-h-screen flex items-center py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="section-title animate-slide-up">{{ t('skills.title') }}</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(category, index) in skillCategories" 
            :key="index"
            class="card p-6 animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center mr-4">
                <component :is="category.icon" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ t(category.titleKey) }}</h3>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in category.skills" 
                :key="skill"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-secondary-100 dark:hover:bg-secondary-900/30 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors duration-300"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  ServerIcon, 
  CircleStackIcon, 
  CloudIcon, 
  CogIcon, 
  RocketLaunchIcon,
  CommandLineIcon, 
} from '@heroicons/vue/24/outline'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const skillCategories = [
  {
    titleKey: 'skills.categories.programming',
    icon: ServerIcon,
    skills: ['Python', 'PHP', 'JavaScript', 'Genexus']
  },
  {
    titleKey: 'skills.categories.databases',
    icon: CircleStackIcon,
    skills: ['PostgreSQL', 'SQL Server', 'Redis', 'MySQL']
  },
  {
    titleKey: 'skills.categories.cloud',
    icon: CloudIcon,
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Google Cloud', 'AWS']
  },
  {
    titleKey: 'skills.categories.frameworks',
    icon: CogIcon,
    skills: ['Django', 'FastAPI', 'Vue.js', 'Laravel']
  },
  {
    titleKey: 'skills.categories.infrastructure',
    icon: CommandLineIcon,
    skills: ['GNU/Linux', 'Windows Server', 'Clusterización']
  },
  {
    titleKey: 'skills.categories.ai',
    icon: RocketLaunchIcon,
    skills: ['n8n', 'Ollama', 'API openIA', 'CRMs', 'Integraciones']
  }
]
</script>