export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const query = getQuery(event);
  return {
    body, query
  }
})