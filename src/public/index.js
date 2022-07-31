const requireComponent = require.context('./', true, /\.vue$/)
//定义全局install方法
const install = Vue => {
    if (install.installed) return;
    install.installed = true;
    // 遍历并注册全局组件
    requireComponent.keys().map(filename => {
        const module = requireComponent(filename);
        Vue.component(module.default.name, module.default)
    })
}
window && window.Vue&&install(window.Vue)
export default install;