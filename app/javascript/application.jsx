import React, { useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";
// import Info from './Info';
// import Top from './Top';
// import("./Info")
// import("./Top")

// let imports = {}

// console.log(Info, Top)

const container = document.createElement("root")
container.id = "root"
document.body.appendChild(container)

if (!container) {
  throw new Error("Couldn't find a root element");
}

const root = createRoot(container);

console.log("my name is application.jsa", useState)

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
    document.getElementById('setup_script').remove()
  })
}
const data = document.getElementById("data")//.getAttribute("file")

// const View = lazy(() => import(data.getAttribute("file")));

// function Root() {
//   return <View />
// }

function Gomi() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCounter((new Date()).toISOString())
    }, 100)
  }, [])
  return <div>
   counter: {counter}
  </div>
}

const Lazyed = imports[data.getAttribute("file")]
const props = JSON.parse(data.getAttribute("props"))

root.render(
  <div className="bg-green-600">
    {/* <Suspense>
   <Root />
   </Suspense> */}
   {/* <button>hello</button> */}
  <Gomi />
  <Lazyed {...props} />
  
   {/* <Top /> */}
  </div>
);