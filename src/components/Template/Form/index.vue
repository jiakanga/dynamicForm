<template>
  <div class="FormIndex">
    {{ formData }}
    <el-form
      ref="KForm"
      :model="formData"
      :label-position="config.labelPosition || 'top'"
      :label-width="config.labelWidth || ''"
      :inline="config.inline"
      :rules="rules"
    >
      <template v-for="(item, index) in formContent">
        <template v-if="item.type === 'input'">
          <KfInput
            :key="index"
            :ref="item.key || 'KInput' + index"
            :param="item"
            :data.sync="formData[item.key]"
          />
        </template>
      </template>
      <el-form-item>
        <el-button v-if="buttons.submit" type="primary" @click="submitForm()">
          立即创建
        </el-button>
        <el-button v-if="buttons.reset" @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import KfInput from "@/components/Template/Form/KfInput.vue";

@Component({
  components: {
    KfInput
  }
})
export default class TplForm extends Vue {
  name = "FormIndex";

  @Prop() private data!: any;
  private get formContent() {
    return this.data.content;
  }

  @Watch("formData")
  private onValueChange(value: string) {
    console.log("formData: ", value);
  }

  created() {
    this.filterModuleData();
    this.filterModuleConfig();
    this.filterModuleRules();
    this.filterModuleButton();
  }

  // 数据处理
  formData: any = {};
  private async filterModuleData() {
    const formData: any = {};
    await this.data.content.map((item: any, index: number) => {
      if (item.key && !this.formData[item.key]) {
        formData[item.key] = item.value;
        console.log("item.value: ", item.value);
        console.log("formData: ", formData);
      } else if (formData[item.key]) {
        console.error("发现重复的Key：", index + 1);
      } else {
        console.error("无Key值，请检查后重试：", index + 1);
      }
    });
    this.formData = formData;
    console.log("formData2: ", formData);
  }

  // 配置处理
  config: object = {
    labelPosition: "top",
    labelWidth: "120px",
    inline: false,
    rules: {},
    content: []
  };
  private async filterModuleConfig() {
    const config = this.data.config;
    if (!config) {
      return;
    }
    const configDefault: any = this.config;
    for (const key in config) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        const element = config[key];
        configDefault[key] = element;
      }
    }
    this.config = configDefault;
    console.log("configDefault: ", configDefault);
  }

  // 检验规则处理
  rules: any = {};
  filterModuleRules() {
    this.rules = this.data.rules || {};
  }
  // 按钮处理
  buttons: any = {};
  filterModuleButton() {
    this.buttons = this.data.buttons || {};
  }
  // 提交
  private submitForm() {
    (this.$refs["KForm"] as any).validate((valid: any) => {
      if (valid) {
        console.log("this.formData", this.rules);
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }
  // 重置
  private resetForm() {
    (this.$refs["KForm"] as any).resetFields();
    console.log('this.$refs["KForm"]: ', this.$refs["KForm"]);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
