export default async function loadLocale(locale: string) {
  const messages = await fetch(
    `https://i18n-cdn.lokaliku.com/c76fe7eb-4ed6-49b3-accd-9adb839b9310/releases/latest/d14710fe-f5ba-4056-938c-1f232137f512/json/${locale}.json`
  ).then((resp) => resp.json());
  return messages;
}
