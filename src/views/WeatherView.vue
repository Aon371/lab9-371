<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { Travel_listStore } from '../stores/counter.js';

const All_travel = Travel_listStore();
const All_travel_list = ref(All_travel.travel_list);



const items = ref([])
const url = ref('{{i.ip}}')

function fetchPosts() {
  axios
    .get(url.value)
    .then((response) => {
      items.value = response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(fetchPosts)
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="(i,index) in All_travel_list " :key="index">
      <div class="card h-100">
        <img :src="i.img" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>{{i.name}}</strong></h5>
          <p class="card-text">ตรวจเช็คสภาพอากาศของแต่ละวัน</p>
        </div>
        <div class="card-footer">
          <RouterLink :to="`/WeatherCard/${index}`">
            <div class="button">
            <button class="btn btn-outline-info" type="submit">Click to see details</button>
          </div>
          </RouterLink>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mali:wght@400;600&display=swap');

.card-text {
  font-family: 'Mali', cursive;
}
.card-body{
  font-family: 'Mali', cursive;
}

.card-img-top {
    width: 100%;
    max-height: 400px;
}

.button {
  text-align: center;
}
</style>
