<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UiToastToaster />
  </div>
</template>

<script lang="ts" setup>
  useHead({
    htmlAttrs: {
      lang: "en",
    },
    link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
  });

  const title = "Users";
  const description =
    "List that renders list of users.";
  const image = "/social.png";
  useSeoMeta({
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    // ogUrl: "https://...", // production url
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    twitterCard: "summary_large_image",
  });
</script>
