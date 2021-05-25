<template>
  <div ref="navigation" class="navigation">
    <input @click="toggleShrink" type="checkbox" id="active" />
    <div class="wrapper">
      <label for="active" class="menu-button">
        <span class="burger-icon" />
      </label>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Resume</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    toggleShrink(event) {
      if (event.target.checked) {
        this.$refs.navigation.classList.remove('shrink');
        this.$refs.navigation.classList.add('unshrink');
      } else {
        this.$refs.navigation.classList.remove('unshrink');
        this.$refs.navigation.classList.add('shrink');
      }
    },
  },
};
</script>

<style scoped lang="scss">
.navigation {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  clip-path: circle(100px at calc(100% - 86px) 74px);
  #active {
    display: none;
  }
  #active:checked ~ .wrapper {
    clip-path: circle(75%);
    background-image: linear-gradient(to bottom right, $bg-linear-3, $bg-linear-4);
  }
  #active:not(:checked) ~ .wrapper .menu {
    opacity: 0;
  }
  #active:checked ~ .wrapper .menu-button {
    background-color: $secondary;
    .burger-icon {
      background-color: transparent;
      &::before,
      &::after {
        top: 0;
        width: 100%;
        background-color: red;
      }
      &::before {
        transform: rotate(40deg);
      }
      &::after {
        transform: rotate(-40deg);
      }
    }
  }
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    clip-path: circle(100px at calc(100% - 86px) 74px);
    transition: all 0.3s ease-in;
    z-index: 999;
    .menu-button {
      position: absolute;
      top: 5%;
      right: 3%;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background-color: $bg-linear-3;
      cursor: pointer;
      &:hover {
        .burger-icon {
          &::before,
          &::after {
            width: 50%;
          }
        }
      }
      .burger-icon {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 55%;
        height: 3px;
        margin-left: 0.5px;
        border-radius: 7px;
        background-color: $primary;
        transition: all 0.2s ease-in-out;
        &::before,
        &::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          background-color: inherit;
          border-radius: 7px;
          transition: all 0.2s ease-in-out;
        }
        &::before {
          top: -8px;
          left: 0;
        }
        &::after {
          top: 8px;
          right: 0;
        }
      }
    }
    .menu {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      li {
        margin-bottom: 15px;
      }
      a {
        font-size: 4.2rem;
        font-weight: 500;
        color: $secondary;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;
        &:hover {
          border-bottom: 2px solid $primary;
        }
      }
    }
  }
}
.shrink {
  clip-path: circle(100px at calc(100% - 86px) 74px);
}
.unshrink {
  clip-path: none;
}
</style>
