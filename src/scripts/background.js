import ext from "./utils/ext";
import { DH_CHECK_P_NOT_PRIME } from "constants";

var code = ""
ext.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.action === "perform-save") {
      console.log("Extension Type: ", "/* @echo extension */");
      console.log("PERFORM AJAX", request.data);

      sendResponse({ action: "saved" });
    }
    if(request.action === "push-code") {
      code = request.data;
      console.log(request.data)
    }
  }
);

