<template>
  <div class="Reservation">
    <p v-if="$fetchState.pending" class="Reservation__details --pending">
      Fetching reservation #{{ $route.params.id }}...
    </p>
    <p v-else-if="$fetchState.error" class="Reservation__details --error">
      Error while fetching reservation #{{ $route.params.id }}.
    </p>
    <div v-else class="Reservation__details">
      <h2>Your reservation in {{ reservation.city }}</h2>
      <div class="__details-container">
        <div class="__features">
          <img :src="reservation.cityImage">
          <div class="__rating">
            <p>Rate your experience!</p>
            <p class="__emoji">😢&nbsp;&nbsp;😞&nbsp;&nbsp;😐&nbsp;&nbsp;🙂&nbsp;&nbsp;😊</p>
          </div>
        </div>
        <div class="__details">
          <div class="__detail">
            <h5>Location</h5>
            <p>{{ reservation.location.address }}</p>
            <p>{{ reservation.location.unit }}</p>
          </div>
          <div class="__detail">
            <h5>Dates</h5>
            <p>
              <span>{{ $moment(reservation.checkInDate).format('MMMM D YYYY') }} -</span>
              <span>{{ $moment(reservation.checkOutDate).format('MMMM D YYYY') }}</span>
              <span>({{ $moment(reservation.checkOutDate).diff($moment(reservation.checkInDate), 'days') }} nights)</span>
            </p>
          </div>
          <div class="__detail">
            <h5>Confirmation Code</h5>
            <p>#{{ reservation.confirmationCode }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch () {
    const reservation = await this.$axios.$get(`/reservation/${this.$route.params.id}`)
    this.reservation = reservation.data
  },
  data () {
    return {
      reservation: {}
    }
  },
  fetchOnServer: false
}
</script>

<style scoped>
.Reservation {
  display: flex;
  padding: 1rem 4rem;
}

.Reservation__details,
.Reservation__details {
  padding: 3rem 0;
}

.Reservation__details.--error,
.Reservation__details.--pending,
.Reservation__details h2 {
  font-family: Georgia;
  margin-bottom: 2rem;
}

.__details-container {
  display: flex;
}

.__details-container .__details {
  font-family: Helvetica, sans-serif;
  padding-left: 1.5rem;
}

.__details .__detail {
  margin-bottom: 1rem;
}

.__detail h5 {
  margin-bottom: 0.2rem;
}

.__detail p {
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.2rem;
}

.__features img {
  width: 24rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.__features .__rating {
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  font-family: Georgia;
  padding: 1rem;
}

.__emoji {
  font-size: 1.5rem;
  padding-top: 0.5rem;
  cursor: pointer;
}
</style>
