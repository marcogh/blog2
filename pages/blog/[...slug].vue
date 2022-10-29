<script setup>
const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path}).findOne()
})
</script>

<template>
  <v-card>
    <v-card-title>
      <template #default>
        {{blogPost.title}}
      </template>
    </v-card-title>
    <v-card-text>
      <content-doc/>
    </v-card-text>
  </v-card>
</template>
