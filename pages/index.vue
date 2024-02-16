<script lang="ts" setup>
const { loggedIn, user, session, clear } = useUserSession()

const usersStore = useUsersStore()
const headers = ["ID", "Name", "Email"]
</script>

<template>
  <UiContainer as="section" class="py-5 max-w-4xl">
    <div class="flex items-center justify-between gap-5">
      <div>
        <h1 class="font-semibold text-2xl">Users</h1>
        <p class="mt-1 text-muted-foreground">Manage users here</p>
      </div>

      <UiButton size="sm" @click="usersStore.loadData">Load users</UiButton>
    </div>

    <UiDivider class="my-10" />

    <div v-if="!usersStore.users.length" class="flex flex-col gap-5 items-center">
      <Icon name="lucide:users" size="28" class="text-muted-foreground" />
      <p>No users uploaded</p>
    </div>

    <div v-else class="overflow-x-auto rounded-lg bg-background border">
      <UiTable>
        <UiTableHeader>
          <UiTableRow>
            <UiTableHead v-for="h in headers">{{ h }}</UiTableHead>
          </UiTableRow>
        </UiTableHeader>

        <UiTableBody>
          <UiTableRow v-for="user in usersStore.users" :key="user.id">
            <UiTableCell>{{ user.id }}</UiTableCell>
            <UiTableCell>
              <div class="flex items-center gap-3">
                <UiAvatar :src="user.avatar" :alt="user.name" />
                <span>{{ user.name }}</span>
              </div>
            </UiTableCell>
            <UiTableCell>
              <a :href="`mailto:${user.email}`"
                class="text-muted-foreground decoration-sky-400 hover:text-sky-500 transition underline underline-offset-2">{{
                  user.email
                }}</a>
            </UiTableCell>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    </div>
  </UiContainer>
</template>
