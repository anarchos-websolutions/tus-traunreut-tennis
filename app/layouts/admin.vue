<template>
  <UDashboardGroup>
    <UDashboardSidebar
      collapsible
      resizable
    >
      <template #header="{ collapsed }">
        <div class="flex items-center gap-2 px-4">
          <Icon
            v-if="!collapsed"
            name="i-lucide-shield"
            class="size-6 text-primary"
          />
          <Icon
            v-else
            name="i-lucide-shield"
            class="size-5 text-primary mx-auto"
          />
          <span
            v-if="!collapsed"
            class="font-bold text-lg"
          >Admin</span>
        </div>
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="navItems"
          orientation="vertical"
        />
      </template>
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar
          title="Admin Dashboard"
          icon="i-lucide-shield"
        >
          <template #right>
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-lucide-log-out"
              @click="handleLogout"
            >
              Logout
            </UButton>
          </template>
        </UDashboardNavbar>
      </template>

      <slot />
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

definePageMeta({
  middleware: 'admin',
});

const router = useRouter();
const toast = useToast();

const navItems: NavigationMenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'i-lucide-layout-dashboard',
    to: '/admin',
  },
  {
    label: 'Upload PDFs',
    icon: 'i-lucide-upload',
    to: '/admin',
  },
];

async function handleLogout() {
  // Clear the session cookie
  const sessionCookie = useCookie('admin_session');
  sessionCookie.value = null;

  toast.add({
    title: 'Logged out',
    color: 'success',
  });

  await router.push('/admin/login');
}
</script>
