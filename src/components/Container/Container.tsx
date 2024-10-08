import { ContainerProps } from "./types";
import './Container.css';

export function Container({
  children,
}: ContainerProps) {
  return (
    <div className="root">
      <div>
        {children}
      </div>
    </div>
  )
}