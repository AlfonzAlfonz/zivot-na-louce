import { FC, HTMLAttributes } from "react";

interface Props {
  title: string;
  _body?: HTMLAttributes<HTMLDivElement>;
}

const Card: FC<Props & HTMLAttributes<HTMLDivElement>> = ({ title, className, children, _body, ...props }) => {
  return (
    <div {...props} className={`flex flex-col items-start p-10 bg-white ${className}`}>
      <h2 className="pb-4">{title}</h2>
      <div {..._body}>
        {children}
      </div>
    </div>
  );
};

export default Card;
