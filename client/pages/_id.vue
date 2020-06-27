<template>
  <div>
    <Reservation :id="$route.params.id" />
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return params.id.length === 6 && /^[A-Z]*$/.test(params.id)
  }
}
</script>
