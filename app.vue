<template>
  <v-app>

    <v-navigation-drawer app>
    </v-navigation-drawer>

    <v-app-bar density="compact" app>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <!-- -->
      <v-app-bar-title>My page</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <v-card
          class="mx-auto"
          width="400"
          prepend-icon="mdi-home"
        >
          <template v-slot:title>
            Hello from Vuetify!
          </template>
          <v-card-text>
            Prova
          </v-card-text>
        </v-card>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
