import { ref } from 'vue'
import { defineStore } from "pinia";
import initObj from '../assets/SDS3_Common_All.json'
import initObjSimple from '../assets/SDS3_common_all_simple.json'

export const useUserStore = defineStore('parse', {
    state: () => {
        return {
            initObj: initObj,
            initObjSimple: initObjSimple,
            initCasno: '50-00-0',
            currentMaterial: {},
            loginName: 'Kim',
            loginTime: new Date(),
            age: 18
        }
    },

    getters: {
        completeName(state) {
            return `name is ${state.loginName}`
        },

        otherGetter() {
            return this.completeName + 'ShowOther'
        }
    },

    actions: {
        setName(name: string) {
            this.loginName = name
        },

        setCurrentMaterial(info: object) {
            this.currentMaterial = info
        }
    },

    persist: {
        key: 'map',
        storage: sessionStorage
    }
})