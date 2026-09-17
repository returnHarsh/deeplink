'use client';

import React from 'react';

interface RequestAccessButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function RequestAccessButton({
  className,
  style,
  children = 'Request access →',
}: RequestAccessButtonProps) {
  const openRequestModal = () => {
    window.dispatchEvent(new Event('open-request-modal'));
  };

  return (
    <button
      type="button"
      onClick={openRequestModal}
      className={`cursor-pointer ${className || ''}`}
      style={style}
    >
      {children}
    </button>
  );
}
