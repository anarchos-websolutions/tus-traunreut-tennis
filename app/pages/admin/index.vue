<template>
  <UContainer>
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold">
          PDF Upload
        </h1>
        <p class="text-gray-600 mt-1">
          Upload PDF files to add them to the RAG search system
        </p>
      </div>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            Upload PDF
          </h2>
        </template>

        <UForm
          :validate="validate"
          :state="uploadState"
          class="space-y-4"
          @submit="handleUpload"
        >
          <UFormField
            label="PDF File"
            name="file"
            description="Select a PDF file to upload and process"
          >
            <UFileUpload
              v-model="uploadState.file"
              accept="application/pdf"
              label="Drop your PDF here"
              description="PDF files only (max 50MB)"
              variant="area"
              :multiple="false"
              class="min-h-48"
            />
          </UFormField>

          <div class="flex gap-4">
            <UButton
              type="submit"
              :disabled="!uploadState.file || uploading"
              :loading="uploading"
              icon="i-lucide-upload"
            >
              Upload & Process
            </UButton>
            <UButton
              v-if="uploadState.file"
              variant="outline"
              @click="clearFile"
            >
              Clear
            </UButton>
          </div>
        </UForm>
      </UCard>

      <UCard v-if="uploadedFiles.length > 0">
        <template #header>
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">
              Uploaded Files
            </h2>
            <UBadge
              :label="uploadedFiles.length.toString()"
              variant="subtle"
            />
          </div>
        </template>

        <UTable
          :rows="uploadedFiles"
          :columns="columns"
        >
          <template #name-data="{ row }">
            <div class="flex items-center gap-2">
              <Icon
                name="i-lucide-file-text"
                class="w-5 h-5 text-muted"
              />
              <span class="font-medium">{{ (row as unknown as UploadedFile).name }}</span>
            </div>
          </template>
          <template #size-data="{ row }">
            <span class="text-muted">{{ formatFileSize((row as unknown as UploadedFile).size) }}</span>
          </template>
          <template #uploadedAt-data="{ row }">
            <span class="text-muted">{{ formatDate((row as unknown as UploadedFile).uploadedAt) }}</span>
          </template>
        </UTable>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { FormSubmitEvent, FormError } from '@nuxt/ui';

definePageMeta({
  layout: 'admin',
});

const toast = useToast();

// ArkType schema for file upload validation
type UploadSchema = {
  file: File | undefined;
};

const uploadState = reactive<UploadSchema>({
  file: undefined,
});

// Custom validation function for Nuxt UI Form
function validate(state: UploadSchema): FormError[] {
  const errors: FormError[] = [];

  if (!state.file) {
    errors.push({ name: 'file', message: 'Please select a PDF file' });
  }
  else if (!state.file.type || !state.file.type.includes('pdf')) {
    errors.push({ name: 'file', message: 'File must be a PDF' });
  }

  return errors;
}

interface UploadedFile {
  name: string;
  size: number;
  uploadedAt: Date;
}

const uploading = ref(false);
const uploadedFiles = ref<UploadedFile[]>([]);

const columns = [
  { key: 'name', label: 'File Name' },
  { key: 'size', label: 'Size' },
  { key: 'uploadedAt', label: 'Uploaded At' },
];

function clearFile() {
  uploadState.file = undefined;
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / (k ** i)).toFixed(2))} ${sizes[i]}`;
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleString('de-DE');
}

async function handleUpload(event: FormSubmitEvent<UploadSchema>) {
  if (!event.data.file) {
    return;
  }

  uploading.value = true;
  try {
    const formData = new FormData();
    formData.append('file', event.data.file);

    const result = await $fetch<{ chunksAdded: number }>('/api/admin/upload-pdf', {
      method: 'POST',
      body: formData,
    });

    toast.add({
      title: 'Upload successful',
      description: `File "${event.data.file.name}" has been processed and added to Weaviate (${result.chunksAdded} chunks)`,
      color: 'success',
    });

    uploadedFiles.value.unshift({
      name: event.data.file.name,
      size: event.data.file.size,
      uploadedAt: new Date(),
    });

    clearFile();
  }
  catch (error: unknown) {
    console.error('Upload error:', error);
    const errorMessage = error instanceof Error
      ? error.message
      : (error as { data?: { statusMessage?: string } })?.data?.statusMessage || 'Failed to upload file';

    toast.add({
      title: 'Upload failed',
      description: errorMessage,
      color: 'error',
    });
  }
  finally {
    uploading.value = false;
  }
}
</script>
