export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Second middleware');
    console.log("TO: " + to.path, " FROM: " + from.path );
});