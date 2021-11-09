import React, { useMemo } from "react";

export default function CategoryBadge({ color, categoryName }) {
  const bgClass = useMemo(() => {
    switch (color) {
      case "green":
        return "bg-green-600";
      case "blue":
        return "bg-blue-500";
      case "red":
        return "bg-red-500";
      case "brown":
        return "bg-purple-500";
      default:
        return "bg-primary";
    }
  }, [color]);

  return (
    <div className={`p-1 border-1 rounded-md ${bgClass} text-sm text-secondary`}>{categoryName}</div>
  );
}
