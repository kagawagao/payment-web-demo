import { WeChatAppId } from "../config";
import { Toast } from "antd-mobile";

declare global {
  interface Window {
    WeixinJSBridge: any;
  }
}

export default class WeChat {
  private appId: string = WeChatAppId;

  public pay = () => {
    if (window.WeixinJSBridge) {
      window.WeixinJSBridge.invoke("getBrandWCPayRequest", {
        appId: this.appId, //公众号名称，由商户传入
        timeStamp: `${Date.now() / 1000}`, //时间戳，自1970年以来的秒数
        nonceStr: "e61463f8efa94090b1f366cccfbbb444", //随机串
        package: "prepay_id=u802345jgfjsdfgsdg888",
        signType: "MD5", //微信签名方式：
        paySign: "70EA570631E4BB79628FBCA90534C63FF7FADD89", //微信签名
      });
    } else {
      Toast.info("请在微信中打开");
      window.location.href = `weixin://platformapi/startApp?appId=${
        this.appId
      }&url=${encodeURIComponent(window.location.href)}`;
    }
  };

  public openWeChat = () => {
    window.location.href = `weixin://`;
  };
}
