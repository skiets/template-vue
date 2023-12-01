

<template>
  <q-layout view="lHh lpR fFf">
    <q-header no-border class="bg-white text-dark" style="z-index: 50 !important">
      <q-toolbar>
        <q-btn dense flat round class="te" icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="" />
          </q-avatar> -->
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="custom-sidebar"
      :width="250"
    >
      <q-scroll-area class="fit">
        <div class="row q-ml-md q-mt-sm q-mb-lg">
          <div class="col-4">
            <q-avatar size="60px">
              <img src="../assets/logo.png" />
            </q-avatar>
          </div>
          <div class="col-8">
            <div class="q-ml-sm text-h6">
              <span class="text-weight-bold">Nystif-User</span>
              <q-badge transparent align="top" color="warning"> Beta Version </q-badge>
            </div>
          </div>
        </div>
        <q-list class="q-ml-md q-mr-md">
          <q-item-section header class="text-bold q-ml-sm">HOME</q-item-section>
          <q-item
            clickable
            v-ripple
            to="/dashboard"
            class="rounded-borders q-my-xs"
            active-class="bg-primary text-white"
          >
            <q-item-section avatar>
              <IconDashboard :size="25" stroke-width="2" />
            </q-item-section>
            <q-item-section class=""> Dashboard </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            to="/events"
            class="rounded-borders"
            active-class="bg-primary text-white"
          >
            <q-item-section avatar class="-ml-md">
              <IconTicket :size="25" stroke-width="2" />
            </q-item-section>
            <q-item-section class="">Events</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script setup>
import { ref } from 'vue'

import { IconDashboard, IconTicket } from '@tabler/icons-vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>


