<template>
    <div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            My Game Blog
        </div>
                <div class="col" v-for="(notes) in notes" :key="notes.id">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{notes.title}}</h5>
                            <p class="card-text">{{ notes.description }}</p>
                        </div>
                        <div class="card-footer">
                            <router-link :to="`/admin/update_article/${ notes.id }`">
                                Update
                            </router-link>
                        </div>
                    </div>
                </div>
    </div> 
</template>


<script setup>
import { ref } from 'vue';
import { DB } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const notes = ref([]);

// Fetch the notes
const notesCollection = collection(DB, 'notes');

getDocs(notesCollection)
.then( snapshot => {
    let documents = [];
    snapshot.docs.forEach(doc => {
        documents.push({
            ...doc.data(), id: doc.id
        });
    })
    notes.value = documents;
} )
</script>