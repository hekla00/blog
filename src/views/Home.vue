<template>
  <div class="home">Home</div>
  <p>My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click me</button>
</template>

<script>
export default {
  name: "Home",
  components: {},
  setup() {
    let name = "Hekla";
    let age = 21;
    const handleClick = () => {
      console.log("you clicked me");
    };

    return { name, age, handleClick };
  },
};
</script>
