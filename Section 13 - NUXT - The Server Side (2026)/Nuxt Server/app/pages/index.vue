<template>
    <div>
        <h1>Home Page</h1>
        <div v-if="pending">
            <h1>Loading.....</h1>
        </div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else class="row row-cols-1 row-cols-sm-2 rows-cols-md-3 g-3">
            <div v-for="employee in data" :key="employee.id" class="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">
                            {{ employee.fullname }}
                        </h3>
                        <hr>
                        <p class="card-text"> {{ employee.position }}</p>
                        <p class="card-text"> {{ employee.age }}</p>
                        <nuxtLink :to="`/employees/${employee.id}`" class="btn btn-primary">
                            Details Link
                        </nuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

// USING $fetch, useFetch(), useAsyncFetch();

    // const data = await $fetch('http://localhost:3004/employees');
    // console.log(data);

    // const {error, pending, data} = await useFetch('http://localhost:3004/employees');

    const {error, pending, data} = await useAsyncData('someData', () => {
        return $fetch('http://localhost:3004/employees');
    });
</script>