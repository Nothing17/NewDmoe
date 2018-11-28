<template>
  <ul class="charcter-index">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "charcterIndex",
  props: ["cities"],
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText);
       this.$emit('change', e.target.innerText)
      
    }
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  }
};
</script>

<style lang="less" scoped>
.charcter-index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 2.415459rem;
  right: .700483rem;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: #000;
    font-size: .362319rem;
    margin: .120773rem 0;
    
  }
}
</style>
