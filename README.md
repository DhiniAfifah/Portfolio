# Portfolio Website - Shuffle Design

Halaman portfolio yang simple, clean, dan menarik dengan background putih menggunakan **Shuffle Design** dengan efek animasi scramble text yang dinamis.

## Fitur

- **Shuffle Text Animation**: Menggunakan komponen Shuffle dengan efek scramble text yang menarik
- **Interactive Hover**: Hover pada teks "PORTFOLIO" untuk melihat efek scramble ulang
- **Smooth Animations**: Animasi yang smooth dan tidak mengganggu
- **Desain Responsif**: Optimized untuk desktop dan mobile
- **Background Putih**: Clean dan minimalis
- **Elemen Dekoratif**: Animated geometric shapes dan grid pattern

## Animasi Teks

- **Shuffle Effect**: Teks "PORTFOLIO" dengan efek scramble menggunakan karakter acak
- **BlurText Subtitle**: Subtitle dengan efek blur yang smooth
- **Interactive Button**: Tombol dengan hover effect yang elegant
- **Auto-trigger**: Semua animasi berjalan otomatis saat halaman dimuat

## Cara Menjalankan

1. Install dependencies:

```bash
npm install
```

2. Jalankan development server:

```bash
npm run dev
```

3. Buka browser di `http://localhost:5175/` (atau port yang ditampilkan)

## Cara Menggunakan

- **Hover** pada teks "PORTFOLIO" untuk melihat efek scramble ulang
- Semua animasi berjalan otomatis saat halaman dimuat
- Responsive design bekerja di semua device

## Teknologi

- React 19 + TypeScript
- Vite untuk build tool
- Tailwind CSS untuk styling
- GSAP untuk animasi teks advanced
- Custom CSS animations
- Motion (Framer Motion) untuk BlurText

## Struktur Komponen

- `App.tsx` - Main component yang merender WelcomePage
- `WelcomePage.tsx` - Halaman utama dengan shuffle design
- `Shuffle.tsx` - Komponen animasi shuffle/scramble text
- `BlurText.tsx` - Komponen animasi blur text untuk subtitle

## Kustomisasi

Anda dapat mengubah:

- Teks di komponen WelcomePage
- Karakter scramble di Shuffle component
- Warna dan styling di Tailwind classes
- Timing dan easing animasi
- Elemen dekoratif dan background

## Preview

Website berjalan di: `http://localhost:5175/`

Nikmati efek shuffle text yang dinamis dan interaktif!
