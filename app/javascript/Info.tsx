import React from "react";

export default function Page({ title = "notitle" }: { title?: string }) {
  return <h1>I am info page {title}</h1>
}