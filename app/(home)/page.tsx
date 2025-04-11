import { HomeCarousel } from "@/components/shared/header/home.carousel";
import data from "@/lib/data";

export default function Page() {
  return (
    <HomeCarousel items={data.carousels} />
    );
}
