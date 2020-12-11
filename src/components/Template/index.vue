<template>
  <div class="FormIndex">
    <!-- 确认拿到模块参数的情况 -->
    <template v-if="MODULE_PARAM">
      <!-- 根据Type 对应不同的模块 -->
      <FormIndex v-if="MODULE_PARAM.type === 'form'" :data="MODULE_PARAM" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import FormIndex from "@/components/Template/Form/index.vue";

@Component({
  components: {
    FormIndex
  }
})
export default class TplForm extends Vue {
  @Prop() private data!: object;
  // formatData 必定是一个对象 其中必定有 container 属性，用于定义一个容器
  // 模板数据 以container的值为准】
  private get MODULE_PARAM() {
    const DATA = this.data;
    const MODULE_PARAM = (DATA as any).container || "";
    if (!MODULE_PARAM) {
      console.error("模块定义错误，请检查后重新渲染/模块。值：", this.data);
    }
    return MODULE_PARAM;
  }
  // created() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
