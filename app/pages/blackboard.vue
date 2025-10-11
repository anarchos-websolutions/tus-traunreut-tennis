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
          @submit="onSubmit"
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

          <UFormField
            label="Empfänger"
            name="recipients"
            required
          >
            <USelect
              v-model="state.recipients"
              :items="recipientOptions"
              multiple
            />
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
    <AppFooter />
  </div>
</template>

<script setup>
import * as z from 'zod';

definePageMeta({
  layout: 'default',
});

const toast = useToast();

const recipientOptions = [
  { label: 'Vorstand', value: 'board' },
  { label: 'Trainerteam', value: 'coaches' },
  { label: 'Mitglieder', value: 'members' },
];

const schema = z.object({
  title: z.string().min(3, 'Mindestens 3 Zeichen'),
  description: z.string().min(10, 'Mindestens 10 Zeichen'),
  recipients: z.array(z.string()).min(1, 'Mindestens ein Empfänger'),
});

const state = reactive({
  title: '',
  description: '',
  recipients: [],
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

async function onSubmit(event) {
  try {
    submitting.value = true;

    const form = new FormData();
    form.append('title', state.title);
    form.append('description', state.description);
    for (const r of state.recipients) form.append('recipients', r);
    if (file.value) form.append('image', file.value);

    await $fetch('/api/blackboard', {
      method: 'POST',
      body: form,
    });

    toast.add({
      title: 'Gesendet',
      description: 'Deine Mitteilung wurde versendet.',
      color: 'success',
      icon: 'i-lucide-check',
    });
    resetForm();
  }
  catch (error) {
    toast.add({
      title: 'Fehler beim Senden',
      description: error?.data?.message || 'Bitte später erneut versuchen.',
      color: 'error',
      icon: 'i-lucide-alert-triangle',
    });
  }
  finally {
    submitting.value = false;
  }
}
</script>
