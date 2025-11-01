<template>
  <UContainer>
    <div class="min-h-screen flex items-center justify-center">
      <UCard class="w-1/2 bg-secondary-700 text-white">
        <template #header>
          <h1 class="text-2xl font-bold">
            Admin Login
          </h1>
        </template>

        <UForm
          :validate="validate"
          :state="state"
          class="flex flex-col items-center justify-center"
          @submit="handleLogin"
        >
          <UFormGroup
            label="Password"
            name="password"
            class="mb-4"
          >
            <UInput
              v-model="state.password"
              type="password"
              placeholder="Enter admin password"
              :disabled="loading"
              autofocus
            />
          </UFormGroup>

          <UButton
            type="submit"
            :loading="loading"
            block
            class="w-fit bg-primary-200 text-black"
          >
            Login
          </UButton>
        </UForm>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { type } from 'arktype';
import type { FormSubmitEvent, FormError } from '@nuxt/ui';

definePageMeta({
  layout: false,
});

const toast = useToast();
const router = useRouter();

// ArkType schema for form validation
const _schema = type({
  password: 'string>0',
});

type LoginSchema = typeof _schema.infer;

const state = reactive<Partial<LoginSchema>>({
  password: '',
});

const loading = ref(false);

// Custom validation function for Nuxt UI Form
function validate(state: Partial<LoginSchema>): FormError[] {
  const errors: FormError[] = [];

  if (!state.password || state.password.length === 0) {
    errors.push({ name: 'password', message: 'Password is required' });
  }

  return errors;
}

async function handleLogin(_event: FormSubmitEvent<LoginSchema>) {
  loading.value = true;
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: { password: state.password },
    });

    toast.add({
      title: 'Login successful',
      color: 'success',
    });

    await router.push('/admin');
  }
  catch (error: unknown) {
    const errorMessage = error instanceof Error
      ? error.message
      : (error as { data?: { statusMessage?: string } })?.data?.statusMessage || 'Invalid password';

    toast.add({
      title: 'Login failed',
      description: errorMessage,
      color: 'error',
    });
  }
  finally {
    loading.value = false;
  }
}
</script>
