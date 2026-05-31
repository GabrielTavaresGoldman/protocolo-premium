const fs = require("fs");

const html = fs.readFileSync("protocolo.html", "utf8");
const config = fs.readFileSync("config-params.js", "utf8");

const htmlFinal = html.replace(
  '<script src="config-params.js"></script>',
  `<script>\n${config}\n</script>`
);

fs.writeFileSync("protocolo_final.html", htmlFinal, "utf8");

console.log("HTML final gerado com sucesso: protocolo_final.html");