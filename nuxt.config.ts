// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Tùy chỉnh ngày tương thích. Giữ nguyên theo mặc định của bạn.
  compatibilityDate: "2025-07-15",

  // Kích hoạt DevTools để dễ dàng gỡ lỗi
  devtools: { enabled: true },

  // Cấu hình ứng dụng (App Config)
  app: {
    // Cấu hình thẻ <head> của HTML
    head: {
      title: "Nuxt.js Lab 8",
      htmlAttrs: {
        lang: "vi",
      },
      link: [
        // 1. THÊM BOOTSTRAP CSS CDN (Bắt buộc để sử dụng class Bootstrap)
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          integrity:
            "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
          crossorigin: "anonymous",
        },
      ],
      script: [
        // 2. THÊM BOOTSTRAP JS BUNDLE (Cần thiết cho các component tương tác như Navbar, Modal, Dropdown)
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});
