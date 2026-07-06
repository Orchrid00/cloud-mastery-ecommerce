import type { DetailedHTMLProps, HTMLAttributes } from "react";

export {};

type ChatElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  [key: string]: unknown;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "chat-messenger": ChatElementProps;
      "chat-messenger-container": ChatElementProps;
      "chat-reset-session-button": ChatElementProps;
      "chat-messenger-close-button": ChatElementProps;
    }
  }
}
