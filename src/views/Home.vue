<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref([
      "emma",
      "annie",
      "michelle",
      "aaorn",
      "connor",
      "brian",
    ]);

    // to stop the watch and watchEffect function assign them to a variable and invoke them
    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClcik = () => {
      // here you are invoking the stop watch function
      stopWatch(), stopEffect();
    };

    return { names, search, matchingNames, handleClcik };
  },
};
</script>
