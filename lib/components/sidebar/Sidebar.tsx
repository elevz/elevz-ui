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
    <div className="text fixed bg-black/40 inset-0 z-0" onClick={onBackdropClick}></div>
  )

  return (
    <>
      <div
        {...props}
        className={combineClassName(
          "bg-background h-full z-10",
          [isMobile, "fixed"],
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