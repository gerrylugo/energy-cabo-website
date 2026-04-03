export default function CardinalWire() {
  return (
    <div className="relative w-full py-4 overflow-hidden">
      {/* Wire line across full width */}
      <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />

      {/* Cardinal perched on wire */}
      <div className="relative flex justify-end pr-[15%] md:pr-[20%]">
        <img
          src="/images/cardinal-wire.png"
          alt="Red Cardinal perched on a wire — Energy Cabo"
          className="w-24 md:w-32 lg:w-36 drop-shadow-lg hover:scale-105 transition-transform duration-500 -mb-2"
        />
      </div>
    </div>
  );
}
