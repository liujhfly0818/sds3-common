import { ref } from 'vue'
import { defineStore } from "pinia";
import initObj from '../assets/SDS3_Common_All.json'
import initObjSimple from '../assets/SDS3_common_all_simple.json'

export const useUserStore = defineStore('parse', {
    state: () => {
        return {
            initObj: initObj,
            initObjSimple: initObjSimple,
            initCasno: '50-00-0'
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