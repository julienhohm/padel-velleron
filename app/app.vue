<template>
  <UApp>
    <UIHeader>
      <template #left>
        <NuxtLink to="/">
          <Logo class="w-auto h-12 shrink-0" />
        </NuxtLink>
        <span>Padel Velleron</span>
      </template>
      <template #right>
        <UColorModeButton />
        <!-- <UButton
          to="https://github.com/nuxt-ui-pro/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        /> -->
      </template>
    </UIHeader>
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
