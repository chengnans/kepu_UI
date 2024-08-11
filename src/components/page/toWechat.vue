<template>
  <canvas id="QRCode_header" style="width: 280px; height: 280px"></canvas>
</template>

<script>
import QRCode from "qrcode"; // 引入生成二维码插件

export default {
  props: [],
  data() {
    return {
      qrUrl: "", // 用于存储二维码的内容
    };
  },
  mounted() {
    this.getQRCode();
  },
  created() {},
  methods: {
    getQRCode() {
      // 从 localStorage 获取当前页面的 URL
      const shareUrl = localStorage.getItem("shareUrl");

      if (!shareUrl) {
        console.error("URL not found in localStorage");
        this.$message.error("无法找到要分享的 URL");
        return;
      }

      // 设置二维码的选项
      let opts = {
        errorCorrectionLevel: "H", // 容错级别
        type: "image/png", // 生成的二维码类型
        quality: 0.3, // 二维码质量
        margin: 0, // 二维码留白边距
        width: 280, // 宽
        height: 280, // 高
        text: shareUrl, // 二维码内容
        color: {
          dark: "#333333", // 前景色
          light: "#fff", // 背景色
        },
      };

      let msg = document.getElementById("QRCode_header");

      // 将获取到的数据（val）画到msg（canvas）上
      QRCode.toCanvas(msg, shareUrl, opts, function (error) {
        if (error) {
          console.log("二维码加载失败", error);
          this.$message.error("二维码加载失败");
        }
      });
    },
  },
};
</script>
