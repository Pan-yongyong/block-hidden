<template>
  <div class="hello">
    <blockHidden :options="options">
      <template v-slot:body>
        <span class="item">糖尿病</span>
        <span class="item">脑血酸</span>
        <span class="item">脑血酸</span>
        <span class="item">关节炎</span>
        <span class="item">腰间盘突出</span>
        <span class="item">颈椎痛</span>
        <span class="item">神智不清</span>
      </template>
    </blockHidden>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      options: {
        maxWidth: '310',
        margin: 10
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello .item {
  display: inline-block;
  padding: 5px 10px;
  background: beige;
  margin-right: 10px;
}
</style>
