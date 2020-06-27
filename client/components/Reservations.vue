<template>
  <div class="Reservations">
    <div class="Reservations__search">
      <h1>Find your reservation</h1>
      <p>You can search by providing the city or the confirmation code of your reservation.</p>
      <div class="Reservations__search-container">
        <input
          v-model="keywords"
          v-on:keyup.enter="fetchReservations"
          type="search"
          placeholder="Search by keywords"
        >
        <div v-if="reservations && reservations.length" class="Reservations__search-results">
          <nuxt-link
            v-for="reservation of reservations"
            :key="reservation.confirmationCode"
            :to="`/${reservation.confirmationCode}`"
          >
            <div class="__location">
              {{ reservation.city }}
            </div>
            <div class="__details">
              <span>{{ $moment(reservation.checkInDate).format('MMMM D YYYY') }} - </span>
              <span>{{ $moment(reservation.checkOutDate).format('MMMM D YYYY') }},</span>
              <span>#{{ reservation.confirmationCode }}</span>
            </div>
          </nuxt-link>
        </div>
        <div v-if="noResults" class="Reservations__search-results --empty">
          <div>Your search did not match any reservations.</div>
        </div>
        <button @click="fetchReservations">
          Search
        </button>
      </div>
    </div>
    <img src="~/assets/kasa-room.jpg">
  </div>
</template>

<script>
export default {
  data () {
    return {
      reservations: [],
      keywords: '',
      noResults: false
    }
  },
  methods: {
    async fetchReservations () {
      if (this.keywords) {
        try {
          const reservations = await this.$axios.$get(`/search?keywords=${this.keywords}`)
          this.reservations = reservations.data
          this.noResults = this.reservations.length === 0
        } catch {
          this.reservations = []
        }
      }
    }
  },
  fetchOnServer: false
}
</script>

<style>
.Reservations {
  padding: 2rem 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.Reservations__search {
  z-index: 1;
  position: absolute;
  max-width: 24rem;
  background: #FAFAFA;
  color: #2D2D2D;
  left: 4rem;
  padding: 2rem 2.5rem;
  color: #111111;
}

.Reservations__search-container {
  text-align: center;
}

.Reservations__search-results {
  background-color: white;
  width: 95%;
  border-radius: 4px;
  margin: 0 auto 0.4rem;
  text-align: left;
  font-family: Arial;
  font-size: 0.8rem;
}

.Reservations__search-results a {
  text-decoration: none;
  color: #303030;
}

.Reservations__search-results a:not(:first-child) {
  display: block;
  margin-top: 1rem;
}

.__location {
  margin-bottom: 0.3rem;
}

.__details {
  color: #969696;
  font-size: 0.7rem;
}

input, button {
  width: 95%;
  height: 2.5rem;
  border-radius: 4px;
}

input,
.Reservations__search-results {
  padding: 0.65rem;
  border: 1px solid #d3d3d3;
  margin-bottom: 0.4rem;
}

input:focus,
button:focus {
  outline: none;
}

button {
  background-color: #2F2B8D;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.25s ease;
}

button:hover {
  background-color: #3C36B4;
}

h1 {
  font-family: 'Tiempos Headline Semibold';
  margin-bottom: 1rem;
  text-align: center;
}

p {
  font-size: 0.85rem;
  padding: 0 0.25rem;
  margin-bottom: 1rem;
}

img {
  max-width: 85%;
  z-index: 0;
}
</style>
