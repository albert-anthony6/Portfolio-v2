<template>
  <section class="main">
    <div class="code-icon">
      <div class="left" />
      <div class="middle" />
      <div class="right" />
    </div>
    <div class="contact-button button">
      <div>Contact Me</div>
      <div>Dev for hire!</div>
    </div>
    <img src="../assets/icons/hello.svg" alt="Hello" class="hello" />
  </section>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style scoped lang="scss">
.main {
  .hello {
    width: 340px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .contact-button {
    width: 200px;
    height: 55px;
    overflow: hidden;
    margin: 0 auto;
    &:hover div {
      transform: translateY(-140%);
    }
    div {
      transition: all 0.2s ease;
      margin-bottom: 10px;
    }
  }
}
</style>
