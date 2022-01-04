<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ userOne.name }} - {{ userOne.age }}</p>
    <button @click="updateUserOne">Update User One</button>
    <h2>Reactive</h2>
    <p>{{ userTwo.name }} - {{ userTwo.age }}</p>
    <button @click="updateUserTwo">Update User Two</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Home",
  setup() {
    // When surrounding values with refs you make them reactive
    const userOne = ref({ name: "Hekla", age: 21 });
    // UserTwo is using reactive instead of using refs
    const userTwo = reactive({ name: "Emma", age: 34 });

    const updateUserOne = () => {
      userOne.value.age = 25;
    };
    const updateUserTwo = () => {
      userTwo.age = 38;
    };
    return { userOne, updateUserOne, userTwo, updateUserTwo };
  },
  data() {
    return {
      score: 5,
    };
  },
};
</script>
