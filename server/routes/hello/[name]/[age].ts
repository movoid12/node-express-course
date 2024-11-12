export default defineEventHandler((event) => {
  const name = getRouterParam(event, "name");
  const age = getRouterParam(event, "age");

  return { name: `Hello ${name}!`, age };
});
