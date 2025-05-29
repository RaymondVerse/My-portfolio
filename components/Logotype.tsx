import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils";

type Props = HTMLAttributes<HTMLDivElement>;

export const Logotype: FC<Props> = ({ className, ...rest }) => {
  return (
    <div className={cn("text-[20px] sm:text-3xl", className)} {...rest}>
      <span className="font-bold">
        <img
          src="/HC.png"
          width={80}
          height={80}
          className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full object-cover"
          style={{ display: "inline-block", marginRight: "10px" }}
        />
        <span className="">[</span>
        <span className="">Raymond</span>
        <span className="">]</span>
      </span>{" "}
      <span className="">honam</span>{" "}
      <span className="text-accent font-bold">.</span>
    </div>
  );
};
