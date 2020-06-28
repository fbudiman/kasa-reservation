<template>
  <div>
    <Reservation :id="$route.params.id" />
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    // test case to make sure that the param is a valid confirmation code (as per mock - all capital letters/no numbers/6 digits)
    return params.id.length === 6 && /^[A-Z]*$/.test(params.id)
  }
}
</script>
