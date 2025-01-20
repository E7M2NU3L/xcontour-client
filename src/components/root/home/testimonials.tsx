import Marquee from '@/components/ui/marquee';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react'

const reviews = [
    {
      name: "Arjun",
      username: "@arjun",
      body: "Xcontour has completely transformed how I manage contracts. The AI-powered features save me so much time!",
      img: "https://avatar.vercel.sh/arjun",
    },
    {
      name: "Priya",
      username: "@priya",
      body: "The automated compliance testing is a game-changer. I feel confident about every contract I send out now.",
      img: "https://avatar.vercel.sh/priya",
    },
    {
      name: "Liam",
      username: "@liam",
      body: "As a freelancer, Xcontour is the tool I didn’t know I needed. The insights dashboard is fantastic!",
      img: "https://avatar.vercel.sh/liam",
    },
    {
      name: "Aisha",
      username: "@aisha",
      body: "I’ve saved hours with Xcontour’s automations and version tracking. It’s perfect for freelancers like me.",
      img: "https://avatar.vercel.sh/aisha",
    },
    {
      name: "Oliver",
      username: "@oliver",
      body: "The custom templates and easy contract management make Xcontour an essential tool for my business.",
      img: "https://avatar.vercel.sh/oliver",
    },
    {
      name: "Riya",
      username: "@riya",
      body: "I love how intuitive and powerful Xcontour is. Managing contracts has never been this stress-free!",
      img: "https://avatar.vercel.sh/riya",
    },
  ];
  
  const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <main className=''>
        <div className='min-h-[90vh] py-[3rem] flex flex-col max-w-7xl mx-auto'>
        <main className='flex flex-col px-[1.5rem] md:px-0'>
            <h1 className='text-2xl md:text-5xl font-medium mb-3'>
            Happy Customers
            </h1>
            <h1 className='font-medium text-sm'>
            Read what our customers have to say about us
            </h1>
        </main>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </div>
    </main>
  )
}

export default Testimonials