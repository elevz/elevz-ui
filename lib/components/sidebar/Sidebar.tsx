import React, { useEffect, useState } from "react"
import { combineClassName } from "@lib/utils";
import { createPortal } from "react-dom";

interface SidebarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onBackdropClick?: () => void;
  visible?: boolean;
}

function useIsMobile(): boolean {
  const [windowSize, setWindowSize] = useState<number>(0);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize <= 430;
}

export const Sidebar: React.FC<SidebarProps> = ({
  visible = !useIsMobile(),
  onBackdropClick,
  ...props
}) => {
  const isMobile = useIsMobile();

  const Backdrop = (
    <div className="ez-text ez-fixed ez-bg-black/40 ez-inset-0 ez-z-0" onClick={onBackdropClick}></div>
  )

  return (
    <>
      <div
        {...props}
        className={combineClassName(
          "ez-flex ez-flex-col ez-bg-surface ez-h-full ez-p-4 ez-gap-1 ez-z-10",
          [isMobile, visible ? "ez-fixed" : "ez-hidden"],
          props.className
        )}
      >
        {props.children}
      </div>
      {(isMobile && visible) &&
        createPortal(Backdrop, document.body)
      }
    </>
  )
}