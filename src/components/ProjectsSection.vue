<template>
  <section id="projects" class="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="section-title animate-slide-up">Proyectos recientes</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="(project, index) in projects" 
            :key="project.title"
            class="card p-6 animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center mr-4">
                  <component :is="project.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ project.title }}</h3>
                  <p class="text-gray-500 dark:text-gray-400 text-sm">{{ project.type }}</p>
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
              </div>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {{ project.description }}
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
  </section>
</template>

<script setup lang="ts">
import { 
  ServerIcon,  
  ShoppingCartIcon, 
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  BarsArrowUpIcon,
} from '@heroicons/vue/24/outline'

const projects = [
  {
    title: 'Cuentas whatsapp API',
    type: 'REST API',
    icon: BarsArrowUpIcon,
    description: 'Se crea una API REST para gestionar cuentas de WhatsApp bussness, incluyendo autenticación, gestión de etiquetas y control de eventos. Integración con servicio de tercero para envío masivo de mensajes.',
    technologies: ['N8n', 'Chatwoot', 'Postgres', 'Redis', 'FastAPI'],
    github: 'https://github.com/davideq555/whatsapp-contactos',
  },
  {
    title: 'Reconocimiento de fotos',
    type: 'App Desktop',
    icon: ComputerDesktopIcon,
    description: 'Creacion de aplicacion de escritorio que permite reconocer números en imágenes utilizando Ollama. La interfaz gráfica facilita la selección de carpetas y el procesamiento de múltiples imágenes de manera sencilla.',
    technologies: ['Python', 'Ollama'],
    github: 'https://github.com/davideq555/app_reconocimiento_fotos',
  },
  {
    title: 'Agente IA para ventas',
    type: 'AI Agent',
    icon: ChatBubbleLeftRightIcon,
    description: 'Desarrollo de un agente inteligente que utiliza IA para interactuar con clientes potenciales. El agente puede responder preguntas, proporcionar información sobre productos y ayudar en el proceso de ventas.',
    technologies: ['N8n', 'Chatwoot', 'Evolution API', 'Docker'],
  },
  {
    title: 'Migracion Sistema Legacy',
    type: 'System Migration',
    icon: ServerIcon,
    description: 'Migracion de un sistema legacy a un sistema moderno con Django y PostgreSQL. Incluye la migracion de datos y la creacion de servidor para trafico web.',
    technologies: ['Django', 'PostgreSQL', 'Docker', 'Nginx', 'SQL Server', 'Gunicorn'],
  }
]
</script>