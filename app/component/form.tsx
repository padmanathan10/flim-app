"use client";

import { useState } from "react";

export default function Form() {
  const [v, setV] = useState("");

  const submitForm = async () => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/form-submit`, {
      method: "POST",
      body: JSON.stringify({
        name: v,
      }),
    });

    const res = await req.json();
    alert(res.message);
  };

  return (
    <div>
      <input onChange={(e) => setV(e.target.value)} placeholder="Name" />
      <button onClick={() => submitForm()}>Submit</button>
    </div>
  );
}
