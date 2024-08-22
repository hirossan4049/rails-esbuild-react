import React from "react";
import { createRoot } from "react-dom/client";

const container = document.createElement("root")
container.id = "root"
document.body.appendChild(container)

if (!container) {
  throw new Error("Couldn't find a root element");
}

const root = createRoot(container);

console.log("my name is application.jsa")

export function react_component(file, props={}) {
  console.log("react comopnent", file)
  import(file).then((v) => {
    console.log("IMPORTED REASCT COMPOENT", v)
    console.log(v)
      root.render(
        <div className="bg-green-600">
         {props ?
           <v.default {...props} />:
            <v.default />
         }
        </div>
      );
  }).catch((e) =>[
    console.error(e)
  ]).finally(() => {
    console.log("finary...")
  })
}