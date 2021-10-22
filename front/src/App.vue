<template>
  <div id="app">
    <Header/>
    <transition
        name="fade"
        mode="out-in"
      >
      <router-view/>
    </transition>
    <div class="black-part" @mouseenter="toggleMarquee">
      <div class="text">
        <div class="marquee" :class="!move ? 'pause' : 'play'">
          <span>
            whsjvbsljfisdurgvbalstcjdfyalfyevmdhcjakiedsbnmfjsgfhaskdhvbclakshfytuierjsdhvnxosdjuhcskghfyegdsjfhdt
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  },
  data(){
    return{
      move: false
    }
  },
  methods:{
    toggleMarquee(){
      this.move = !this.move;
      console.log(this.move);
    }
  }
}
</script>

<style>
@font-face {
  font-family: test;
  src: url('./assets/fonts/KrikikrakDingbats-Regular.ttf');
}

body{
  background: #D7C49EFF;
  overflow: hidden;
}
.black-part{
  width: 110%;
  height: 100%;
  background-color: black;
  transform: rotate(2deg);
  position: fixed;
  top: 90%;
  left: -20px;
}
.text{
  font-family: test;
  font-size: 40px;
  position: absolute;
  top: -49px;
  color: black;
}
.marquee {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.black-part:hover .marquee{
  animation: marquee 70s linear infinite;
}
.pause{
  -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
    animation-play-state: paused;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: .1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

/* .text{

} */
/* #app{
  display: flex;
  justify-content: center;
  align-items: center;
} */
/* .box{
  background: #343148FF;
  width: 80%;
  height: 800px;
  border-radius: 10px;
   margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
} */
</style>
