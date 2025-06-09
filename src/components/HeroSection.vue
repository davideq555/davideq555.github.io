<template>
  <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-secondary-50 to-primary-50 dark:from-gray-900 dark:via-secondary-900/20 dark:to-primary-900/20 pt-20">
    <div class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-bold mb-6">
            <span class="block text-gray-800 dark:text-white mb-2">David Quispe</span>
            <span class="bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent">
              Backend Developer
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Automatizo procesos con IA y conecto sistemas para que trabajen mejor.
            Backend Developer especializado en integración, APIs y agentes inteligentes.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#projects" @click="scrollToSection($event, '#projects')" class="btn-primary">
              Mis proyectos
            </a>
            <a href="#contact" @click="scrollToSection($event, '#contact')" class="btn-secondary">
              Contactame
            </a>
          </div>
        </div>

        <!-- Floating Animation Element -->
        <div class="relative mt-16 animate-float">
          <div class="mx-auto w-64 h-64 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-20 blur-3xl"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-32 h-32 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl shadow-2xl flex items-center justify-center">
              <CodeBracketIcon class="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CodeBracketIcon } from '@heroicons/vue/24/outline'

const scrollToSection = (event: Event, href: string) => {
  event.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>