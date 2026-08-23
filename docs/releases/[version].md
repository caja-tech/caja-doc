---
layout: doc
---
# {{ $params.name }}

<div style="font-size: 0.9rem; color: var(--vp-c-text-2); margin-bottom: 2rem;">
  Published on {{ $params.date }}
</div>

<div class="github-release-content" v-html="$params.html"></div>
