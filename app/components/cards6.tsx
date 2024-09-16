import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';
import Image from 'next/image';
const images = [
  '/6ixmortgage/m1.png',
  '/6ixmortgage/m2.png',
  '/6ixmortgage/m3.png',
  '/6ixmortgage/m4.png',
  '/6ixmortgage/m2.png',
  '/6ixmortgage/m3.png',
];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const ImageCard = ({ img }: { img: string }) => {
  return (
    <div className="w-64 p-4">
      <Image
        className="rounded-xl w-full h-full object-cover"
        alt=""
        src={img}
        fill
      />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((img, index) => (
          <ImageCard key={index} img={img} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((img, index) => (
          <ImageCard key={index} img={img} />
        ))}
      </Marquee>
    </div>
  );
}
