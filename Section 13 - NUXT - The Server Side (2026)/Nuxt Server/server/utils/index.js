export async function getEmployees() {
    try {
        const result = await $fetch('http://localhost:3004/employees');
        console.log('Result from Server Utils', result);
        return result
    } catch (error) {
        console.log(error);
    }
}