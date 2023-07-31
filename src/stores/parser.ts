import { defineStore } from "pinia";
import initJson from '../assets/commonAll.json'

export const useUserStore = defineStore('parse', {
    state: () => {
        return {
            initJson: initJson,
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
        }
    },

    persist: {
        key: 'map',
        storage: sessionStorage
    }
})