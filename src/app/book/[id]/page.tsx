import React from "react";

export default function Book({ params }: { params: { id: string } }) {
  return (
    <main>
      Book page {params.id}
    </main>
  );
}
