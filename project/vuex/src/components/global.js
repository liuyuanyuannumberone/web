/**
 * Created by lyy on 2019-1-7.
 * 实际工作中，往往组件相互之间的引入。

 // 1.先引人
 import BaseButton from './baseButton'
 // 2.组件注册
 export default {
  components: {
    BaseButton,
  }
}
 // 3.组件使用
 <BaseButton @click="search"></BaseButton>
 我们写了一堆基础UI组件，然后每次我们需要使用这些组件的时候，都得先import，然后声明components，很繁琐！秉持能偷懒就偷懒的原则，我们要想办法优化！
 */
/*注释掉import和components,也可以直接使用子组件，名字就是文件名。其实，做了文件名首字母大写的转换，但是我发现大小写无所谓，打开谷歌浏览器控制台的 vue 插件，两个组件是同名，而且都是首字母大写，这是 vue 的内部实现吧，浅尝辄止了，没有深入了解*/
import Vue from 'vue'

/**
 * 首字母大写
 * @param str 字符串
 * @example heheHaha
 * @return {string} HeheHaha
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 对符合'xx/xx.vue'组件格式的组件取组件名
 * @param str fileName
 * @example abc/bcd/def/basicTable.vue
 * @return {string} BasicTable
 */
function validateFileName(str) {
  return /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
}

const requireComponent = require.context('./', true, /\.vue$/); /*要搜索的文件夹目录，是否还应该搜索它的子目录，以及一个匹配文件的正则表达式。*/
/*//找到components文件夹下以.vue命名的文件*/
// 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名  // 最好不要使用 index.vue 这个名字
requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath);
  const fileName = validateFileName(filePath);
  const componentName = fileName.toLowerCase() === 'index'
    ? capitalizeFirstLetter(componentConfig.default.name)
    : fileName;
  Vue.component(componentName, componentConfig.default || componentConfig)
});
