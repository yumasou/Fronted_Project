import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <button type="button" class="" disabled>
        <svg
          class="motion-reduce:hidden animate-spin ..."
          viewBox="0 0 24 24"
        ></svg>
        loading...
      </button>
    </div>
  );
}

export default Loading;
