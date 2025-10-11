<template>
  <section
    id="booking"
    class="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20"
  >
    <UContainer>
      <!-- Section Header -->
      <div class="text-center mb-16">
        <UBadge
          color="green"
          variant="soft"
          size="lg"
          class="mb-4"
        >
          Online Buchung
        </UBadge>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Platz Jetzt Buchen
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Unser benutzerfreundliches Online-Buchungssystem ermöglicht eine nahtlose Buchung
          mit dem Smartphone oder Computer für eine bessere Auslastung der Tennishalle.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Booking Form -->
        <UCard class="overflow-hidden">
          <template #header>
            <div class="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6">
              <div class="flex items-center space-x-3">
                <Icon
                  name="heroicons:calendar-days"
                  class="w-8 h-8"
                />
                <div>
                  <h3 class="text-2xl font-bold">
                    Tennisplatz Buchen
                  </h3>
                  <p class="opacity-90">
                    Wählen Sie Ihren gewünschten Termin
                  </p>
                </div>
              </div>
            </div>
          </template>

          <div class="space-y-6">
            <!-- Court Selection -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Platz auswählen
              </label>
              <USelectMenu
                v-model="selectedCourt"
                :options="courtOptions"
                placeholder="Wählen Sie einen Platz"
                size="lg"
              />
            </div>

            <!-- Date Selection -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Datum
              </label>
              <UInput
                v-model="selectedDate"
                type="date"
                size="lg"
                :min="today"
              />
            </div>

            <!-- Time Selection -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Uhrzeit
              </label>
              <div class="grid grid-cols-3 gap-2">
                <UButton
                  v-for="time in availableTimes"
                  :key="time"
                  :variant="selectedTime === time ? 'solid' : 'outline'"
                  :color="selectedTime === time ? 'green' : 'gray'"
                  size="sm"
                  class="text-center"
                  @click="selectedTime = time"
                >
                  {{ time }}
                </UButton>
              </div>
            </div>

            <!-- Duration -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Spielzeit
              </label>
              <USelectMenu
                v-model="selectedDuration"
                :options="durationOptions"
                placeholder="Spielzeit wählen"
                size="lg"
              />
            </div>

            <!-- Player Information -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Spieler/Kontakt
              </label>
              <UInput
                v-model="playerName"
                placeholder="Ihr Name"
                size="lg"
              />
            </div>

            <div class="space-y-3">
              <UInput
                v-model="playerEmail"
                type="email"
                placeholder="E-Mail-Adresse"
                size="lg"
              />
            </div>

            <!-- Booking Summary -->
            <div
              v-if="selectedCourt && selectedDate && selectedTime && selectedDuration"
              class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
            >
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Buchungsübersicht
              </h4>
              <div class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <div class="flex justify-between">
                  <span>Platz:</span>
                  <span>{{ selectedCourt }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Datum:</span>
                  <span>{{ formatDate(selectedDate) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Zeit:</span>
                  <span>{{ selectedTime }} ({{ selectedDuration }})</span>
                </div>
                <div class="flex justify-between font-semibold text-green-600">
                  <span>Preis:</span>
                  <span>{{ calculatePrice() }}€</span>
                </div>
              </div>
            </div>

            <!-- Book Button -->
            <UButton
              color="green"
              size="xl"
              block
              :disabled="!isFormValid"
              class="mt-6"
              @click="handleBooking"
            >
              <Icon
                name="heroicons:check-circle"
                class="w-5 h-5 mr-2"
              />
              Verbindlich Buchen
            </UButton>
          </div>
        </UCard>

        <!-- Booking Information & Features -->
        <div class="space-y-8">
          <!-- Features -->
          <UCard>
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                Vorteile der Online-Buchung
              </h3>

              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="heroicons:device-phone-mobile"
                      class="w-5 h-5 text-green-600"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">
                      Smartphone-optimiert
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      Buchen Sie bequem von unterwegs mit Ihrem Handy
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="heroicons:clock"
                      class="w-5 h-5 text-blue-600"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">
                      24/7 verfügbar
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      Rund um die Uhr buchbar, auch außerhalb der Öffnungszeiten
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="heroicons:envelope"
                      class="w-5 h-5 text-purple-600"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">
                      Sofortige Bestätigung
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      Erhalten Sie umgehend eine Buchungsbestätigung per E-Mail
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div class="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="heroicons:chart-bar"
                      class="w-5 h-5 text-orange-600"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">
                      Bessere Auslastung
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      Optimierte Platzverteilung für mehr verfügbare Zeiten
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Contact Info -->
          <UCard class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                Kontakt & Support
              </h3>

              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <Icon
                    name="heroicons:envelope"
                    class="w-5 h-5 text-gray-500"
                  />
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">
                      E-Mail
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      info@tennis-traunreut.de
                    </p>
                  </div>
                </div>

                <div class="flex items-center space-x-3">
                  <Icon
                    name="heroicons:phone"
                    class="w-5 h-5 text-gray-500"
                  />
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">
                      Telefon
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      +49 (0) 8669 - 2971
                    </p>
                  </div>
                </div>

                <div class="flex items-center space-x-3">
                  <Icon
                    name="heroicons:map-pin"
                    class="w-5 h-5 text-gray-500"
                  />
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">
                      Adresse
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      Traunring 118, 83301 Traunreut
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const today = new Date().toISOString().split('T')[0];

const selectedCourt = ref('');
const selectedDate = ref('');
const selectedTime = ref('');
const selectedDuration = ref('');
const playerName = ref('');
const playerEmail = ref('');

const courtOptions = [
  'Outdoor Platz 1 (Sand)',
  'Outdoor Platz 2 (Sand)',
  'Indoor Platz 1 (Halle)',
  'Indoor Platz 2 (Halle)',
  'Indoor Platz 3 (Halle)',
];

const durationOptions = [
  '1 Stunde',
  '1,5 Stunden',
  '2 Stunden',
];

const availableTimes = [
  '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00',
];

const isFormValid = computed(() => {
  return selectedCourt.value
    && selectedDate.value
    && selectedTime.value
    && selectedDuration.value
    && playerName.value
    && playerEmail.value;
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const calculatePrice = () => {
  if (!selectedCourt.value || !selectedDuration.value) return 0;

  const isIndoor = selectedCourt.value.includes('Indoor');
  const duration = selectedDuration.value;

  let basePrice = isIndoor ? 25 : 20; // Indoor vs Outdoor base price

  if (duration.includes('1,5')) {
    basePrice *= 1.5;
  }
  else if (duration.includes('2')) {
    basePrice *= 2;
  }

  return basePrice;
};

const handleBooking = () => {
  // This would normally send the booking data to a backend
  alert('Buchungsanfrage wurde übermittelt! Sie erhalten in Kürze eine Bestätigungsmail.');

  // Reset form
  selectedCourt.value = '';
  selectedDate.value = '';
  selectedTime.value = '';
  selectedDuration.value = '';
  playerName.value = '';
  playerEmail.value = '';
};
</script>
