type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export const useUsersStore = defineStore("Users", () => {
  const users = ref<User[]>([]);

  const loadData = async () => {
    try {
      users.value = await $fetch("/api/users");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.data.message,
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return {
    users,
    loadData,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot));
}
