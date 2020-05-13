import React, { useCallback, useRef, useEffect } from "react";
import "./index.css";
import { isWechat, isAlipay } from "../config";
import { Button, List, InputItem } from "antd-mobile";
import WeChat from "../utils/wechat";
import AliPay from "../utils/alipay";

const aliPay = new AliPay();
const wechat = new WeChat();

const App = () => {
  const valueRef = useRef(0);
  const handleInputChange = useCallback((value) => {
    valueRef.current = +value;
  }, []);

  const handleAliPayClick = useCallback(() => {
    aliPay.pay();
  }, []);

  const handleWeChatPayClick = useCallback(() => {
    wechat.pay();
  }, []);

  useEffect(() => {
    if (isAlipay) {
      // TODO: 直接打开小程序
      // aliPay.openAlipay();
    }
  }, []);

  return (
    <div className="App">
      <List>
        <InputItem onChange={handleInputChange} type="money">
          支付金额
        </InputItem>
        {!isWechat ? (
          <List.Item>
            <Button onClick={handleAliPayClick} className="alipay">
              支付宝支付
            </Button>
          </List.Item>
        ) : null}
        {!isAlipay ? (
          <List.Item>
            <Button onClick={handleWeChatPayClick} className="wechat">
              微信支付
            </Button>
          </List.Item>
        ) : null}
      </List>
    </div>
  );
};

export default App;
