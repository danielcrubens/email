<script setup>
async function sendEmail() {
  const template = await useFetch('/api/send-email', {
    method: 'POST',
  });

  console.log(template);
}
</script>

<template>
  <div>
    <button @click="sendEmail">FOI</button>
  </div>
</template>
