<template>
  <footer>
    <h3>
      <span>kasa</span><span>Your home on the road</span>
    </h3>
  </footer>
</template>

<style>
footer {
  display: flex;
  padding: 1rem 4rem 5rem;
  background: #F2F2F2;
}

h3 span {
  display: inline-block;
}

h3 span:first-child {
  padding-right: 1rem;
  border-right: 1px solid grey;
}

h3 span:nth-child(2) {
  padding-left: 1rem;
  color: black;
  font-size: 1.15rem;
  font-weight: 500;
  font-family: 'Tiempos Headline Semibold';
}
</style>
