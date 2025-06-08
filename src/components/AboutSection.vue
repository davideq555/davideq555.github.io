<template>
  <section id="about" class="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="section-title animate-slide-up">About Me</h2>
        
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="animate-slide-up">
            <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              I'm a passionate backend developer with expertise in building scalable server-side applications. 
              I specialize in creating robust APIs, implementing microservices architectures, and optimizing 
              database performance to deliver exceptional user experiences.
            </p>
            
            <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              With a strong foundation in modern backend technologies, I focus on writing clean, maintainable 
              code and following best practices in software architecture, security, and performance optimization.
            </p>

            <div class="flex flex-wrap gap-4">
              <div class="bg-secondary-100 dark:bg-secondary-900/30 px-4 py-2 rounded-full">
                <span class="text-secondary-700 dark:text-secondary-300 font-medium">5+ Years Experience</span>
              </div>
              <div class="bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full">
                <span class="text-primary-700 dark:text-primary-300 font-medium">50+ Projects</span>
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