<template>
    <h1>Add Article</h1>
    <hr>


    <Form class="mb-5" @submit="onSubmit">
            <div class="mb-4">
                <!-- Name of the game -->
                <Field 
                    name="game" v-slot="{field, errors, errorMessage}">
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
                    name="title" v-slot="{field, errors, errorMessage}">
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
                    name="excerpt" v-slot="{field, errors, errorMessage}">
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
            <!--  -->


            <!-- Rating of the game  -->

            <div class="mb-4">
                <Field 
                    name="rating" value="Select of a rating" v-slot="{field, errors, errorMessage}">
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
                    name="image" v-slot="{field, errors, errorMessage}">
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
              <v-btn type="submit" variant="outlined">
                Add Article
              </v-btn>

    </Form>
</template>

<script setup>
import { ref } from 'vue';
import { Field, Form } from 'vee-validate';

const ratingArray = [0,1,2,3,4,5]

function onSubmit(values, { resetForm}) {
    console.log(values);
}
</script>