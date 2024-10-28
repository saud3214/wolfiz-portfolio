import Marquee from '@/components/magicui/marquee';
import Image from 'next/image';
const images = ['/puan/laptop1.png', '/puan/laptop1.png'];

const firstRow = images.slice(0, images.length / 2);

const ImageCard = ({ img }: { img: string }) => {
  return (
    <div className="md:w-[40vw] w-[60vw] md:p-5">
      <Image className=" object-contain" alt="" src={img} fill />
    </div>
  );
};

export function MarqueePuan1() {
  return (
    <div className="relative flex h-full w-full  items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((img, index) => (
          <ImageCard key={index} img={img} />
        ))}
      </Marquee>
    </div>
  );
}
