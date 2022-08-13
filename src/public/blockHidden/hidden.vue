<template>
  <div ref="blockHidden" class="block-hidden">
    <slot name="body"></slot>
  </div>
</template>

<script>
export default {
  name: "blockHidden",
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          maxWidth: 0,
          margin: 0
        }
      }
    }
  },
  activated() {
    this.initCalculation()
  },
  mounted() {
    this.initCalculation()
  },
  methods: {
    initCalculation() {
      let itemNodes = Array.from(this.$refs.blockHidden.childNodes)
      let Nodes = this.$refs.blockHidden.childNodes
      let lastNode = document.createElement('span')
      lastNode.classList.add('append')
      lastNode.style.alignSelf = 'end'
      lastNode.innerHTML = '...'
      let jsWidth = 0
      let count = 0
      let allcount = this.$refs.blockHidden.childNodes.length
      itemNodes.forEach(item => {
        if(jsWidth + item.offsetWidth > this.options.maxWidth) return
        jsWidth += item.offsetWidth + this.options.margin
        count++
      })
      itemNodes.splice(count)
      for (let i = Nodes.length - 1; i >= 0; i --) {
        this.$refs.blockHidden.removeChild(Nodes[i])
      }
      itemNodes.forEach(node => {
        this.$refs.blockHidden.appendChild(node)
      })
      if(allcount > count) {
        this.$refs.blockHidden.appendChild(lastNode)
      }
    }
  }
}
</script>

<style scoped>
.block-hidden {
  flex-wrap: nowrap;
  display: flex;
}
.append {
  align-self: end;
}
</style>