export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad request",
    });
  }

  if (id !== "1") {
    throw createError({
      statusCode: 404,
      statusMessage: "Not found",
    });
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  // make it returen a json object with the user profile data
  return { id, name: "John Doe" };
});
