<template>
    <div class="container-fluid content">
        <!-- Side Bar (Left) -->
        <div class="row" >
            <nav
            id="sidebarMenu"
            class="col-mb-3 col-sm-3 col-lg-2 bg-light sidebar"
            >
                <div class="position-sticky mt-3">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'dashboard'}">
                                <v-icon icon="mdi-view-dashboard"/>
                                Dashboard
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'user_profile'}">
                                <v-icon icon="mdi-account"/>
                                Profile
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="userStore.user.isAdmin">
                            <router-link class="nav-link" :to="{name: 'admin_articles'}">
                                <v-icon icon="mdi-note-outline"/>
                                Articles
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="userStore.user.isAdmin">
                            <router-link class="nav-link" :to="{name: 'admin_add_articles'}">
                                <v-icon icon="mdi-note-edit-outline"/>
                                Add Articles
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- CONTENT -->
            <main
                id="admin_body"
                class="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            >
                <router-view> </router-view>
            </main>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
</script>

<style scoped>
/* Мобильная версия */
@media (max-width: 767px) {
  .content {
    flex-direction: column;
  }
}
</style>