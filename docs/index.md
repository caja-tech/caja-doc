---
title: Home
layout: home

---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

let timer = null
let typeTimer = null
let tcoState = 'std'
let typingState = 'types'

const handleScroll = () => {
  if (window.scrollY > 150) {
    document.documentElement.classList.add('scrolled-past-hero')
  } else {
    document.documentElement.classList.remove('scrolled-past-hero')
  }
}

const startTimer = () => {
  timer = setInterval(() => {
    const tcoWrapper = document.getElementById('tco-carousel')
    if (tcoWrapper) {
      tcoWrapper.classList.remove('state-' + tcoState)
      tcoState = tcoState === 'std' ? 'tco' : 'std'
      tcoWrapper.classList.add('state-' + tcoState)
    }
  }, 5000)
  
  typeTimer = setInterval(() => {
    const typeWrapper = document.getElementById('typing-carousel')
    if (typeWrapper) {
      typeWrapper.classList.remove('state-' + typingState)
      if (typingState === 'types') typingState = 'struct'
      else if (typingState === 'struct') typingState = 'maps'
      else typingState = 'types'
      typeWrapper.classList.add('state-' + typingState)
    }
  }, 5000)
}

onMounted(() => {
  startTimer()
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  document.documentElement.classList.add('is-home-page')
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
  if (typeTimer) clearInterval(typeTimer)
  window.removeEventListener('scroll', handleScroll)
  document.documentElement.classList.remove('is-home-page')
  document.documentElement.classList.remove('scrolled-past-hero')
})
</script>

<div class="caja-hero-container">
<div class="hero-wrapper">

<div class="caja-hero">
  <img src="/brand256x760_transparent.svg" alt="Cajá Logo" class="caja-hero-logo" />
  <p class="tagline">Elegant, fast, and secure.</p>
  <p class="text">A declarative, fast, and highly portable programming language built for expressive data transformations and robust software.</p>
  
  <div class="actions">
    <a href="/introduction/" class="action-btn brand">Get Started</a>
    <a href="/use-cases/" class="action-btn alt">Use Cases</a>
  </div>
</div>

<div class="caja-hero-install">

<ClientOnly>
  <img class="caja-install-gif" :src="isDark ? '/caja-install-dark.gif' : '/caja-install-light.gif'" alt="Caja Installation Demo" />
</ClientOnly>

::: code-group
```bash [npm]
npm install -g @caja/cli
```
```bash [yarn]
yarn global add @caja/cli
```
```bash [bun]
bun add -g @caja/cli
```
:::

</div>

</div>
</div>

<div class="caja-feature-section">
  <div class="caja-feature-content">
    <div class="caja-feature-text">
      <h2>Strong Typing</h2>
      <p>Ensure correctness and memory safety with custom Type Aliases, Structs, and Generic types, catching errors early in development.</p>
      <div style="margin-top: 1.5rem;">
        <a href="/documentation/types" class="action-btn brand">Explore Types</a>
      </div>
    </div>
    <div id="typing-carousel" class="caja-feature-image typing-carousel-wrapper state-types" style="position: relative; margin-top: 0;">
      <!-- Responsive Slider -->
      <div class="typing-slider-track">
        <div class="typing-slider-thumb"></div>
      </div>
      <!-- Image Container -->
      <div style="position: relative; width: 100%;">
        <!-- Types (Defines container height) -->
        <div class="typing-img-types" style="position: relative; width: 100%;">
          <div style="font-size: 0.9rem; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 0.5rem; text-align: left;">Primitive Types</div>
          <img src="/types.webp" alt="Types Syntax" style="margin: 0; width: 100%;" />
        </div>
        <!-- Structs (Overlays on top) -->
        <div class="typing-img-struct" style="position: absolute; top: 0; left: 0; width: 100%;">
          <div style="font-size: 0.9rem; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 0.5rem; text-align: left;">Structs</div>
          <img src="/struct.webp" alt="Struct Syntax" style="margin: 0; width: 100%;" />
        </div>
        <!-- Maps (Overlays on top) -->
        <div class="typing-img-maps" style="position: absolute; top: 0; left: 0; width: 100%;">
          <div style="font-size: 0.9rem; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 0.5rem; text-align: left;">Maps</div>
          <img src="/maps.webp" alt="Maps Syntax" style="margin: 0; width: 100%;" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="caja-feature-section bg-alt">
  <div class="caja-feature-content reverse">
    <div class="caja-feature-text">
      <h2>Functional Programming</h2>
      <p>Unlock true functional power with Closures and Higher-Order Functions. Easily encapsulate configuration and state to create highly reusable, domain-specific function factories.</p>
      <div style="margin-top: 1.5rem;">
        <a href="/introduction/features#high-order-functions" class="action-btn brand">Explore HOFs & Closures</a>
      </div>
    </div>
    <div class="caja-feature-image">
      <img src="/closures.webp" alt="Caja Closures" />
    </div>
  </div>
