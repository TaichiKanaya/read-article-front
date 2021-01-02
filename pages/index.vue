<template>
  <div>
    <Carousel />
    <div class="text-h6 text-sm-h4 mt-5 title">
      Recommend Articles
    </div>
    <Articles
      :page="page"
      :limit="limit"
      :total="total"
      :articles="articles"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ store, query }) {
    const p = isNaN(Number(query.page)) ? 1 : Number(query.page)
    const l = 20
    const res = await store.dispatch('article/findArticles', { page: p, limit: l })
    return {
      page: p,
      limit: l,
      total: res.total,
      articles: res.articles
    }
  },
  data: () => ({
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number
    },
    total: {
      type: Number,
      default: 0
    },
    articles: {
      type: Array,
      default: []
    }
  })
})
</script>

<style>
.title {
  padding: 0.25em 0.5em;
  color: #494949;
  background: transparent;
  border-left: solid 5px #7db4e6;
}
</style>
