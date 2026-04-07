export default defineEventHandler(async (event) => {

  try{
    const body = await readBody(event);

    if(body.fullname.length <= 3) {
      throw createError({
        statusCode: 404,
        statusMessage: 'This name is too short',
      });
      
    }
    // Получаем данные из сервера, сохраняем в data и возвращаем return
    const data = await $fetch('http://localhost:3004/employees', {
    method: 'POST',
    body: body
    });
    return {
    body, data
  }
}
  catch(error) {
    throw createError(error);
  }
})