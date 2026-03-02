<template>
  <v-footer class="footer" color="red-background">
    <v-container class="py-6 d-flex flex-column flex-md-row align-center justify-space-between">

      <div class="text-center">
        <div class="text-h6 font-weight-bold">Gawrych Serwis & Detailing</div>
        <div class="text-body-2 my-2">Od 1990 roku</div>
        <div class="mt-2 d-flex ga-2 justify-center">
          <v-btn
            aria-label="Facebook"
            href="https://www.facebook.com/GawrychSerwis?locale=pl_PL"
            icon="mdi-facebook"
            size="small"
            target="_blank"
            variant="text"
          />
          <v-btn
            aria-label="Instagram"
            href="https://www.instagram.com/gawrych_serwis_detailing"
            icon="mdi-instagram"
            size="small"
            target="_blank"
            variant="text"
          />
        </div>
      </div>

      <div class="text-center mt-md-0 d-flex flex-column">
        <router-link class="footer-link my-1 text-body-2 font-weight-medium text-uppercase text-decoration-none" to="/service">
          Serwis
        </router-link>

        <router-link class="footer-link my-1 text-body-2 font-weight-medium text-uppercase text-decoration-none" to="/performance">
          Performance
        </router-link>

        <router-link class="footer-link my-1 text-body-2 font-weight-medium text-uppercase text-decoration-none" to="/detaling">
          Powłoki Ceramiczne & Folie PPF
        </router-link>
      </div>

      <div class="text-body-2 mt-4 mt-md-0 text-center">
        <div class="mb-1">
          <a class="footer-link text-decoration-none" href="tel:+48730995828">+48 730 995 828</a>
          |
          <a class="footer-link text-decoration-none" href="tel:+48796073929">+48 796 073 929</a>
        </div>
        <div class="mb-1">lukisgaw@gmail.com</div>
        <div>Pon-Pt 08:00-16:00</div>
      </div>

    </v-container>
  </v-footer>
</template>

<style scoped>
  .footer {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  /* Klasa odpowiadająca za wygląd linków i efekt najechania myszką */
  .footer-link {
    color: inherit; /* Dziedziczy biały kolor tekstu ze stopki */
    transition: opacity 0.2s ease-in-out;
  }

  .footer-link:hover {
    opacity: 0.6; /* Lekko przygasa po najechaniu myszką */
  }
</style>
