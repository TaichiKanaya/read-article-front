<template>
  <div>
    <div class="text-h6 text-sm-h4 title mt-3">
      記事タイトル
    </div>
    <div class="mt-5 text-sm-h5">
      記事サブタイトル
    </div>
    <div>
      <v-btn icon class="pink--text" style="margin-left: 0px">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
    </div>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
      class="white--text align-end"
      height="300px"
    />
    <div class="mt-5">
      本文パパパパ
    </div>
    <div class="mt-10">
      <v-btn color="white--text light-green darken-3" href="/">
        Back
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {}
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
