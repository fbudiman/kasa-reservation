<template>
  <div class="Reservations">
    <div class="Reservations__search">
      <h1>Find your reservation</h1>
      <p>You can search by providing the city or the confirmation code of your reservation.</p>
      <div class="Reservations__search-container">
        <input placeholder="Search by keywords">
        <button>Search</button>
      </div>
    </div>
    <img src="~/assets/kasa-room.jpg">
  </div>
</template>

<script>
export default {}
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
  left: 5rem;
  padding: 2rem 2.5rem;
  color: #111111;
}

.Reservations__search-container {
  text-align: center;
}

input, button {
  width: 95%;
  height: 2.5rem;
  border-radius: 4px;
}

input {
  padding: 0.25rem 0.65rem;
  border: 1px solid #d3d3d3;
  margin-bottom: 0.4rem;
}

input:focus {
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
