import "react";

declare module "react" {
  interface HTMLAttributes<T> extends HTMLAttributes<T> {
    popover?: "true";
  }

  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    popovertarget?: string;
  }
}
