<template>
  <section id="about" class="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="section-title animate-slide-up">Sobre mí</h2>
        
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="animate-slide-up">
            <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Soy un desarrollador backend con una fuerte orientación a la automatización de procesos e 
              integración de sistemas. Trabajo combinando herramientas de low code como n8n con tecnologías 
              como APIs REST, Inteligencia Artificial y Python para crear soluciones que realmente ayudan a las personas 
              y los negocios a trabajar mejor.
            </p>
            
            <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              También tengo experiencia administrando servidores, conectando múltiples plataformas entre sí, 
              y adaptando soluciones tecnológicas para entornos donde la tecnología no es el fuerte… pero sí la necesidad.
              Mi enfoque es práctico: entender los problemas, diseñar flujos eficientes y entregar resultados concretos.
            </p>

            <div class="flex flex-wrap gap-4">
              <div class="bg-secondary-100 dark:bg-secondary-900/30 px-4 py-2 rounded-full">
                <span class="text-secondary-700 dark:text-secondary-300 font-medium">5+ años de experiencia</span>
              </div>
              <div class="bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full">
                <span class="text-primary-700 dark:text-primary-300 font-medium">25+ Projectos</span>
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
</script>