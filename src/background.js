var requestURL = "google.com";

// listen for tab update
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo,tab) { 
	chrome.tabs.get(tabId, function(thisTab){
		if (((thisTab.url).indexOf(requestURL) != -1) && (thisTab.status == "complete")) {
			// 用 executeScript 方法实际用来判断页面是否请求成功
			// judgge the request result with executeScript
			chrome.tabs.executeScript(tabId,{"code":"console.log('no refresh,access success');"},function(){
				if (chrome.runtime.lastError) {
					console.log(chrome.runtime.lastError);
					chrome.tabs.reload(tabId);
				}
			});
		}
	});
 });