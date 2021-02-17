import { FC, HTMLAttributes, ReactNode } from "react";

interface Props {
  title?: ReactNode;
  _title?: string;

  _body?: string;

  left?: ReactNode;
  right?: ReactNode;
}

const Card: FC<Props & HTMLAttributes<HTMLDivElement>> = ({ title, _title, _body, className, children, left, right, ...props }) => {
  return (
    <div {...props} className={`card ${className ?? ""}`}>
      {left}
      <div className={`card-body ${_body ?? ""}`}>
        {title && <h2 className={`pb-4 ${_title ?? ""}`}>{title}</h2>}
        {children}
      </div>
      {right}
    </div>
  );
};

export default Card;
