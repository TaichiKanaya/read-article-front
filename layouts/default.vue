<template>
  <v-app>
    <v-app-bar app color="light-green darken-3">
      <v-toolbar-title class="white--text" v-text="title" />
      <v-spacer />
      <v-text-field
        v-if="!isXs"
        class="mt-7"
        background-color="#FFFFFF"
        placeholder="Search Articles..."
        append-icon="mdi-magnify"
        solo
        @click:append.prevent="aaa()"
      />
      <v-spacer />
      <v-dialog v-if="isXs" v-model="dialog" max-width="290">
        <template #activator="{ on, attrs }">
          <v-btn icon class="white--text" v-bind="attrs" v-on="on">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <v-text-field
          hide-details="true"
          background-color="#FFFFFF"
          placeholder="Search Articles..."
          append-icon="mdi-magnify"
          solo
          @click:append.stop="aaa()"
        />
      </v-dialog>
      <v-btn icon class="white--text">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon class="white--text">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon class="white--text">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app color="light-green darken-3" class="text-center">
      <div class="white--text" style="width: 100%">
        &copy; attakait {{ new Date().getFullYear() }}
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      drawer: false,
      group: null,
      title: 'My Articles',
      dialog: false
    }
  },
  computed: {
    isXs () {
      // @ts-ignore
      return this.$vuetify.breakpoint.name === 'xs'
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  },
  methods: {
    aaa () {
      alert('aaa')
      this.dialog = false
    }
  }
})
</script>
