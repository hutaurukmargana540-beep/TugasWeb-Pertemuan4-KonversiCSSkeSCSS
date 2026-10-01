# Tugas Rutin 4 — Konversi CSS ke SCSS

Portofolio ini dikonversi dari CSS biasa ke **SCSS modular dengan struktur 7-1 pattern**.

## Checklist tugas

1. **Konversi CSS existing ke SCSS** — seluruh styling utama dipindahkan ke folder `assets/scss/`.
2. **Variables** — warna, spacing, radius, breakpoint, dan ukuran container berada di `abstracts/_variables.scss`.
3. **Nesting maksimal 3 level** — selector SCSS dibuat bertingkat seperlunya.
4. **Minimal 3 mixin reusable** — tersedia `container`, `card-surface`, `hover-lift`, `focus-ring`, dan `respond-to`.
5. **Struktur 7-1 pattern** — `abstracts`, `base`, `components`, `layout`, `pages`, `themes`, `vendors`.
6. **@use, bukan @import** — seluruh module menggunakan Dart Sass `@use`.
7. **Minimal 1 @each** — terdapat `@each` di `themes/_theme.scss`.
8. **Compile dengan Dart Sass / Vite** — script `sass` dan `build` sudah disediakan di `package.json`.

## Struktur

```text
assets/
└── scss/
    ├── abstracts/
    │   ├── _variables.scss
    │   └── _mixins.scss
    ├── base/
    │   ├── _reset.scss
    │   └── _typography.scss
    ├── components/
    │   ├── _buttons.scss
    │   ├── _cards.scss
    │   └── _forms.scss
    ├── layout/
    │   ├── _header.scss
    │   ├── _hero.scss
    │   ├── _sections.scss
    │   ├── _grid.scss
    │   └── _footer.scss
    ├── pages/
    │   └── _home.scss
    ├── themes/
    │   └── _theme.scss
    ├── vendors/
    │   └── _normalize.scss
    └── main.scss
```

## Cara menjalankan

Pastikan Node.js sudah terpasang.

```bash
npm install
npm run dev
```

Untuk compile SCSS:

```bash
npm run sass
```

Untuk build production:

```bash
npm run build
```

Hasil SCSS dikompilasi ke `style.css`, sehingga `index.html` tetap sederhana dan browser membaca CSS hasil compile.

## Catatan

`style.css` yang ada di root adalah **hasil compile/artefak CSS** agar project tetap bisa langsung dibuka. Source code SCSS yang menjadi bahan utama tugas berada di `assets/scss/`.
