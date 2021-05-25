<template>
  <div class="main">
    <div class="code-icon">
      <div class="left" />
      <div class="middle" />
      <div class="right" />
    </div>
    <img src="../assets/icons/hello.svg" alt="Hello" class="hello-svg" />
    <div class="left-content">
      <p><span class="hello">Hello</span>, I'm</p>
      <h1>
        Albert
        <div />
        Valdes
      </h1>
      <p class="title">Frontend Web Developer</p>
      <p><span>This is my portfolio</span>.</p>
    </div>
    <div class="contact-button button">
      <div>Contact Me</div>
      <div>Dev for hire!</div>
    </div>
    <div class="right-content">
      <a>Projects</a>
      <a>About Me</a>
      <a>Resume</a>
      <a href="https://24g.com/" target="_blank">24G</a>
      <a href="https://github.com/albert-anthony6" target="_blank">Github</a>
      <a href="https://www.linkedin.com/in/avaldes21/" target="_blank">LinkedIn</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: left;
  @include tab {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left-content {
    margin-left: 5.5%;
    @include xl {
      margin-top: -85px;
      margin-left: 3%;
    }
    @include mdh {
      text-align: center;
      position: absolute;
      top: 47%;
      left: 47%;
      transform: translate(-50%, -50%);
      width: 500px;
    }
    @include tab {
      position: static;
      margin: 150px 0 0 500px;
    }
    span {
      color: red;
      font-family: $pattaya;
      font-size: 2.5rem;
    }
    p,
    .hello {
      font-size: 3.2rem;
    }
    .title {
      @include sm {
        font-size: 2rem;
      }
    }
    h1 {
      font-size: 5.2rem;
      margin-top: -20px;
      margin-bottom: -20px;
      @include sm {
        font-size: 4rem;
        margin-bottom: -15px;
      }
      @include xs {
        font-size: 5rem;
      }
      div {
        display: none;
        @include xs {
          display: block;
          line-height: 0.2px;
          margin: -25px;
        }
      }
    }
  }
  .right-content {
    display: grid;
    margin: 15% 7.5% 0 0;
    grid-gap: 10px;
    grid-template-rows: 100px 100px;
    grid-template-columns: 100px 100px 100px;
    text-align: center;
    @include xl {
      margin-right: 4%;
    }
    @include lg {
      grid-template-rows: 100px 100px 100px;
      grid-template-columns: 100px 100px;
    }
    @include mdh {
      position: absolute;
      bottom: 5%;
      right: 0%;
      grid-template-rows: 100px 100px;
      grid-template-columns: 100px 100px 100px;
    }
    @include tab {
      position: static;
      margin: 20px 0 80px 0;
      width: auto;
    }
    @include sm {
      margin: 0 0 60px 0;
      grid-gap: 7px;
      grid-template-rows: 100px 100px 100px;
      grid-template-columns: 100px 100px;
    }
    a {
      font-family: $pattaya;
      font-size: 2rem;
      letter-spacing: 1.5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(to right bottom, #9599e2 0%, rgb(247, 99, 99) 100%);
      border: 2px solid rgb(233, 233, 233);
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        border-radius: 20%;
        transform: translateY(-10px);
        box-shadow: 0 5px 12px #635569;
      }
    }
  }
  .hello-svg {
    width: 38vh;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    @include mdh {
      width: 35vh;
      left: 4%;
      transform: translateX(0);
    }
    @include tab {
      display: none;
    }
  }
  .contact-button {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 55px;
    overflow: hidden;
    margin: 0 auto;
    text-align: center;
    &:hover div {
      transform: translateY(-140%);
    }
    @include tab {
      position: static;
      margin: 0 0 0 200px;
    }
    div {
      transition: all 0.2s ease;
      margin-bottom: 10px;
    }
  }
}
</style>
