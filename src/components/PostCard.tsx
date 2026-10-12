import Link from "next/link";
import { Post } from "@/data/posts";
import { Clock, MapPin, DollarSign, ArrowRight } from "lucide-react";

interface PostCardProps {
  post: Post;
  priority?: boolean;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Image Container */}
      <Link href={`/post/${post.slug}`} className="relative h-56 w-full overflow-hidden block bg-stone-100">
        <img
          src={post.coverImage}
          alt={post.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-md text-stone-800 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
            {post.category}
          </span>
        </div>

        {/* Budget Pill */}
        <div className="absolute top-3 right-3">
          <span className="bg-stone-900/80 backdrop-blur-md text-emerald-400 text-xs font-extrabold px-2.5 py-1 rounded-full flex items-center gap-0.5">
            {post.budgetLevel}
          </span>
        </div>

        {/* Destination in image footer */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white text-xs font-medium drop-shadow-md">
          <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
          <span className="truncate">{post.destination}, {post.stateCountry}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-stone-600 mb-2.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <Link href={`/post/${post.slug}`}>
            <h3 className="font-bold text-stone-900 text-lg leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
              {post.title}
            </h3>
          </Link>

          <p className="text-stone-700 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
            {post.subtitle}
          </p>
        </div>

        <div className="pt-5 mt-4 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs font-medium text-stone-700 truncate max-w-[120px]">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/post/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 group-hover:translate-x-0.5 transition-all"
          >
            Ver Roteiro
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
