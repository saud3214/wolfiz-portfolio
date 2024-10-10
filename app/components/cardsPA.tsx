import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';
import Image from 'next/image';
const images = [
  '/website/1947pa/c1n.png',
  '/website/1947pa/c2n.png',
  '/website/1947pa/c3n.png',
  '/website/1947pa/c2n.png',
  '/website/1947pa/c1n.png',
  '/website/1947pa/c3n.png',
];

const firstRow = images.slice(0, images.length / 2);

const ImageCard = ({ img }: { img: string }) => {
  return (
    <div className="w-1/2 h-[10vh] p-4 items-center justify-center flex">
      <Image className=" w-full h-full object-cover" alt="img" src={img} fill />
    </div>
  );
};

export function MarqueePA() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((img, index) => (
          <ImageCard key={index} img={img} />
        ))}
      </Marquee>
    </div>
  );
}
