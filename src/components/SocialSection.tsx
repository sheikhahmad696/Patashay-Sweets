import React from 'react';
import { Instagram, Facebook, Heart, MessageSquare, ExternalLink } from 'lucide-react';
import { ASSETS } from '../data/bakeryData';

export const SocialSection: React.FC = () => {
  const socialPosts = [
    {
      id: 'ig-1',
      image: ASSETS.hero,
      likes: '1,420',
      comments: '84',
      caption: 'The morning pull. Pure golden Patashay right out of the Bahawalpur hearth. #Patashay #MuffinsBakers',
    },
    {
      id: 'ig-2',
      image: ASSETS.layers,
      likes: '2,118',
      comments: '136',
      caption: 'Count the micro-layers! Hand-laminated over 48 hours with 100% cultured butter. #ArtisanalBakery',
    },
    {
      id: 'ig-3',
      image: ASSETS.craft,
      likes: '984',
      comments: '42',
      caption: 'The hands that keep the royal tradition alive. Zero shortcuts, pure devotion. #HeritageSweets',
    },
    {
      id: 'ig-4',
      image: ASSETS.box,
      likes: '1,890',
      comments: '97',
      caption: 'Our Nawabi Keepsake Boxes arriving at weddings in Lahore and Islamabad this weekend. #RoyalGifting',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-[#E8DEC8]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#A57822] uppercase mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>@patashaybymuffins</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#22130C]">
              Follow the Baking Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5547] mt-1">
              Daily stone hearth reels, batch countdowns, and behind-the-scenes in Bahawalpur.
            </p>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#22130C] text-[#FAF7F2] hover:bg-[#341F14] rounded-xl text-xs font-semibold transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E5B85E]" />
              <span>Follow on Instagram</span>
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2ECE1] text-[#22130C] hover:bg-[#E8DEC8] rounded-xl text-xs font-medium transition-colors"
            >
              <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#22130C] border border-[#E8DEC8] shadow-sm cursor-pointer"
            >
              <img
                src={post.image}
                alt="Instagram post preview from Patashay by Muffins Bakers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with likes & caption */}
              <div className="absolute inset-0 bg-[#22130C]/80 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white">
                <div className="flex items-center justify-end gap-3 text-xs font-mono text-[#E5B85E]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-[#E5B85E]" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 fill-[#E5B85E]" />
                    {post.comments}
                  </span>
                </div>

                <div>
                  <p className="text-xs text-[#FAF7F2] line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#E5B85E] mt-2 font-medium">
                    <span>View Post</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
