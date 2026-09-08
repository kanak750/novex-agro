import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/types';

import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {

  return (
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden border border-navy/8 bg-white rounded-xl transition-shadow duration-500 hover:shadow-xl hover:shadow-navy/5 hover:border-navy/20"
    >
      <Link to={`/products/${product.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-navy px-3 py-1 rounded-full">
          {product.category}
        </span>
      </Link>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold text-ink text-lg leading-snug">
          <Link to={`/products/${product.slug}`} className="hover:text-brand-green transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between gap-3 pt-4 border-t border-navy/6">
          <span className="text-sm font-semibold text-ink">{product.price}</span>
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green link-underline"
          >
            View Product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <Link
          to={`/products/${product.slug}`}
          className="mt-3 w-full py-2.5 text-sm font-semibold border border-brand-green/20 text-brand-green rounded-lg hover:bg-brand-green hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Explore Product
        </Link>
      </div>
    </motion.div>
  );
}
