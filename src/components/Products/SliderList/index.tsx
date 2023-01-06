import { Heading, Section, TitleBox, Card } from "@components/imports";
import * as Styled from "./styled";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

interface SliderList{
  title: string;
}

export default function SliderList(props : SliderList) {
  return (
    <Section className="mx-auto">
      <TitleBox>
        <Heading type='h2' className="font-medium text-xl">
          {props.title}
        </Heading>
      </TitleBox>

      <Styled.SlideBox>
      <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={4}
      >

<SwiperSlide>
<Card img='/camiseta1.webp' alt='Camiseta' width={800} height={1080} title='Camiseta Clean' price={99.90}/>
</SwiperSlide>
<SwiperSlide>
<Card img='/camiseta1.webp' alt='Camiseta' width={800} height={1080} title='Camiseta Clean' price={99.90}/>
</SwiperSlide>
<SwiperSlide>
<Card img='/camiseta1.webp' alt='Camiseta' width={800} height={1080} title='Camiseta Clean' price={99.90}/>
</SwiperSlide>
<SwiperSlide>
<Card img='/camiseta1.webp' alt='Camiseta' width={800} height={1080} title='Camiseta Clean' price={99.90}/>
</SwiperSlide>
<SwiperSlide>
<Card img='/camiseta1.webp' alt='Camiseta' width={800} height={1080} title='Camiseta Clean' price={99.90}/>
</SwiperSlide>
<SwiperSlide>
<Card img='/camiseta1.webp' alt='Camiseta' width={800} height={1080} title='Camiseta Clean' price={99.90}/>
</SwiperSlide>

      </Swiper>
      </Styled.SlideBox>
    </Section>
  );
}
