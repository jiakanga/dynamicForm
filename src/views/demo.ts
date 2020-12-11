const data: any = {
  container: {
    type: "form",
    config: {
      labelPosition: "right",
      labelWidth: "80px"
    },
    rules: {
      name: [
        {
          required: true,
          message: "请输入姓名",
          trigger: "blur"
        },
        {
          min: 3,
          max: 5,
          message: "长度在 3 到 5 个字符",
          trigger: "blur"
        }
      ],
      psd: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur"
        },
        {
          min: 3,
          max: 5,
          message: "长度在 6 到 18 个字符",
          trigger: "blur"
        }
      ]
    },
    content: [
      {
        type: "input",
        key: "name",
        value: "default value",
        label: "姓名",
        placeholder: "请输入姓名",
        displayfield: "name"
      },
      {
        type: "input",
        key: "psd",
        value: "default value",
        label: "密码",
        placeholder: "请输入密码",
        displayfield: "name"
      }
    ],
    buttons: {
      submit: {
        width: "80px",
        height: "4px"
      },
      reset: {}
    }
  }
};
export default data;
