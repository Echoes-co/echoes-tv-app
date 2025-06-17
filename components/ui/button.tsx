import React from "react";

export function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
