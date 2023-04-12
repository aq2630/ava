const ARABIC_CHAT_ID = '61a5d1c264cdf10ca67186a6_app_100352963'
const ENGLISH_CHAT_ID = '5f60b7e7cf9e5f6d1bfcb14e_app_100171608'
// the embed code is harcoded and we need to place it as it is, suggested by Sprinklr Team
const SPRINKLR_FUNCTION = `(function(){var t=window,e=t.sprChat,a=e&&!!e.loaded,n=document,r=function(){r.m(arguments)};r.q=[],r.m=function(t){r.q.push(t)},t.sprChat=a?e:r;var o=function(){var e=n.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://prod2-live-chat.sprinklr.com/api/livechat/handshake/widget/"+t.sprChatSettings.appId,e.onerror=function(){t.sprChat.loaded=!1},e.onload=function(){t.sprChat.loaded=!0};var a=n.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)};"function"==typeof e?a?e("update",t.sprChatSettings):o():"loading"!==n.readyState?o():n.addEventListener("DOMContentLoaded",o)})()`

const getSprinklrChatId = (chatPluginId) => {
  return `window.sprChatSettings = window.sprChatSettings || {}; window.sprChatSettings = { appId: "${chatPluginId}", };`
}

module.exports = {
  ARABIC_CHAT_ID,
  ENGLISH_CHAT_ID,
  SPRINKLR_FUNCTION,
  getSprinklrChatId,
}
