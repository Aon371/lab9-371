<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
<div class="container">
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <RouterLink :to="`/`">
       
        </RouterLink>
        stormzz
      </a>
    </div>
  </nav><hr>

  <RouterView />
  
</div>
</template>