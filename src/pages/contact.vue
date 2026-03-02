<script setup lang="ts">
  import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
  import L from 'leaflet'
  import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
  import iconUrl from 'leaflet/dist/images/marker-icon.png'
  import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
  import 'leaflet/dist/leaflet.css'

  const mapEl = ref<HTMLDivElement | null>(null)
  let leafletMap: L.Map | null = null

  const workshopCoords: L.LatLngExpression = [51.9651, 19.6981]

  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${workshopCoords[0]},${workshopCoords[1]}`

  onMounted(async () => {
    if (!mapEl.value) return

    await nextTick()

    const defaultIcon = L.icon({
      iconUrl,
      iconRetinaUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })
    L.Marker.prototype.options.icon = defaultIcon

    leafletMap = new L.Map(mapEl.value, {
      scrollWheelZoom: false,
      zoomControl: true,
    })

    leafletMap.setView(workshopCoords, 10)

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a> © <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(leafletMap)

    L.marker(workshopCoords)
      .addTo(leafletMap)
      .bindPopup(`
        <div style="text-align: center; color: #333;">
          <b>Gawrych</b><br>
          Serwis & Detailing<br>
          <a href="${googleMapsLink}" target="_blank" style="color: #E53935; text-decoration: none; font-weight: bold;">
            Nawiguj tutaj
          </a>
        </div>
      `)
  })

  onBeforeUnmount(() => {
    if (leafletMap) {
      leafletMap.remove()
      leafletMap = null
    }
  })
</script>

<template>
  <div class="contact-page">
    <v-container class="py-4 py-md-6 px-4 px-md-10" fluid>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="h-100 pa-6 pa-md-10 d-flex flex-column justify-center bg-grey-darken-4 text-white" elevation="6" rounded="lg">
            <div class="mb-8">
              <h1 class="font-weight-bold text-h4 text-md-h4 mb-4">
                Skontaktuj się z nami
              </h1>
              <p class="text-body-1 text-grey-lighten-1 mb-6">
                Masz pytania dotyczące naszych usług? Chcesz umówić swoje auto na wizytę? Zadzwoń lub napisz, czekamy na Ciebie!
              </p>

              <h2 class="text-h5 font-weight-bold text-uppercase mb-1 text-white">
                Gawrych - Serwis & Detailing
              </h2>

              <v-divider class="mt-3 border-opacity-100" color="red" style="width: 60px; border-width: 3px;" />
            </div>

            <div class="d-flex align-start mb-6">
              <v-icon class="mr-4" color="red" icon="mdi-map-marker" size="x-large" />
              <div>
                <div class="text-caption text-grey">Adres</div>
                <div class="text-body-1 font-weight-bold">ul. Okrężna 4<br>95-015 Głowno</div>
              </div>
            </div>

            <div class="d-flex align-start mb-6">
              <v-icon class="mr-4 mt-1" color="red" icon="mdi-phone" size="x-large" />
              <div>
                <div class="text-caption text-grey">Telefon</div>
                <div class="text-body-1 font-weight-bold">
                  <a class="text-white text-decoration-none" href="tel:+48730995828">+48 730 995 828</a><br>
                  <a class="text-white text-decoration-none" href="tel:+48796073929">+48 796 073 929</a>
                </div>
              </div>
            </div>

            <div class="d-flex align-start mb-6">
              <v-icon class="mr-4 mt-1" color="red" icon="mdi-email" size="x-large" />
              <div>
                <div class="text-caption text-grey">Email</div>
                <div class="text-body-1 font-weight-bold">
                  <a class="text-white text-decoration-none" href="mailto:lukisgaw@gmail.com">lukisgaw@gmail.com</a>
                </div>
              </div>
            </div>

            <div class="d-flex align-start mb-8">
              <v-icon class="mr-4 mt-1" color="red" icon="mdi-clock" size="x-large" />
              <div>
                <div class="text-caption text-grey">Godziny otwarcia</div>
                <div class="text-body-1 font-weight-bold">Pn - Pt: 8:00 - 16:00</div>
              </div>
            </div>

            <v-btn
              block
              class="mt-auto font-weight-bold"
              color="#E53935"
              :href="googleMapsLink"
              prepend-icon="mdi-navigation"
              size="x-large"
              target="_blank"
              variant="elevated"
            >
              Wyznacz trasę
            </v-btn>

          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="h-100 rounded-lg overflow-hidden elevation-6 bg-grey-darken-4">
            <div ref="mapEl" class="map-container" />
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.map-container {
  height: 100%;
  min-height: 550px;
  width: 100%;
  z-index: 1;
}

@media (max-width: 960px) {
  .map-container {
    min-height: 400px; /* Lekko zwiększyłem minimalną wysokość na telefonach, by lepiej pasowała do wysokiej karty obok */
  }
}
</style>
