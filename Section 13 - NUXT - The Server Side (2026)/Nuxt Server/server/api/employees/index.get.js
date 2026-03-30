export default defineEventHandler( async (event) => {
    const data = await $fetch('http://localhost:3004/employees');
      return data
})