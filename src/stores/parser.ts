import { ref } from 'vue'
import { defineStore } from "pinia";
import initObj from '../assets/SDS3_Common_All.json'
import initObjSimple from '../assets/SDS3_common_simple_order_by_page.json'

export const useUserStore = defineStore('parse', {
    state: () => {
        return {
            initObj: initObj,
            initObjSimple: initObjSimple,
            initCasno: '7664417&1'
        }
    },

    getters: {

    },

    actions: {
    },

    persist: {
        key: 'map',
        storage: sessionStorage
    }
})