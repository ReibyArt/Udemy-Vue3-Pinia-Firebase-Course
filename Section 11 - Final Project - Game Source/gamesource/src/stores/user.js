import { defineStore } from "pinia";
import router from '@/router';

/// FIREBASE ///
import { AUTH, DB } from "@/utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import  errorCodes  from "@/utils/fbcodes";

const DEFAULT_USER = {
    uid: null,
    email: null,
    firstname: null,
    lastname: null,
    isAdmin: null
}

export const useUserStore = defineStore('user', {
    state: ()=>({
        loading: false,
        user: DEFAULT_USER,
        auth: false,
    }),
    getters:{

    },
    actions: {
        // USER LOCAL STATE 
        setUser(user) {
            this.user = { ...this.user, ...user };
            this.auth = true;
        },

        // AUTO SIGN IN USER
        async autoSignIn(uid) {
            try{
                const userData = await this.getUserProfile(uid);
                //  UPDATE LOCAL STATE
                this.setUser(userData);
                return true;
            } catch(error) {
                console.log(error);
            }
        },

        async getUserProfile(uid) {
            try{
                const useRef = await getDoc(doc(DB, 'users', uid));
                if(!useRef.exists()){
                    throw new Error('Could not find user!')
                }
                return useRef.data();
            } catch(error) {
                throw new Error(errorCodes(error.code));
            }
        },


        // SIGN IN USER
        async signIn(formData) {
            try {
                this.loading = true;
                const response = await signInWithEmailAndPassword(
                    AUTH, 
                    formData.email, 
                    formData.password
                );

                /// GET USER DATA
                const userData = await this.getUserProfile(response.user.uid);
                this.setUser(userData);
                console.log('User is Sign In');
                router.push({name: 'dashboard'});
            } catch(error) {
                throw new Error(errorCodes(error.code));
            }
            finally {
                this.loading = false;
            }
        },

        // REGISTER USER
        async register(formData){
            try {
                this.loading = true;

                const response = await createUserWithEmailAndPassword(
                    AUTH, formData.email, formData.password
                );

                // ADD USER IN DB
                const newUser = {
                    uid: response.user.uid,
                    email: response.user.email,
                    isAdmin: false
                }
                await setDoc(doc(DB, 'users', response.user.uid), newUser);

                // UPDATE LOCAL STATE
                this.setUser(newUser);

                // REDIRECT USER 
                router.push({name: 'dashboard'});
                console.log('You are registred!');
            } catch(error) 
            {
                throw new Error(errorCodes(error.code));
            } finally 
            {
                this.loading =false;
            }
        }
    }
});