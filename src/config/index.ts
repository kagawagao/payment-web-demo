/**
 * 是否为微信
 * @export
 * @constant
 */
export const isWechat = /MicroMessenger/gim.test(navigator.userAgent);

/**
 * 是否为支付宝
 * @export
 * @constant
 */
export const isAlipay = /AlipayDefined/gim.test(navigator.userAgent);

/**
 * 微信 App Id
 */
export const WeChatAppId = "wx33bbdc826b2a9a83";

/**
 * 支付宝 App Id
 */
export const AlipayAppId = "2021001161667246";
