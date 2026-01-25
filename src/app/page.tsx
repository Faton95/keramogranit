import { Navbar } from "@/components/navbar";
import { Banner } from "@/components/banner";
import { Contacts } from "@/components/contacts";
import { Carousel } from "@/components/carousel";
import { AboutCompany } from "@/components/about-company";
import { PaymentDelivery } from "@/components/payment-delivery";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="main">
        <Banner />
      </section>
      <section id="about">
        <AboutCompany />
      </section>
      <section id="collections">
        <Carousel />
      </section>
      <section id="payment-delivery">
        <PaymentDelivery />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}
