<template>
  <div class="shareBox">
    <span class="zi">分享到：</span>
    <span class="hover-pointer" @click="shareToWeChat()">
      <img src="../assets/images/weixin.png" alt="" class="sharefont"/>
    </span>
    <span class="qqIcon hover-pointer" @click="shareToQQRom()">
      <img src="../assets/images/qq.png" alt="" class="sharefont"/>
    </span>
    <span class="hover-pointer" @click="shareToMicroblog()">
      <img src="../assets/images/weiboi.png" alt="" class="sharefont"/>
    </span>
  </div>
</template>

<script>
export default {
  props: ["sysInfo"],  //父组件传过来的文章数据
  data() {
    return {
      shareUrl: location.href,
      showQRCode: false, // 控制模态框的显示/隐藏
    };
  },
  methods: {
    /**
     * 分享到微博
     */
    shareToMicroblog() {
      //跳转地址
      window.open(
        "https://service.weibo.com/share/share.php?url=" +
        encodeURIComponent(this.shareUrl) +
        "&title=" +
        this.sysInfo.title
      );
    },
    /**
     * 分享到qq空间
     */
    shareToQQRom() {
      //跳转地址
      window.open(
        "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" +
        encodeURIComponent(this.shareUrl) +
        "&title=" +
        this.sysInfo.title
      );
    },
    /**
     * 分享到微信：需要单独画页面
     */
    shareToWeChat() {
      localStorage.setItem("shareUrl", this.shareUrl); // 存储当前页面地址，前端页面直接根据URL链接生成二维码
      // let url = location.href.split("#")[0] + "/toWechat"; // 注意：#/Share/toWechat: 自己定义的路由
      // let url = location.href + "/toWechat"; // 注意：#/Share/toWechat: 自己定义的路由
      // window.open(url);
      this.$router.push('/toWechat');
    },
  },
};
</script>

<style lang="scss" scoped>
.shareBox {
  text-align: right;

  .iconfont {
    font-size: 22px !important;
  }

  .qqIcon {
    display: inline-block;
    margin: 0 10px;
  }

  .sharefont {
    width: 40px;
  }
}
</style>
