import ext from "./utils/ext";
import storage from "./utils/storage";

ext.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "push-code") {
      code = request.data;
      console.log(request.data);
    }
  }
);

