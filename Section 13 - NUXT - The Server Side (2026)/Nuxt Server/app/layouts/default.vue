<template>
    <div class="container py-3">
        <header class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <NuxtLink to="/" class="text-decoration-none">
                <span class="fs-4">Home</span>
            </NuxtLink>


            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <NuxtLink class="me-3 py-2 text-dark text-decoration-none" to="/">
                    Home
                </NuxtLink>
                <NuxtLink class="me-3 py-2 text-dark text-decoration-none" to="/form/add">
                    Add employee
                </NuxtLink>
                <NuxtLink class="me-3 py-2 text-dark text-decoration-none" to="/form/edit">
                    Edit employee
                </NuxtLink>
            </nav>
        </header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>