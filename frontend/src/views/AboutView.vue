<template>
  <div class="about">
    <h1 class="title">Health Tips</h1>
    <p><strong>Fruits and Vegetables:</strong> At least 5 portions a day.</p>
    <p><strong>Starchy Foods:</strong> Base meals on higher fibre options like potatoes, bread, rice, and pasta.</p>
    <p><strong>Dairy or Alternatives:</strong> Include some dairy or dairy alternatives (e.g., soya drinks).</p>
    <p><strong>Proteins:</strong> Eat beans, pulses, fish, eggs, meat, and other proteins.</p>
    <p><strong>Oils and Spreads:</strong> Use unsaturated oils and spreads in small amounts.</P>
    <p><strong>Fluids:</strong> Drink 6-8 glasses of fluids daily.</p>
    <p class="info"> - Data from NHS website - </p>
  </div>
</template>

<style scoped>
  .about{
    background-color: #E1F0DA;
    height: 100%;
    text-align: center;
  }
  .title{
    margin: 0;
    padding-top:2rem;
    font-size: 30px;
  }
  .about p{
    padding: 1rem;
  }
  .info{
    font-size: 16px;
    padding-left: 5rem;
  }
</style>

<script>
export default {
  name: 'AboutView',
}
</script>