import React from "react";

export default function Page({ title = "notitle", subtitle = "tsx subtitle" }: { title?: string, subtitle?: string }) {
  return <h1>I am info page {title} and {subtitle}</h1>
}