<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Update age by 1</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    // When surrounding values with refs you make them reactive
    const name = ref("Hekla");
    const age = ref(21);
    // const p = ref(null)
    const handleClick = (e) => {
      name.value = "luigi";
      age.value = 35;
    };
    return { name, age, handleClick };
  },
  data() {
    return {
      score: 5,
    };
  },
};
</script>
