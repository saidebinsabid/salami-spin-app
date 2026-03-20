import { IoCaretDown } from "react-icons/io5";

export default function SpinPointer() {
  return (
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 text-white drop-shadow-2xl">
      <IoCaretDown size={60} className="text-white filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
    </div>
  );
}
