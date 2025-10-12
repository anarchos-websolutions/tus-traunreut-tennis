<template>
  <div>
    <UContainer class="py-10">
      <div class="mb-8">
        <h1 class="title">
          Schwarzes Brett
        </h1>
        <p class="text-body mt-2">
          Teile Mitteilungen an ausgewählte Empfänger inklusive Bild.
        </p>
      </div>

      <UCard>
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-6"
          @submit.prevent="sendContactToLambdaFunction"
        >
          <UFormField
            label="Titel"
            name="title"
            required
          >
            <UInput
              v-model="state.title"
              placeholder="Titel eingeben"
            />
          </UFormField>

          <UFormField
            label="Beschreibung"
            name="description"
            required
          >
            <UTextarea
              v-model="state.description"
              placeholder="Beschreibung eingeben"
              :maxrows="12"
              autoresize
            />
          </UFormField>

          <UFormField
            label="Bild (optional)"
            name="image"
          >
            <UInput
              type="file"
              accept="image/*"
              @change="onFileChange"
            />
            <p
              v-if="fileName"
              class="text-muted mt-1"
            >
              {{ fileName }}
            </p>
          </UFormField>

          <div class="flex items-center justify-end gap-3">
            <UButton
              variant="outline"
              color="neutral"
              @click="resetForm"
            >
              Zurücksetzen
            </UButton>
            <UButton
              type="submit"
              :loading="submitting"
              icon="i-lucide-send"
            >
              Senden
            </UButton>
          </div>
        </UForm>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup>
import * as z from 'zod';

definePageMeta({
  layout: 'default',
});

const toast = useToast();

const schema = z.object({
  title: z.string().min(3, 'Mindestens 3 Zeichen'),
  description: z.string().min(10, 'Mindestens 10 Zeichen'),
});

const state = reactive({
  title: '',
  description: '',
});

const submitting = ref(false);
const file = ref(null);
const fileName = computed(() => file.value?.name || '');

function onFileChange(e) {
  const input = e.target;
  file.value = input.files && input.files[0] ? input.files[0] : null;
}

function resetForm() {
  state.title = '';
  state.description = '';
  state.recipients = [];
  file.value = null;
}

async function sendContactToLambdaFunction() {
  logger.debug('Sending contact to Lambda function');
  try {
    submitting.value = true;

    // Prepare the data for the Lambda function
    const formData = new FormData();
    formData.append('title', state.title);
    formData.append('description', state.description);

    // Add image if provided
    if (file.value) {
      formData.append('image', file.value);
    }

    // Get the Cloudflare Workers URL from environment variables
    const lambdaUrl = useRuntimeConfig().public.cloudflareWorkersUrl;

    if (!lambdaUrl) {
      throw new Error('Cloudflare Workers URL not configured');
    }

    // Send to Cloudflare Workers Lambda function
    await $fetch(lambdaUrl, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    toast.add({
      title: 'Gesendet',
      description: 'Deine Mitteilung wurde erfolgreich an die Lambda-Funktion gesendet.',
      color: 'success',
      icon: 'i-lucide-check',
    });

    resetForm();
  }
  catch (error) {
    console.error('Error sending to Lambda function:', error);

    toast.add({
      title: 'Fehler beim Senden',
      description: error?.data?.message || error?.message || 'Bitte später erneut versuchen.',
      color: 'error',
      icon: 'i-lucide-alert-triangle',
    });
  }
  finally {
    submitting.value = false;
  }
}
</script>
