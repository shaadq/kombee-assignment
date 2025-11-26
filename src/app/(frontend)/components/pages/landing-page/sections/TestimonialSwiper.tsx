"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeftIcon, ArrowRightIcon, StarFilledIcon } from "@sanity/icons";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

type TestimonialSwiperProps = {
  testimonials: Testimonial[];
};

const TestimonialSwiper = ({ testimonials }: TestimonialSwiperProps) => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="border border-[#D8D8D8] px-10 py-8">
              <div className="flex items-center justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <StarFilledIcon key={i} className="text-[#FE8B75] text-2xl" />
                ))}
              </div>

              <p className="mb-10 text-center text-[#42454A]">{item.quote}</p>

              <div className="flex gap-3 justify-center items-center">
                <Image
                  src={urlFor(item.avatar).url()}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-[#42454A] font-medium">{item.name}</h3>
                  <p className="text-[#42454A] text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-5 mt-10">
        <button className="custom-prev w-12 h-12 rounded-full border border-[#42454A] flex items-center justify-center hover:bg-[#42454A] hover:text-white transition cursor-pointer">
          <ArrowLeftIcon className="text-xl" />
        </button>

        <button className="custom-next w-12 h-12 rounded-full border border-[#42454A] flex items-center justify-center hover:bg-[#42454A] hover:text-white transition cursor-pointer">
          <ArrowRightIcon className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSwiper;
