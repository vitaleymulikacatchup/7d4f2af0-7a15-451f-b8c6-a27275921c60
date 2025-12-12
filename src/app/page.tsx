"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import AboutFeature from '@/components/sections/about/AboutFeature';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, ChefHat, Flame, Heart, Phone, Users, UtensilsCrossed } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="grid"
      cardStyle="spotlight"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Smachno"
          button={{
            text: "Reserve Table",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="Smachno"
          description="Experience authentic cuisine crafted with passion and finest ingredients. From traditional recipes to modern culinary innovations, every dish tells a story of taste and tradition."
          buttons={[
            {
              text: "Reserve Now",
              href: "#contact"
            },
            {
              text: "View Menu",
              href: "#features"
            }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535476930-5ojkgd9s.jpg"
          imageAlt="Elegant restaurant dining atmosphere"
          frameStyle="card"
        />
      </div>

      <div id="featured-menu" data-section="featured-menu">
        <ProductCardFive
          title="Signature Dishes"
          description="Discover our most celebrated creations, crafted with premium ingredients and culinary expertise"
          tag="Menu Highlights"
          tagIcon={UtensilsCrossed}
          textboxLayout="default"
          products={[
            {
              id: "dish-1",
              button: {
                text: "Order Now",
                id: "order-dish-1"
              },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765541362320-ut4shdn3.jpg",
              imageAlt: "Gourmet signature dish",
              isFavorited: false
            },
            {
              id: "dish-2",
              button: {
                text: "Order Now",
                id: "order-dish-2"
              },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765540137890-c8kpgdps.jpg",
              imageAlt: "Appetizer selection",
              isFavorited: false
            },
            {
              id: "dish-3",
              button: {
                text: "Order Now",
                id: "order-dish-3"
              },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765540136939-u141gep9.jpg",
              imageAlt: "Dessert specialty",
              isFavorited: false
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Why Choose Smachno. We believe in bringing exceptional dining experiences through quality, passion, and tradition. Every meal is crafted to create memorable moments."
          features={[
            {
              icon: Flame,
              title: "Premium Ingredients",
              description: "Sourced locally and internationally, we select only the finest ingredients for exceptional flavor and quality."
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Our experienced chefs and staff deliver impeccable service with attention to every detail."
            },
            {
              icon: Award,
              title: "Award-Winning",
              description: "Recognized for culinary excellence and hospitality in the dining community."
            },
            {
              icon: Heart,
              title: "Passion Driven",
              description: "We cook with heart, creating dishes that resonate with flavor, tradition, and innovation."
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Meet Our Team"
          description="The passionate culinary artists and hospitality professionals behind every exceptional dish"
          tag="Our Chefs"
          tagIcon={ChefHat}
          members={[
            {
              id: "chef-1",
              name: "Marco Rossi",
              role: "Executive Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535482198-8j7g78sw.jpg",
              imageAlt: "Marco Rossi, Executive Chef"
            },
            {
              id: "chef-2",
              name: "Sophia Laurent",
              role: "Pastry Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765541363921-065l9wua.jpg",
              imageAlt: "Sophia Laurent, Pastry Chef"
            }
          ]}
          gridVariant="two-items-tall-short"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          title="Loved by Our Guests"
          description="Hear from people who have experienced Smachno and created lasting memories"
          tag="Testimonials"
          textboxLayout="default"
          variant="card"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              quote: "An absolutely unforgettable dining experience. The attention to detail in each dish was remarkable, and the service was impeccable. Smachno is truly a gem.",
              name: "Alexandra Chen",
              role: "Food Critic",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535484255-fp3bss8a.jpg",
              imageAlt: "Alexandra Chen"
            },
            {
              id: "2",
              quote: "We celebrated our anniversary at Smachno and it was perfect. Every course was a masterpiece, and the ambiance made the evening truly special.",
              name: "Isabella Martinez",
              role: "Event Planner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765541365111-ce50hpvd.jpg",
              imageAlt: "Isabella Martinez"
            },
            {
              id: "3",
              quote: "The flavors, the presentation, the service - everything was exceptional. I bring all my guests from out of town to Smachno.",
              name: "James Wilson",
              role: "Business Executive",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765541365997-irgoelgo.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "4",
              quote: "More than just a restaurant, Smachno is an experience. The chefs truly understand the art of cooking with passion and precision.",
              name: "Sofia Rossi",
              role: "Sommelier",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765541366827-31e5uz10.jpg",
              imageAlt: "Sofia Rossi"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Reserve Your Table"
          ctaDescription="Experience fine dining at Smachno. Reserve your table and join us for an exceptional meal."
          ctaButton={{
            text: "Book Reservation",
            href: "https://www.resy.com"
          }}
          ctaIcon={Phone}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We are open Tuesday to Sunday, 12:00 PM - 11:00 PM. Closed Mondays. Happy hour runs from 5:00 PM - 6:30 PM daily."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely. Our chefs are happy to accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Please mention your preferences when reserving."
            },
            {
              id: "3",
              title: "Can I make group reservations?",
              content: "Yes, we welcome groups. For parties of 8 or more, please call us directly at +1-555-SMACHNO to discuss special arrangements and menu options."
            },
            {
              id: "4",
              title: "Do you offer private dining?",
              content: "We have an elegant private dining room perfect for special occasions and corporate events. Contact us for availability and pricing."
            },
            {
              id: "5",
              title: "What is your cancellation policy?",
              content: "Cancellations must be made 24 hours in advance. Late cancellations or no-shows may incur a fee."
            },
            {
              id: "6",
              title: "Do you have a wine selection?",
              content: "Our sommelier has curated an extensive wine list featuring local and international selections to pair perfectly with our dishes."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Smachno"
        />
      </div>
    </ThemeProvider>
  );
}