<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref, nextTick } from 'vue'
  import L from 'leaflet'
  import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
  import iconUrl from 'leaflet/dist/images/marker-icon.png'
  import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
  import 'leaflet/dist/leaflet.css'

  const mapEl = ref<HTMLDivElement | null>(null)
  let leafletMap: L.Map | null = null

  const workshopCoords: L.LatLngExpression = [51.9651, 19.6981]

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
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(leafletMap)

    L.marker(workshopCoords)
      .addTo(leafletMap)
      .bindPopup(`
        <div style="text-align: center; color: #333;">
          <b>LGarage</b><br>
          Serwis & Detaling<br>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${workshopCoords[0]},${workshopCoords[1]}" target="_blank" style="color: #d64545; text-decoration: none; font-weight: bold;">
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
  <v-container class="py-8" fluid>
    <v-row>
      <v-col cols="12" md="7">
        <v-card border class="h-100 pa-6 d-flex flex-column justify-center" elevation="4">
          <div class="mb-6">
            <h2 class="text-h3 font-weight-bold text-uppercase mb-1">
              Kontakt
            </h2>
            <h3 class="text-h5 font-weight-bold text-uppercase mb-1">
              Gawrych - Serwis & Detaling
            </h3>
            <v-divider class="my-4 w-20 border-opacity-100" color="primary" />
          </div>

          <div class="d-flex align-center mb-4">
            <v-avatar
              class="mr-4"
              color="primary"
              rounded
              size="large"
              variant="tonal"
            >
              <v-icon color="primary" icon="mdi-map-marker" />
            </v-avatar>
            <div>
              <div class="text-caption">Adres</div>
              <div class="text-body-1 font-weight-medium">ul. Jesionowa 11, 95-015 Głowno</div>
            </div>
          </div>

          <div class="d-flex align-center mb-4">
            <v-avatar
              class="mr-4"
              color="primary"
              rounded
              size="large"
              variant="tonal"
            >
              <v-icon color="primary" icon="mdi-phone" />
            </v-avatar>
            <div>
              <div class="text-caption">Telefon</div>
              <div class="text-body-1">
                <span class="text-decoration-none">+48 730 995 828 | +48 796 073 929</span>
              </div>
            </div>
          </div>

          <div class="d-flex align-center mb-4">
            <v-avatar
              class="mr-4"
              color="primary"
              rounded
              size="large"
              variant="tonal"
            >
              <v-icon color="primary" icon="mdi-email" />
            </v-avatar>
            <div>
              <div class="text-caption">Email</div>
              <div class="text-body-1 font-weight-medium">kontakt@lgarage.pl</div>
            </div>
          </div>

          <div class="d-flex align-center mb-6">
            <v-avatar
              class="mr-4"
              color="primary"
              rounded
              size="large"
              variant="tonal"
            >
              <v-icon color="primary" icon="mdi-clock" />
            </v-avatar>
            <div>
              <div class="text-caption">Godziny otwarcia</div>
              <div class="text-body-1 font-weight-medium">Pn-Pt 8:00-18:00, Sob 9:00-14:00</div>
            </div>
          </div>

          <v-btn
            block
            class="mt-auto"
            color="black"
            :href="`https://www.google.com/maps/dir/?api=1&destination=${workshopCoords[0]},${workshopCoords[1]}`"
            prepend-icon="mdi-navigation"
            size="large"
            target="_blank"
            text-color="white"
            variant="elevated"
          >
            Jak dojechać?
          </v-btn>

        </v-card>
      </v-col>

      <v-col cols="12" md="5">
        <v-card border class="h-100 rounded-lg overflow-hidden" elevation="4">
          <div ref="mapEl" class="map-container" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.map-container {
  height: 100%;
  min-height: 450px;
  width: 100%;
  z-index: 1;
}

@media (max-width: 960px) {
  .map-container {
    min-height: 300px;
  }
}
</style>
