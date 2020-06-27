<template>
  <header>
    <h3>kasa</h3>
    <nav class="navigation">
      <ul>
        <li><nuxt-link to="/">Your Reservations</nuxt-link></li>
        <li>FAQ</li>
        <li>Contact</li>
        <li>Guest Portal</li>
      </ul>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
}

h3 {
  color: #2F2B8D;
}

ul {
  display: flex;
  list-style-type: none;
}

li {
  margin-right: 1rem;
  padding-bottom: 2px;
  cursor: pointer;
  color: #303030;
  transition: border 0.3s ease;
  border-bottom: 2px solid white;
}

li:hover {
  border-color: #303030;
}

a {
  text-decoration: none;
  color: #303030;
}
</style>
