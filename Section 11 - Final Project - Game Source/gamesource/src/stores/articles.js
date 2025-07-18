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
        async addArticle(formData) {
            try {
                // GET USER DATA (PROFILE)
                const userStore = useUserStore();
                const user = userStore.getUserData;

                //POST DOC IN DB 
                const newArticle = doc(ArticlesCol);
                await setDoc(newArticle, {
                    timestamp: serverTimestamp(),
                    owner: {
                        uid: user.uid,
                        firstname: user.firstname,
                        lastname: user.lastname,
                    },
                    ...formData
                });

                router.push({ name: 'admin_articles', query: {reload: 'true'}});
                console.log(user.firstname + ' ' + user.lastname);
                return true;
            }
            catch(error)
            {
                throw new Error(error);
            }
        }
    }
})