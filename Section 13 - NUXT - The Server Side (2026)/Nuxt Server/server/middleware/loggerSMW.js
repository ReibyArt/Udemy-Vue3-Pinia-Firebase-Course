export default defineEventHandler((event)=>{
    console.log('Log: ' + getRequestURL(event));
    console.log(event.context.user);
})