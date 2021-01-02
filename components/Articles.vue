<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="article in articles"
        :key="article.id"
        :cols="getCols()"
      >
        <v-card height="450px" style="position: relative">
          <v-card-actions style="flex-direction: row-reverse">
            <v-btn
              icon
              class="pink--text"
              style="position: absolute; top: 400px"
            >
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </v-card-actions>
          <NuxtLink class="img-article" :to="'/article/' + article.id">
            <v-img :src="article.imageUrl" class="white--text align-end" height="200px">
              <v-card-title v-text="article.title" />
            </v-img>
          </NuxtLink>
          <v-card-subtitle v-text="article.subtitle" />
          <v-card-text v-text="article.body" />
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      :value="page"
      :length="getPageLen"
      :total-visible="10"
      circle
      class="mt-5"
      @input="transition"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    articles: {
      type: Array,
      required: true
    },
    page: {
      type: Number,
      required: true,
      default: 1
    },
    limit: {
      type: Number,
      required: true,
      default: 10
    },
    total: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    isXs (): Boolean {
      // @ts-ignore
      return this.$vuetify.breakpoint.name === 'xs'
    },
    getPageLen (): Number {
      return (this.total / this.limit <= 1) ? 1 : Math.ceil(this.total / this.limit)
    }
  },
  methods: {
    getCols () {
      return this.isXs ? 12 : 3
    },
    transition (page: Number) {
      location.href = `/?page=${page}`
    }
  }
})
</script>
<style>
a.img-article {
  text-decoration: none;
}
</style>
