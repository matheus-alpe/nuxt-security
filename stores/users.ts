type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const useUsersStore = defineStore('Users', () => {
  const users = ref<User[]>([])

  async function loadData() {
    users.value = await $fetch('/api/users')
  }

  return {
    users,
    loadData
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
}
