<i18n locale="en" lang="yaml" src="@/utils/navigationData/locales/en.yml" />
<i18n locale="ru" lang="yaml" src="@/utils/navigationData/locales/ru.yml" />
<i18n locale="en" lang="yaml" src="./locales/en.yml" />
<i18n locale="ru" lang="yaml" src="./locales/ru.yml" />
<template>
  <div class="news p-4 m:p-8 xl:p-16">
    <NH2>{{ t("News") }}</NH2>
    <div class="news-grid grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3">
      <div v-for="item in newsData" :key="item.id">
        <ContentPreviewCard
          :link="item.path"
          :image="item.image"
          :date="item.date"
          :tag="item.tag"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
    <NPagination
      v-model:page="page"
      class="news-pagination"
      :page-count="totalPages"
      @update:page="onPageChange"
    />
  </div>
</template>
<script setup lang="ts">
import { NH2, NPagination } from "naive-ui"
const { t } = useI18n()

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()
const PAGE_LENGTH = 3
const page = ref(Number(route.query.page || 1))

const { data: newsData } = await useAsyncData(`paginated_news_${locale.value}_${page.value}`, () =>
  queryCollection(`news_${locale.value}`)
    .order('date', 'DESC')
    .limit(PAGE_LENGTH)
    .skip(PAGE_LENGTH * (page.value - 1))
    .all(),
  {
    watch: [page],
  }
)
const { data: totalCount } = await useAsyncData(`news_count_${locale.value}`, () =>
  queryCollection(`news_${locale.value}`).count()
);
const totalPages = computed(() => {
  return totalCount.value ? Math.ceil(totalCount.value / PAGE_LENGTH) : 1;
});
const onPageChange = (newPage: number) => {
  page.value = newPage;
  router.push({ query: { ...route.query, page: newPage } });
};

</script>
<style lang="scss">
@use "./news" as *;
</style>
