<template>
  <div class="q-pa-md q-mt-lg q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 q-mb-lg">Event List</div>
        <div class="q-pa-md">
          <q-table  row-key="name" flat bordered :filter="filter">
            <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" class="bg-grey-1 q-pl-md q-pr-md" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
            </q-table>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none"> </q-card-section>
    </q-card>
  </div>
</template>


<script setup>
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Signed in successfully'
})
</script>
