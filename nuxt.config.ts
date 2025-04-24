// https://nuxt.com/docs/api/configuration/nuxt-config

const _UNSET_REQUIRED_VALUE = "NOT-SET"
const ENVIROMENT = process.env.NODE_ENV ?? "development"

const isDebug = JSON.parse(process.env.VITE_DEBUG ?? "false")
const isDebugLogin = JSON.parse(process.env.VITE_DEBUG_LOGIN ?? "false")

export default defineNuxtConfig({

  modules: [
    "@bg-dev/nuxt-naiveui",
    "@formkit/auto-animate/nuxt",
    "@nuxt/content",
    "@nuxt/eslint",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [400, 700],
          Poppins: [500, 600, 700, 900],
        },
      },
    ],
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@pinia/nuxt",
    "nuxt-svgo",
  ],
  ssr: true,

  components: [
    {
      path: "~/components",
      pathPrefix: false,
      extensions: ["vue"],
    },
  ],
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "X-Content-Type-Options", "content": "nosniff" },
        { "http-equiv": "Strict-Transport-Security", "content": "max-age=1800" },
        { "http-equiv": "X-Frame-Options", "content": "sameorigin" },
        { "http-equiv": "X-XSS-Protection", "content": "1" },
        { name: "author", content: "DrewDru" },
        { property: "og:title", content: "Template" },
        {
          name: "description",
          content:
            "default description for the site. This is a template for Nuxt 3.",
        },
        {
          property: "og:description",
          content:
            "default description for the site. This is a template for Nuxt 3.",
        },
        {
          name: "keywords",
          content:
            "default, keywords, for, the, site. This is a template for Nuxt 3.",
        },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: "http://127.0.0.1:3000/img/seo/site-preview-1200.jpg",
        },
        {
          property: "og:vk:image",
          content: "http://127.0.0.1:3000/img/seo/site-preview-1200.jpg",
        },
        {
          property: "og:fb:image",
          content: "http://127.0.0.1:3000/img/seo/site-preview-1200.jpg",
        },
        {
          property: "og:twitter:image",
          content: "http://127.0.0.1:3000/img/seo/site-preview-1200.jpg",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@Template" },
        { name: "twitter:title", content: "Template" },
        {
          name: "twitter:description",
          content:
            "default description for the site. This is a template for Nuxt 3.",
        },
        { property: "og:image:type", content: "image/jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:url", content: "http://127.0.0.1:3000/" },
        { property: "og:locale", content: "en" },
        { property: "og:locale:alternate", content: "ru" },
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Tempate",
            "url": "http://127.0.0.1:3000/",
            "description":
              "default description for the site. This is a template for Nuxt 3.",
            "publisher": {
              "@type": "Organization",
              "name": "Template",
            },
            "image": "http://127.0.0.1:3000/img/seo/site-preview-1200.jpg",
          }),
        },
      ],
      link: [
        { rel: "canonical", href: "http://127.0.0.1:3000/" },
        { rel: "alternate", href: "http://127.0.0.1:3000/en" },
        { rel: "alternate", href: "http://127.0.0.1:3000/ru" },
        { rel: "icon", href: "http://127.0.0.1:3000/favicon.ico" },
      ],
    },
  },

  site: { url: "http://127.0.0.1:3000", name: "Template" },

  runtimeConfig: {
    debug: isDebug,
    debugLogin: isDebugLogin,
    enviroment: ENVIROMENT,
    public: {
      debug: isDebug,
      debugLogin: isDebugLogin,
    },
  },
  routeRules: {
    "/auth/": { robots: false },
  },
  compatibilityDate: "2024-11-01",

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "/assets/styles/variables" as globalvariables;
            @use "/assets/styles/mixins" as globalmixins;
            @use "/assets/styles/global" as *;
          `,
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: false,
      },
    },
  },

  i18n: {
    locales: [
      { code: "en", name: "English" },
      { code: "ru", name: "Russian" },
    ],
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
  },

  naiveui: {
    spaLoadingTemplate: {
      name: "bar-scale",
    },
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  robots: {
    UserAgent: "*",
    Allow: "/",
    Disallow: ["/auth/"],
  },
  sitemap: {
    hostname: "http://127.0.0.1:3000",
    exclude: ["/auth/**"],
    autoLastmod: true,
    sortEntries: true,
    discoverImages: true,
    discoverVideos: true,
    credits: true,
    cacheTime: 7200000, // 2 hours
    gzip: true,
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: "weekly",
    },
  },

  svgo: {
    autoImportPath: false,
    svgo: false,
  },
})
