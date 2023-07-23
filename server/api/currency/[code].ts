export default defineEventHandler(async (event) => {
  const code = event.context.params?.code;
  const { currencyKey } = useRuntimeConfig();
  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apiKey=${currencyKey}`;

  const { data }: { data: any } = await $fetch(uri);

  return data;
});
