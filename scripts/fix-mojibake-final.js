// Generic final pass: repair every remaining '"¢½' (mojibake ✔) separator in src/.
const fs = require("fs");
let fixed = 0;
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = d + "/" + f;
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.(tsx?|jsx?)$/.test(f)) {
      const c = fs.readFileSync(p, "utf8");
      if (c.includes('"\u00A2\u00BD')) {
        const n = c.split('"\u00A2\u00BD').length - 1;
        fs.writeFileSync(p, c.split('"\u00A2\u00BD').join("\u2713"), "utf8");
        fixed += n;
        console.log(`fixed ${n} in ${p}`);
      }
    }
  }
})("src");
console.log("total repaired:", fixed);
