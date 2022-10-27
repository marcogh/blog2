<script setup>
const { data } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<template>
  <v-card
    v-for="post, idx in data"
    :key="idx" :title="post.title"
    elevation="4"
    class="mb-4"
  >
    <v-card-text>
  <pre>
    {{post}}
  </pre>
    </v-card-text>
  </v-card>
  <!--
  <pre>
{{data.data}}
  </pre>
  -->
</template>

