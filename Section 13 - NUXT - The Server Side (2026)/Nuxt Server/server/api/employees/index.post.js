export default defineEventHandler((event) => {
    console.log(event);
  return {
    post: 'postTest',
  }
})