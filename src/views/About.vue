<template>
  <div class="about">
    <TemplateIndex :data="formatData" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TemplateIndex from "@/components/Template/index.vue"; // @ is an alias to /src
// import formatJson from "./demo.json"; // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import data from "@/views/demo.ts";

@Component({
  components: {
    TemplateIndex
  }
})
export default class About extends Vue {
  formatJson = JSON.stringify(data);
  formatJson2 = `{
  "container": {
    "type": "form",
    "config": {
      "labelPosition": "right",
      "labelWidth": "80px"
    },
    "content": [
                 {
                   "type": "input",
                   "key": "name",
                   "value": "default value",
                   "label": "姓名",
                   "placeholder": "请输入姓名",
                   "displayfield": "name"
                 },
                 {
                   "type": "input",
                   "key": "psd",
                   "value": "default value",
                   "label": "密码",
                   "placeholder": "请输入密码",
                   "displayfield": "name"
                 }
               ]
  }
}


  `;
  private get formatData() {
    return JSON.parse(this.formatJson);
  }
}
</script>
