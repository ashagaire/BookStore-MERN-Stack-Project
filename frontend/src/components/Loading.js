import React from "react";
import Skeleton from "@mui/material/Skeleton";

function Loading() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width={300}
          height={200}
          className="rounded-lg px-4 py-2 m-4"
        />
      ))}
    </div>
  );
}

export default Loading;
