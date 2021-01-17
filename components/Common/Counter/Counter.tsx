import React, { useState } from "react";
import clsx from "clsx";
import { TComponent } from "@components/types";
import { Button } from "@components/UI";

interface Props extends TComponent {}

const Counter = ({ className }: Props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className={clsx(className, "pt-4")} data-testid="counter">
      <div className="mb-4">
        <h1 data-testid="count" className="text-4xl text-accents-1">{count}</h1>
      </div>
      <div className="flex items-center justify-center">
        <Button
          data-testid="increment-button"
          className="mr-4"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
        <Button
          data-testid="decrement-button"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
