function requestValidator(obj) {
  const validMethod = ["GET", "POST", "CONNECT", "DELETE"];
  const uriPattern = /^[\w.]+$/gm;

  const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const specialCHars = ["<", ">", "&", ",", "'", "\""];

  if (!obj.method || !validMethod.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (!obj.uri || (obj.uri !== "*" && !obj.uri.match(uriPattern))) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!obj.version || !validVersions.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (!obj.message && obj.message !== "") {
    throw new Error("Invalid request header: Invalid Message");
  }

  for (const char of obj.message) {
    if (specialCHars.includes(char)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }

  return obj;
}
console.log(
  requestValidator({
    method: "GET",
    uri: "x",
    version: "HTTP/1.1",
    message: "",
  })
);
