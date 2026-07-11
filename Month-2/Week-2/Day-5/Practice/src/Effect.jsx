import React, { useEffect, useState } from "react";

function Effect() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    console.log("useEffect based on dependency");

    return () => {
      console.log("cleanup function");
    };

  }, [count]);

  return (
    <div>

      <button onClick={() => setCount(count + 1)}>
        Increment Count {count}
      </button>

      <br />
      <br />

      <button onClick={() => setTotal(total + 1)}>
        Increment Total {total}
      </button>

    </div>
  );
}

export default Effect;