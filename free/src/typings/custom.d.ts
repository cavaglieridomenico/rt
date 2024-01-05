import "react";

declare module "react" {
  interface HTMLAttributes<T> extends HTMLAttributes<T> {
    popover?: "true";
  }
}

declare module "react" {
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    popovertarget?: string;
  }
}
