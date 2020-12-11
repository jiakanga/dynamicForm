<template>
  <div class="KfInput">
    <el-form-item :label="param.label" :prop="param.key">
      <el-input
        v-model="inputValue"
        :placeholder="param.placeholder"
      ></el-input>
    </el-form-item>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class KfInput extends Vue {
  name = "KfInput";
  @Prop() private param!: object;
  @Prop() private data!: any;

  inputValue: any = "";

  @Watch("data")
  private onDataChange(val: any) {
    this.inputValue = val;
  }
  @Watch("inputValue")
  private onValueChange(inputValue: string) {
    this.$emit("update:data", inputValue);
  }

  // public set value(val): string {
  //   console.log("val: ", val);
  //   return this.$emit("data", val);
  // }
  private config = {
    placeholder: ""
  };
  mounted(): void {
    this.$nextTick(() => {
      // this.value = (this.param as any).value;
      // this.value = this.data;
    });
    console.log("this.KfInput param", this.param);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
