<template>
  <section id="contact" class="min-h-screen flex items-center py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="section-title animate-slide-up">Get In Touch</h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div class="animate-slide-up">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Let's Work Together</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, challenging projects, 
              or just having a conversation about backend development and system architecture.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:your.email@example.com" class="text-secondary-600 dark:text-secondary-400 hover:underline">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center">
                  <MapPinIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 dark:text-white">Location</h4>
                  <p class="text-gray-600 dark:text-gray-300">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div class="animate-slide-up">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'

const isSubmitting = ref(false)
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form)
  
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
  
  isSubmitting.value = false
  
  // Show success message (you could use a toast library)
  alert('Message sent successfully!')
}
</script>