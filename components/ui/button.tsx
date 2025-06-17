import React from "react";

export function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
}
