import React from "react";

export function Input({
  placeholder,
  className,
}: {
  placeholder?: string;
  className?: string;
}) {
  return <input placeholder={placeholder} className={className} />;
}