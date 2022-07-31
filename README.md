# hidden

## Project setup
```
npm install block-hidden
```

### main.js
```
import blockHidden from 'block-hidden'
```

### 示例
```
 <blockHidden :options="options">
  <template v-slot:body>
    <span class="item">糖尿病</span>
    <span class="item">关节炎</span>
    <span class="item">腰间盘突出</span>
    <span class="item">脑血酸</span>
    <span class="item">颈椎痛</span>
    <span class="item">神智不清</span>
  </template>
</blockHidden>
```

### options
```
options: {
    maxWidth: '410',  // 最大宽度，超出则...
    margin: 10 // 每个元素的margin
}
```
### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
