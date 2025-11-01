# Background Components

## HeroBackground

Komponen background untuk section "Hi I'm Dhini" dengan desain:

- Gradient biru-indigo-ungu yang lembut
- Floating geometric shapes dengan animasi
- Grid pattern yang subtle
- Wave transition di bagian bawah

## WhatIDoBackground

Komponen background untuk section "What I Do" dengan desain:

- Gradient abu-abu yang lebih tech-inspired
- Circuit board pattern
- Tech elements (code brackets, binary numbers)
- Connection lines untuk efek tech
- Wave transition di bagian atas

## Animasi Custom

File `src/styles/animations.css` berisi animasi khusus:

- `animate-float` - Floating movement
- `animate-float-delayed` - Delayed floating
- `animate-bounce-slow` - Slow bounce
- `animate-pulse-slow` - Slow pulse
- `animate-ping-slow` - Slow ping
- `animate-spin-very-slow` - Very slow spin
- `animate-spin-reverse-slow` - Reverse slow spin

## Penggunaan

```tsx
import HeroBackground from "../ui/HeroBackground";
import WhatIDoBackground from "../ui/WhatIDoBackground";

// Untuk Hero Section
<HeroBackground>
  <div>Content here</div>
</HeroBackground>

// Untuk What I Do Section
<WhatIDoBackground>
  <div>Content here</div>
</WhatIDoBackground>
```
