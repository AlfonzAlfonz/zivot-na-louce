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
    <div {...props} className={`flex flex-col md:flex-row justify-between bg-white rounded shadow-2xl ${className ?? ""}`}>
      {left}
      <div className={`flex flex-col p-8 ${_body ?? ""}`}>
        {title && <h2 className={`pb-4 ${_title ?? ""}`}>{title}</h2>}
        {children}
      </div>
      {right}
    </div>
  );
};

export default Card;
