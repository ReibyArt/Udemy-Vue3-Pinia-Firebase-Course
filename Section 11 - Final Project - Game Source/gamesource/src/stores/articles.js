import { defineStore } from "pinia";
import router from "@/router";

import { useUserStore } from "./user";

/// FIREBASE ///
import { DB } from "@/utils/firebase";

import { collection, getDoc, doc, setDoc, serverTimestamp, updateDoc, query, orderBy, getDocs, limit, startAfter, deleteDoc } from "firebase/firestore";

let ArticlesCol = collection(DB, 'articles');

export const useArticleStore = defineStore ('article', {
    state:() =>({
        homeArticles: '',
        adminArticles: '',
        adminLastVisable: '',
    }),

    getters: {},
    actions: {
        async addArticle() {
            try {

            }
            catch(error)
            {
                throw new Error(error.code);
            }
        }
    }
})