<template>
  
  <div class="login-container flex flex-center bg-blue-1">
    <form id="login-form" @submit.prevent="handleSubmit">
      <q-card class="my-card rounded-borders" flat>
        <q-card-section>
          <div class="column items-center q-mb-lg">
            <q-img
              height="50px"
              width="50px"
              src="../assets/logo.png"
              class="q-mb-lg"
            ></q-img>
            <q-toolbar-title>
              <strong>NYSTIF</strong>
              <q-badge
                class="q-ml-xs text-bold"
                align="middle"
                color="white"
                text-color="blue-10"
                >Dashboard</q-badge
              >
            </q-toolbar-title>
            <span class="text-h5">Login</span>
          </div>

          <div class="text-subtitle2">
            <div class="field q-mb-sm">
              <q-input
                filled
                name="username"
                label="Username"
                v-model="state.username"
                bottom-slots
           
                error-message="Username is required"
              />
            </div>
            <div class="field q-mb-sm">
              <q-input
                filled
                :type="isPwd ? 'password' : 'text'"
                name="password"
                label="Password"
                v-model="state.password"
                bottom-slots
             
                error-message="Password is required"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
          </div>
        </q-card-section>
    

        <q-card-actions align="right">
      
          <q-btn rounded flat class="text-red" @click="clearForm">Clear</q-btn>
          <q-btn
            class="bg-light-blue text-white q-ma-md q-pl-lg"
            rounded
            flat
            label="Login"
            type="submit"
            :loading="loading"
          />
        </q-card-actions>
      </q-card>
    </form>
  </div>
</template>

<script setup>
import { reactive, inject, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import router from "../router";
const isPwd = ref(true);
const state = reactive({
  username:null,
  password:null
})
const axios = inject("$axios");



const clearForm = () => {
  state.username = null
  state.password = null
}

</script>

<style scoped>
.login-container {
  height: 100vh;
  min-width: 3.5rem;
}

#login-form {
  width: 450px;
}
</style>
