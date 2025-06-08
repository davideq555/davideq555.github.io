<template>
    <div class="terminal-window">
      <header>
        <span class="button red"></span>
        <span class="button yellow"></span>
        <span class="button green"></span>
      </header>
      <section class="terminal">
        <pre>
<span class="gray">Last login: Sun Jun  8 12:34:56 on ttys000</span>
<span class="green">deqa@macbook</span>:<span class="gray">~/Proyectos/portafolio-backend</span>$ <span>{{ command }}</span><span class="typed-cursor">|</span>
        </pre>
      </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const command = ref('')
const fullCommand = 'npm run dev'

onMounted(() => {
  let i = 0
  const interval = setInterval(() => {
    command.value = fullCommand.slice(0, i)
    i++
    if (i > fullCommand.length) clearInterval(interval)
  }, 100)
})
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