<template>
  <div class="terminal-window">
    <header>
      <span class="button red"></span>
      <span class="button yellow"></span>
      <span class="button green"></span>
    </header>
    <section class="terminal">
      <pre>
<span class="gray">Debian GNU/Linux 12 cyborg tty1</span>
<span class="green">deqa@cyborg</span>:<span class="gray">~/Proyectos/app_fotos</span>$ <span>{{ lines[0] }}</span><span v-if="currentLine === 0" class="typed-cursor">|</span>
<span v-if="currentLine > 0">[+] Running 3/3
 ⠿ Network <span class="gray">app_fotos_default</span>    Created
 ⠿ Container <span class="gray">app_fotos_db_1</span>     Started
 ⠿ Container <span class="gray">app_fotos_api_1</span>    Started
</span>
<span v-if="currentLine > 1"><span class="green">deqa@cyborg</span>:<span class="gray">~/Proyectos/app_fotos</span>$ {{ lines[1] }}</span><span v-if="currentLine === 1" class="typed-cursor">|</span>
<span v-if="currentLine > 2"><span class="gray">Attaching to app_fotos_db_1, app_fotos_api_1</span>
<span class="gray">No logs available yet...</span>
</span>
      </pre>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const lines = [
  'docker compose up -d',
  'docker compose logs',
]
const currentLine = ref(0)

onMounted(() => {
  // Simula el tipeo del primer comando
  let i = 0
  let typing = ''
  const fullCommand = lines[0]
  const typeInterval = setInterval(() => {
    typing = fullCommand.slice(0, i)
    lines[0] = typing
    i++
    if (i > fullCommand.length) {
      clearInterval(typeInterval)
      setTimeout(() => {
        currentLine.value = 1
        // Mostrar la salida de docker compose up -d por un momento
        setTimeout(() => {
          currentLine.value = 2
          simulateSecondCommand()
        }, 1200)
      }, 400)
    }
  }, 80)
})

function simulateSecondCommand() {
  // Simula el tipeo del segundo comando
  let i = 0
  let typing = ''
  const fullCommand = lines[1]
  lines[1] = ''
  const typeInterval = setInterval(() => {
    typing = fullCommand.slice(0, i)
    lines[1] = typing
    i++
    if (i > fullCommand.length) {
      clearInterval(typeInterval)
      setTimeout(() => {
        currentLine.value = 3
      }, 800)
    }
  }, 80)
}
</script>

<style scoped>
.terminal-window {
  text-align: left;
  width: 600px;
  height: 360px;
  border-radius: 10px;
  margin: auto;
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.45);
}

/* Responsive breakpoints */
@media (max-width: 700px) {
  .terminal-window {
    width: 95vw;
    min-width: 0;
    height: 250px;
    font-size: 10pt;
  }
}
@media (max-width: 480px) {
  .terminal-window {
    width: 99vw;
    height: 180px;
    font-size: 9pt;
  }
  .terminal-window section.terminal {
    padding: 6px;
    font-size: 9pt;
  }
}

.terminal-window header {
  background: #E0E8F0;
  height: 30px;
  border-radius: 8px 8px 0 0;
  padding-left: 10px;
  display: flex;
  align-items: center;
}

.terminal-window header .button {
  width: 12px;
  height: 12px;
  margin: 10px 4px 0 0;
  display: inline-block;
  border-radius: 8px;
}

.terminal-window header .button.green {
  background: #3BB662;
}

.terminal-window header .button.yellow {
  background: #E5C30F;
}

.terminal-window header .button.red {
  background: #E75448;
}

.terminal-window section.terminal {
  color: white;
  font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
  font-size: 11pt;
  background: #30353A;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 30px;
  bottom: 0;
  overflow: auto;
}

.terminal-window section.terminal .typed-cursor {
  opacity: 1;
  animation: blink 0.7s infinite;
}

@keyframes blink{
  0% { opacity:1; }
  50% { opacity:0; }
  100% { opacity:1; }
}

.terminal-data { display: none; }
.terminal-window .gray { color: gray; }
.terminal-window .green { color: #3BB662;}
</style>