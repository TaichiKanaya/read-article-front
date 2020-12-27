<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="getCols(card)"
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
          <NuxtLink class="img-article" :to="'/article/' + card.id">
            <v-img :src="card.src" class="white--text align-end" height="200px">
              <v-card-title v-text="card.title" />
            </v-img>
          </NuxtLink>
          <v-card-subtitle v-text="card.subtitle" />
          <v-card-text v-text="card.body" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '@/types/article'

export default Vue.extend({
  components: {},
  data: () => ({
    cards: [
      {
        id: 1,
        title: 'タイトル1',
        subtitle: 'サブタイトル1',
        body:
          '本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1本文1',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 3
      },
      {
        id: 2,
        title: 'タイトル2',
        subtitle: 'サブタイトル2',
        body: '本文2',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 3
      },
      {
        id: 3,
        title: 'タイトル3',
        subtitle: 'サブタイトル3',
        body: '本文3',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 3
      },
      {
        id: 4,
        title: 'タイトル4',
        subtitle: 'サブタイトル4',
        body: '本文4',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 3
      },
      {
        id: 5,
        title: 'タイトル5',
        subtitle: 'サブタイトル5',
        body: '本文5',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 3
      }
    ]
  }),
  computed: {
    isXs () {
      // @ts-ignore
      return this.$vuetify.breakpoint.name === 'xs'
    }
  },
  methods: {
    getCols (c: Article) {
      return this.isXs ? '12' : c.flex
    }
  }
})
</script>
<style>
a.img-article {
  text-decoration: none;
}
</style>