</div>

<div class="caja-feature-section">
  <div class="caja-feature-content">
    <div class="caja-feature-text">
      <h2>Declarative Pipelines</h2>
      <p>Embrace a data-first pipeline design with the <code>|&gt;</code> operator to make complex transformations intuitive and easy to read from top to bottom.</p>
      <p>Using pipelines removes the need for deeply nested function calls and intermediate variables. The data-first approach ensures that transformations read naturally from left to right, resulting in cleaner, highly expressive, and easily maintainable code.</p>
      <div style="margin-top: 1.5rem;">
        <a href="/introduction/features#pipeline-operator-and-data-first-pipeline" class="action-btn brand">Explore Pipelines</a>
      </div>
    </div>
    <div class="caja-feature-image">
      <img src="/pipelines.webp" alt="Cajá Pipeline Operator" />
    </div>
  </div>
</div>

<div id="tco-section" class="caja-feature-section bg-alt">
  <div class="caja-feature-content reverse">
    <div class="caja-feature-text">
      <h2>Tail Call Optimization</h2>
      <p>Write recursive functions without fear. Cajá natively optimizes tail calls, reusing stack frames to prevent overflows and boost performance.</p>
      <p>In many languages, deep recursion risks stack overflows due to excessive memory usage. TCO solves this by automatically flattening recursive calls that occur at the end of a function (the "tail"). This allows your recursive algorithms to run with the speed and constant memory footprint of a traditional <code>while</code> loop!</p>
      <div style="margin-top: 1.5rem;">
        <a href="/documentation/recursion#tail-call-optimization-tco" class="action-btn brand">Learn about TCO</a>
      </div>
    </div>
    <div id="tco-carousel" class="caja-feature-image tco-carousel-wrapper state-std" style="position: relative; margin-top: 0;">
      <!-- Responsive Slider -->
      <div class="tco-slider-track">
        <div class="tco-slider-thumb"></div>
      </div>
      <!-- Image Container -->
      <div style="position: relative; width: 100%;">
        <!-- Standard Recursion Image (Drives the height) -->
        <div class="tco-img-std" style="position: relative; width: 100%;">
          <div style="font-size: 0.9rem; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 0.5rem; text-align: left;">Standard Recursion</div>
          <img src="/std_recursion.webp" alt="Standard Recursion Code" style="margin: 0; width: 100%;" />
        </div>
        <!-- TCO Image (Overlays on top) -->
        <div class="tco-img-tco" style="position: absolute; top: 0; left: 0; width: 100%;">
          <div style="font-size: 0.9rem; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 0.5rem; text-align: left;">Tail Call Optimized</div>
          <img src="/tco_recursion.webp" alt="Tail Call Optimized Code" style="margin: 0; width: 100%;" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="caja-footer">
  <div class="caja-footer-content">
    <span>MIT License</span>
    <span class="dot">&middot;</span>
    <span>Copyright © 2026</span>
    <span class="dot">&middot;</span>
    <a href="https://github.com/AbnerLimaa" target="_blank" class="caja-footer-author">
      <img src="https://github.com/AbnerLimaa.png" alt="AbnerLimaa">
      AbnerLimaa
    </a>
  </div>
</div>