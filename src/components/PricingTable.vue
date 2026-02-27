<template>
  <v-table class="elevation-4 rounded-lg mx-auto bg-grey-darken-4 text-white" density="compact">
    <thead style="background-color: #B3005F;">
      <tr>
        <th class="text-center text-white font-weight-bold text-body-2" style="width: 40%; border-right: 1px solid rgba(255, 255, 255, 0.2);">
          Rodzaj Usługi
        </th>
        <th class="text-center text-white font-weight-bold text-body-2" style="width: 15%; border-right: 1px solid rgba(255, 255, 255, 0.2);">
          Auta Małe
        </th>
        <th class="text-center text-white font-weight-bold text-body-2" style="width: 15%; border-right: 1px solid rgba(255, 255, 255, 0.2);">
          Auta Średnie
        </th>
        <th class="text-center text-white font-weight-bold text-body-2" style="width: 15%; border-right: 1px solid rgba(255, 255, 255, 0.2);">
          Auta Duże
        </th>
        <th class="text-center text-white font-weight-bold text-body-2" style="width: 15%;">
          SUV, Limuzyna
        </th>
      </tr>
    </thead>

    <tbody>
      <tr class="bg-grey-darken-3">
        <td class="text-center font-weight-bold text-body-2 py-2" colspan="5">
          Podstawowa ochrona lakieru
        </td>
      </tr>
      <tr>
        <td class="text-center text-body-2">Care</td>
        <td class="text-center text-body-2">490</td>
        <td class="text-center text-body-2">590</td>
        <td class="text-center text-body-2">690</td>
        <td class="text-center text-body-2">790</td>
      </tr>
      <tr>
        <td class="text-center text-body-2">Care+</td>
        <td class="text-center text-body-2">675</td>
        <td class="text-center text-body-2">775</td>
        <td class="text-center text-body-2">875</td>
        <td class="text-center text-body-2">980</td>
      </tr>

      <tr class="bg-grey-darken-3">
        <td class="text-center font-weight-bold text-body-2 py-2" colspan="5">
          Zaawansowana ochrona lakieru
        </td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Light <span class="text-caption text-grey-lighten-1 d-block d-sm-inline">(2 warstwy Ceramic Pro TOP COAT)</span></td>
        <td class="text-center text-body-2">1550</td>
        <td class="text-center text-body-2">1650</td>
        <td class="text-center text-body-2">1750</td>
        <td class="text-center text-body-2">1850</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Medium <span class="text-caption text-grey-lighten-1 d-block d-sm-inline">(2 warstwy Ceramic Pro 9h + 1 Warstwa Ceramic Pro TOP COAT)</span></td>
        <td class="text-center text-body-2">2200</td>
        <td class="text-center text-body-2">2300</td>
        <td class="text-center text-body-2">2400</td>
        <td class="text-center text-body-2">2500</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Titanium <span class="text-caption text-grey-lighten-1 d-block d-sm-inline">(4 Warstwy Ceramic Pro 9h + 1 Warstwa Ceramic Pro TOP COAT)</span></td>
        <td class="text-center text-body-2">2890</td>
        <td class="text-center text-body-2">3090</td>
        <td class="text-center text-body-2">3290</td>
        <td class="text-center text-body-2">3590</td>
      </tr>

      <tr class="bg-grey-darken-3">
        <td class="text-center font-weight-bold text-body-2 py-2" colspan="5">
          Konserwacja/Dodatkowa Warstwa
        </td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Konserwacja Powłoki</td>
        <td class="text-center text-body-2">690</td>
        <td class="text-center text-body-2">790</td>
        <td class="text-center text-body-2">890</td>
        <td class="text-center text-body-2">990</td>
      </tr>

      <tr class="bg-grey-darken-3">
        <td class="text-center font-weight-bold text-body-2 py-2" colspan="5">
          Zabezpieczenie Wnętrza
        </td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Impregnacja Tapicerki Materiałowej Ceramic Pro TEXTILE</td>
        <td class="text-center text-body-2">375</td>
        <td class="text-center text-body-2">425</td>
        <td class="text-center text-body-2">475</td>
        <td class="text-center text-body-2">525</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Konserwacja Tapicerki Skórzanej Ceramic Pro Leather</td>
        <td class="text-center text-body-2">375</td>
        <td class="text-center text-body-2">425</td>
        <td class="text-center text-body-2">475</td>
        <td class="text-center text-body-2">525</td>
      </tr>

      <tr class="bg-grey-darken-3">
        <td class="text-center font-weight-bold text-body-2 py-2" colspan="5">
          Usługi Dodatkowe
        </td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Impregnacja Dachu Cabrio Ceramic Pro TEXTILE</td>
        <td class="text-center text-body-2" colspan="4">550</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Hydrofobizacja Szyb Ceramic Pro GLASS</td>
        <td class="text-center text-body-2">300</td>
        <td class="text-center text-body-2">350</td>
        <td class="text-center text-body-2">400</td>
        <td class="text-center text-body-2">450</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Zabezpieczenie Felg Light</td>
        <td class="text-center text-body-2" colspan="4">550</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Zabezpieczenie Felg Titanium</td>
        <td class="text-center text-body-2" colspan="4">750</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Zabezpieczenie elementów z tworzyw sztucznych Ceramic PRO PLASTIC</td>
        <td class="text-center text-body-2">200</td>
        <td class="text-center text-body-2">250</td>
        <td class="text-center text-body-2">300</td>
        <td class="text-center text-body-2">350</td>
      </tr>

      <tr class="bg-grey-darken-3">
        <td class="text-center font-weight-bold text-body-2 py-2" colspan="5">
          Pakiety
        </td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Light <span class="text-caption text-grey-lighten-1 d-block d-sm-inline">(Zabezpieczenie lakieru w opcji LIGHT + felgi + wnętrze + ww/usługi dodatkowe)</span></td>
        <td class="text-center text-body-2">2975/2450</td>
        <td class="text-center text-body-2">3225/2750</td>
        <td class="text-center text-body-2">3475/2950</td>
        <td class="text-center text-body-2">3725/3200</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Medium <span class="text-caption text-grey-lighten-1 d-block d-sm-inline">(Zabezpieczenie lakieru w opcji MEDIUM + felgi + wnętrze + ww/usługi dodatkowe)</span></td>
        <td class="text-center text-body-2">3825/2950</td>
        <td class="text-center text-body-2">4075/3350</td>
        <td class="text-center text-body-2">4325/3750</td>
        <td class="text-center text-body-2">4575/4150</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Titanium <span class="text-caption text-grey-lighten-1 d-block d-sm-inline">(Zabezpieczenie lakieru w opcji TITANIUM + felgi + wnętrze + ww/usługi dodatkowe)</span></td>
        <td class="text-center text-body-2">4515/3650</td>
        <td class="text-center text-body-2">4865/4050</td>
        <td class="text-center text-body-2">5215/4450</td>
        <td class="text-center text-body-2">5665/4850</td>
      </tr>

      <tr class="bg-grey-darken-3">
        <td class="text-center font-weight-bold text-body-2 py-2" colspan="5">
          Pozostałe Usługi
        </td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Zabezpieczenie Folią PPF</td>
        <td class="text-center text-body-2" colspan="4">Wycena Indywidualna</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Zabezpieczenie Łodzi</td>
        <td class="text-center text-body-2" colspan="4">Wycena Indywidualna</td>
      </tr>
      <tr>
        <td class="text-center font-weight-medium text-body-2">Zabezpieczenie Samolotów/Helikopterów</td>
        <td class="text-center text-body-2" colspan="4">Wycena Indywidualna</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
</script>

<style scoped>
td, th {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 8px !important;
}
td:last-child, th:last-child {
  border-right: none;
}
tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
