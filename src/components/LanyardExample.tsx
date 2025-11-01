import Lanyard from "./Lanyard";

export default function LanyardExample() {
  return (
    <div className="w-full h-screen">
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}
