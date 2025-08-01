import { defineStore } from "pinia";
import router from "@/router";

import { useUserStore } from "./user";

/// FIREBASE ///
import { DB } from "@/utils/firebase";

// TOASTS
import { useToast } from "vue-toastification";
const $toast = useToast();

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

        async updateArticle(id, formData){
            try{
                const docRef = doc(DB, 'articles', id);
                await updateDoc(docRef, {
                    ...formData
                });
                /// SHOW TOASTS
                $toast.success('Updated');
                return true;
            } catch(error) {
                $toast.success(error.messge);
                throw new Error(error)
            }
        }, 
        //
        async getArticleById(id) {
            try{
                const docRef = await getDoc(doc(DB, 'articles', id));
                console.log("Данные документа:", docRef.data());
                if(!docRef.exists()){
                    throw new Error ('Could not find document in DB!');
                }
                // Return Data from DB
                return docRef.data();
            }
            catch(error){
                console.log(error);
                router.push({name: '404'});
            }
        },
        //
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
        },
        // More Articles Add //
        async AdminGetMoreArticles (docLimit) {
            try{
                if(this.adminLastVisable) {
                    let oldArticles = this.adminArticles;
                    const q = query(
                        ArticlesCol,
                        orderBy('timestamp', 'desc'),
                        startAfter(this.adminLastVisable),
                        limit(docLimit));
                const querySnapshot = await getDocs(q);
                const lastVisable = querySnapshot.docs[querySnapshot.docs.length-1];
                const newArticles = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                }));

                this.adminArticles = [
                    ...oldArticles,
                    ...newArticles
                ];

                this.lastVisable = lastVisable;
                }
            }
            catch(error) {
                throw new Error(error);
            }
        },
        // 
        async adminGetArticles(docLimit) {
            try{
                // Создает новый неизменяемый экземпляр запроса, который также расширяется и включает дополнительные ограничения запроса.
                const q = query(ArticlesCol, orderBy('timestamp', 'desc'), limit(docLimit)); 
                // Выполняет запрос и возвращает результаты в виде QuerySnapshot.
                const querySnapshot = await getDocs(q);
                
                const lastVisable = querySnapshot.docs[querySnapshot.docs.length-1];
                const articles = querySnapshot.docs.map(doc => ({
                     
                        id: doc.id,
                        ...doc.data()
                }));
                this.adminArticles = articles;
                this.adminLastVisable = lastVisable;
            }
            catch(error) {
                $toast.success(error.message);
                throw new Error(error);
            }
        }
    }
})