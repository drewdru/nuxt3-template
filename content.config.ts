import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const newsSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  image: z.string(),
  tag: z.string(),
})

export default defineContentConfig({
  collections: {
    // content: defineCollection({
    //   type: 'page',
    //   source: '~/content/**/*.md'
    // })
    news_en: defineCollection({
      type: 'page',
      source: 'en/news/*.md',
      schema: newsSchema,
    }),
    news_ru: defineCollection({
      type: 'page',
      source: 'ru/news/*.md',
      schema: newsSchema,
    })
  }
})
