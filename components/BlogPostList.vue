<script setup>
const { data } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<template>
  <v-card
    v-for="post in data"
    :key="post._path" :title="post.title"
    elevation="4"
    class="mb-4"
  >
    <v-card-text>
      <nuxt-link :to="post._path">link</nuxt-link>
      {{post.excerpt}}
    </v-card-text>
  </v-card>
  <!--
  <pre>
{{data.data}}
  </pre>
  -->
</template>

