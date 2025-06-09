<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <TheHeader />
    <main class="snap-y snap-mandatory h-screen overflow-y-scroll">
      <HeroSection class="snap-start" />
      <AboutSection class="snap-start" />
      <SkillsSection class="snap-start" />
      <ProjectsSection class="snap-start" />
      <ContactSection class="snap-start" />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>