import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list  = ref([
  {name: 'ผลิ Phli คาเฟ่', img:'https://www.paiduaykan.com/travel/wp-content/uploads/2022/01/1-SON09405.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88852127095799&lon=99.01373892653918&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'Tomato cnx คาเฟ่', img:'https://www.paiduaykan.com/travel/wp-content/uploads/2022/01/6-IMG_4738.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.884067360988016&lon=99.01340628045365&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'Transit No.8', img:'https://www.paiduaykan.com/travel/wp-content/uploads/2020/01/1-SON05361-800x533.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.879198960518284&lon=99.01400969350873&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'Banyakat บรรยากาศ', img:'https://www.paiduaykan.com/travel/wp-content/uploads/2021/11/3-SON00219.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88680552840249&lon=99.00700527133165&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'max coffee', img:'https://www.paiduaykan.com/travel/wp-content/uploads/2020/10/max-coffee1.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.80202637792063&lon=98.99512191864117&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'WTF Coffee Camp', img:'https://www.paiduaykan.com/travel/wp-content/uploads/2021/11/3-IMG_6850.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.795914426649965&lon=98.96570372658144&appid=66af6261484edc25c7b1b61803d7547c'},
])

return { travel_list }
})