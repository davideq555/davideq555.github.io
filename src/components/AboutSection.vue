<template>
  <section id="about" class="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="section-title animate-slide-up">About Me</h2>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-up">
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate backend developer with expertise in building scalable server-side applications. 
              I specialize in creating robust APIs, implementing microservices architectures, and optimizing 
              database performance to deliver exceptional user experiences.
            </p>
            
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
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

          <div class="animate-slide-up">
            <div class="bg-gradient-to-br from-secondary-400/20 to-primary-400/20 p-8 rounded-2xl">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-6">What I Do</h3>
              
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-semibold text-gray-800 dark:text-white">API Development</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">RESTful and GraphQL APIs with proper authentication and security</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-semibold text-gray-800 dark:text-white">Database Design</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Efficient database schemas and query optimization</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 class="font-semibold text-gray-800 dark:text-white">System Architecture</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Scalable microservices and distributed systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>