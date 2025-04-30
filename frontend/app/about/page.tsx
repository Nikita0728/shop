import Image from 'next/image';
import { Heart, Truck, ShieldCheck, ShoppingBag } from 'lucide-react';
import boutique from '../../assets/boutque.png'
import founder from '../../assets/me.jpg'


export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story of Elegance & Style
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Where every dress tells a story and every woman finds her perfect look
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src={boutique} // Replace with your image
              alt="Our boutique"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Pretty Dresses began as a small boutique with a simple mission: to help women feel confident and beautiful in clothing that fits their unique style.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a passion project has grown into a beloved destination for women seeking elegant, feminine dresses for every occasion - from casual brunches to formal events.
            </p>
            <p className="text-gray-600">
              Today, we carefully curate collections from designers around the world, bringing you the latest trends while maintaining timeless elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Promise to You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Heart className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated with Love</h3>
              <p className="text-gray-600">
                Each dress is hand-selected for quality, comfort, and style by our team of fashion experts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Truck className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast & Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free shipping on all orders over Npr.5000 and receive your order within 2-3 business days.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="h-10 w-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hassle-Free Returns</h3>
              <p className="text-gray-600">
                Not happy with your purchase? We offer easy returns within 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Passionate fashion lovers dedicated to helping you look and feel your best
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-pink-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Find Your Perfect Dress?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Browse our latest collections and discover dresses that make you feel as beautiful as you are
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center">
            <ShoppingBag className="mr-2" />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Sample team data - replace with your actual team members
const teamMembers = [
  {
    id: 1,
    name: "Nikita Kunwor",
    role: "Founder & CEO",
    bio: "With 15 years in fashion, Nikita's eye for timeless style defines our collections.",
    image: founder
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Head Buyer",
    bio: "Emily travels the world to discover emerging designers and unique pieces.",
    image: "/images/team/emily.jpg"
  },
  {
    id: 3,
    name: "Mia Rodriguez",
    role: "Customer Experience",
    bio: "Mia ensures every customer receives personalized styling advice.",
    image: "/images/team/mia.jpg"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Marketing Director",
    bio: "David brings our brand story to life through beautiful visuals and campaigns.",
    image: "/images/team/david.jpg"
  }
];