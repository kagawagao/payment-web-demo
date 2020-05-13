import { AlipayAppId } from "../config";
import { Toast } from "antd-mobile";

declare global {
  interface Window {
    AlipayJSBridge: any;
  }
}

export default class AliPay {
  private appId: string = AlipayAppId;

  public pay = () => {
    if (window.AlipayJSBridge) {
      window.AlipayJSBridge.call("tradePay", {
        tradeNO: "201802282100100427058809844", // 必传，此使用方式下该字段必传
        bizType: "xxx", // 非必传，默认为 “trade”
        bizSubType: "", // 非必传，默认为 “”
        bizContext: "", // 非必传，默认为H5启动选项(safePayContext)
      });
    } else {
      Toast.info("请在支付宝中打开");
    }
  };

  public openAlipay = () => {
    window.location.href = `alipays://platformapi/startApp?appId=${
      this.appId
    }&url=${encodeURIComponent(window.location.href)}`;
  };
}
