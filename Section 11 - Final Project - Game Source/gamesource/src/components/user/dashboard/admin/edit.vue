<template>
    <h1>Edit Article</h1>
    <hr>
    <!-- Loader  -->

    <!-- <div class="text-center m-3" v-show="loading">
        <v-progress-circular
            indeterminate
            color="primary"
        />
    </div> -->
    <Form class="mb-5" @submit="onSubmit" :validation-schema="ArticleSchema">
            <div class="mb-4">
                <!-- Name of the game -->
                <Field 
                    name="game" v-model="article.game" v-slot="{field, errors, errorMessage}">
                    <input 
                        type="text"
                        class="form-control"
                        placeholder="Name of the game"
                        v-bind="field"
                        :class="{'is-invalid' :errors.length !==0}"
                    />
                    <div
                        class="input-alert"
                        v-if="errors.length !==0"
                    >
                        {{ errorMessage }}
                    </div>        
                </Field>
            </div>
            <!-- Title of the article -->
             <div class="mb-4">
                <Field 
                    name="title" v-model="article.title" v-slot="{field, errors, errorMessage}">
                    <input 
                        type="text"
                        class="form-control"
                        placeholder="Title of the article"
                        v-bind="field"
                        :class="{'is-invalid' :errors.length !==0}"
                    />
                    <div
                        class="input-alert"
                        v-if="errors.length !==0"
                    >
                        {{ errorMessage }}
                    </div>        
                </Field>
            </div>
            <!-- Excerpt -->
            <div class="mb-4">
                <Field 
                    name="excerpt" v-model="article.excerpt" v-slot="{field, errors, errorMessage}">
                    <textarea 
                        rows="3"
                        class="form-control"
                        placeholder="Add an excerpt"
                        v-bind="field"
                        :class="{'is-invalid' :errors.length !==0}"
                    ></textarea>
                    <div
                        class="input-alert"
                        v-if="errors.length !==0"
                    >
                        {{ errorMessage }}
                    </div>        
                </Field>
            </div>


            <!-- What you see is what you get wysiwyg.js (HOORRBLEEEE) -->
             <div class="mb-4">
                 <WYSIWYG @update="updateEditor" :content="article.editor"/>
                <Field name="editor" v-model="veditor" v-slot="{field, errors, errorMessage}">
                    <input
                        type="hidden"
                        id="veditor"
                        v-bind="field"
                    />
                    <div
                        class="input-alert"
                        v-if="errors.length !==0"
                    >
                        {{ errorMessage }}
                    </div>        
                </Field>
             </div>


            <!-- Rating of the game  -->

            <div class="mb-4">
                <Field 
                    name="rating" v-model="article.rating" value="Select of a rating" v-slot="{field, errors, errorMessage}">
                    <select class="form-select" v-bind="field"  :class="{'is-invalid' :errors.length !==0}">
                        <option value="Select a rating">
                            Select a rating
                        </option>
                        <option v-for="rating in ratingArray" :key="rating" :value="rating">
                            {{ rating }}
                        </option>
                    </select>
                    <div
                        class="input-alert"
                        v-if="errors.length !==0"
                    >
                        {{ errorMessage }}
                    </div>        
                </Field>
            </div>

            <!-- IMG -->

            <div class="mb-4">
                <!-- Name of the game -->
                <Field 
                    name="image" v-model="article.image" v-slot="{field, errors, errorMessage}">
                    <input 
                        type="text"
                        class="form-control"
                        placeholder="Add source of the IMG"
                        v-bind="field"
                        :class="{'is-invalid' :errors.length !==0}"
                    />
                    <div
                        class="input-alert"
                        v-if="errors.length !==0"
                    >
                        {{ errorMessage }}
                    </div>        
                </Field>
            </div>

            <!--  Button  -->
              <v-btn 
              type="submit" 
              variant="outlined"
              :disabled="loading"
              :loading="loading"
              >
              
                Update Article
              </v-btn>

    </Form>
</template>

<script setup>
import { ref } from 'vue';
import { Field, Form } from 'vee-validate';
import ArticleSchema from './schema';

import WYSIWYG from '@/utils/wysiwyg.vue';
// TOASTS
import { useToast } from 'vue-toastification';
const $toast = useToast();

// USE ROUTE
import { useRoute } from 'vue-router';
const route = useRoute();

// Article Store
import { useArticleStore } from '@/stores/articles';
const articleStore = useArticleStore();
// Loader
const loading = ref(true);

const ratingArray = [0,1,2,3,4,5]
const veditor = ref('');
const article = ref({});

function onSubmit(values, { resetForm}) {
    loading.value = true;
    articleStore.updateArticle(route.params.id, values)
    .finally(()=>{
        loading.value = false;
    })
}

function updateEditor(value) {
    veditor.value = value;
}

// Get article by ID and papulate

articleStore.getArticleById(route.params.id)
.then((response) => {
    console.log('Данные в RESPONSE ' + response);
    article.value = { ...response };
    updateEditor(response.editor);
    loading.value = false;
    console.log('Данные в ARTICLE.VALUE' + article.value)
})
.catch((error)=> {
    $toast.error(error.message)
})
</script>