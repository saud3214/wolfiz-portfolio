import Marquee from '@/components/magicui/marquee';
import Image from 'next/image';
const images = ['/puan/loo2.png', '/puan/lap2.png'];

const firstRow = images.slice(0, images.length / 2);

const ImageCard = ({ img }: { img: string }) => {
  return (
    <div className="w-[50vw] h-full p-5">
      <Image className="w-full" alt="" src={img} fill />
    </div>
  );
};

export function MarqueePuan2() {
  return (
    <div className="relative flex h-full w-full  items-center justify-center  rounded-lg">
      <Marquee pauseOnHover className="[--duration:10s]">
        <div className="flex">
          {firstRow.map((img, index) => (
            <ImageCard key={index} img={img} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
