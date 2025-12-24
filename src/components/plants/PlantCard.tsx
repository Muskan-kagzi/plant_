// import React from 'react';
// import { motion } from 'framer-motion';
// import { Heart, Bookmark, MapPin } from 'lucide-react';
// import { Plant } from '@/types';
// import { getCategoryColor } from '@/data/plants';
// import { cn } from '@/lib/utils';
// import { useApp } from '@/context/AppContext';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';

// interface PlantCardProps {
//   plant: Plant;
//   onClick?: () => void;
//   variant?: 'default' | 'compact';
// }

// const PlantCard: React.FC<PlantCardProps> = ({ plant, onClick, variant = 'default' }) => {
//   const { toggleLikePlant, toggleBookmarkPlant, isAuthenticated } = useApp();

//   const categoryColor = getCategoryColor(plant.category);

//   const handleLike = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (isAuthenticated) {
//       toggleLikePlant(plant.id);
//     }
//   };

//   const handleBookmark = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (isAuthenticated) {
//       toggleBookmarkPlant(plant.id);
//     }
//   };

//   if (variant === 'compact') {
//     return (
//       <motion.div
//         className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-muted/50 cursor-pointer transition-colors border border-border"
//         onClick={onClick}
//         whileHover={{ scale: 1.01 }}
//         whileTap={{ scale: 0.99 }}
//       >
//         <img
//           src={plant.imageUrl}
//           alt={plant.name}
//           className="w-16 h-16 rounded-lg object-cover"
//         />
//         <div className="flex-1 min-w-0">
//           <h4 className="font-medium text-foreground truncate">{plant.name}</h4>
//           <p className="text-sm text-muted-foreground truncate">{plant.botanicalName}</p>
//         </div>
//         <Badge
//           className="shrink-0 text-xs"
//           style={{ backgroundColor: categoryColor, color: 'white' }}
//         >
//           {plant.category}
//         </Badge>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       className="group relative bg-card rounded-xl overflow-hidden card-shadow border border-border/50 cursor-pointer"
//       onClick={onClick}
//       whileHover={{ y: -4 }}
//       transition={{ duration: 0.2 }}
//     >
//       {/* Image */}
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={plant.imageUrl}
//           alt={plant.name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
//         {/* Category Badge */}
//         <Badge
//           className="absolute top-3 left-3 text-xs font-medium"
//           style={{ backgroundColor: categoryColor, color: 'white' }}
//         >
//           {plant.category}
//         </Badge>

//         {/* Actions */}
//         <div className="absolute top-3 right-3 flex gap-2">
//           <Button
//             size="icon"
//             variant="ghost"
//             className={cn(
//               'w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background',
//               plant.isLiked && 'text-destructive'
//             )}
//             onClick={handleLike}
//           >
//             <Heart className={cn('w-4 h-4', plant.isLiked && 'fill-current')} />
//           </Button>
//           <Button
//             size="icon"
//             variant="ghost"
//             className={cn(
//               'w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background',
//               plant.isBookmarked && 'text-accent'
//             )}
//             onClick={handleBookmark}
//           >
//             <Bookmark className={cn('w-4 h-4', plant.isBookmarked && 'fill-current')} />
//           </Button>
//         </div>

//         {/* Location */}
//         <div className="absolute bottom-3 left-3 flex items-center gap-1 text-primary-foreground/90 text-xs">
//           <MapPin className="w-3 h-3" />
//           <span>{plant.location.region}</span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
//           {plant.name}
//         </h3>
//         <p className="text-sm text-muted-foreground italic mb-2">{plant.botanicalName}</p>
//         <p className="text-sm text-foreground/80 line-clamp-2 mb-3">
//           {plant.medicinalUse}
//         </p>

//         {/* AYUSH Systems */}
//         <div className="flex flex-wrap gap-1">
//           {plant.ayushSystem?.map((system) => (
//             <Badge key={system} variant="secondary" className="text-xs">
//               {system}
//             </Badge>
//           ))}
//         </div>

//         {/* Likes */}
//         <div className="flex items-center gap-1 mt-3 text-muted-foreground text-sm">
//           <Heart className="w-4 h-4" />
//           <span>{plant.likes} likes</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default PlantCard;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Heart, Bookmark, MapPin } from 'lucide-react';
// import { Plant } from '@/types';
// import { getCategoryColor } from '@/data/plants';
// import { cn } from '@/lib/utils';
// import { useApp } from '@/context/AppContext';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';

// interface PlantCardProps {
//   plant: Plant;
//   onClick?: () => void;
//   variant?: 'default' | 'compact';
// }

// const PlantCard: React.FC<PlantCardProps> = ({ plant, onClick, variant = 'default' }) => {
//   const { toggleLikePlant, toggleBookmarkPlant, isAuthenticated } = useApp();
//   const [openModal, setOpenModal] = useState(false);

//   const categoryColor = getCategoryColor(plant.category);

//   const handleLike = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (isAuthenticated) toggleLikePlant(plant.id);
//   };

//   const handleBookmark = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (isAuthenticated) toggleBookmarkPlant(plant.id);
//   };

//   if (variant === 'compact') {
//     return (
//       <motion.div
//         className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-muted/50 cursor-pointer transition-colors border border-border"
//         onClick={onClick}
//         whileHover={{ scale: 1.01 }}
//         whileTap={{ scale: 0.99 }}
//       >
//         <img
//           src={plant.imageUrl}
//           alt={plant.name}
//           className="w-16 h-16 rounded-lg object-cover cursor-pointer"
//           onClick={(e) => {
//             e.stopPropagation();
//             setOpenModal(true);
//           }}
//         />
//         <div className="flex-1 min-w-0">
//           <h4 className="font-medium text-foreground truncate">{plant.name}</h4>
//           <p className="text-sm text-muted-foreground truncate">{plant.botanicalName}</p>
//         </div>
//         <Badge
//           className="shrink-0 text-xs"
//           style={{ backgroundColor: categoryColor, color: 'white' }}
//         >
//           {plant.category}
//         </Badge>

//         {/* Modal */}
//         {openModal && (
//           <Modal plant={plant} onClose={() => setOpenModal(false)} />
//         )}
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       className="group relative bg-card rounded-xl overflow-hidden card-shadow border border-border/50 cursor-pointer"
//       onClick={onClick}
//       whileHover={{ y: -4 }}
//       transition={{ duration: 0.2 }}
//     >
//       {/* Image */}
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={plant.imageUrl}
//           alt={plant.name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
//           onClick={(e) => {
//             e.stopPropagation();
//             setOpenModal(true);
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

//         {/* Category Badge */}
//         <Badge
//           className="absolute top-3 left-3 text-xs font-medium"
//           style={{ backgroundColor: categoryColor, color: 'white' }}
//         >
//           {plant.category}
//         </Badge>

//         {/* Actions */}
//         <div className="absolute top-3 right-3 flex gap-2">
//           <Button
//             size="icon"
//             variant="ghost"
//             className={cn(
//               'w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background',
//               plant.isLiked && 'text-destructive'
//             )}
//             onClick={handleLike}
//           >
//             <Heart className={cn('w-4 h-4', plant.isLiked && 'fill-current')} />
//           </Button>
//           <Button
//             size="icon"
//             variant="ghost"
//             className={cn(
//               'w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background',
//               plant.isBookmarked && 'text-accent'
//             )}
//             onClick={handleBookmark}
//           >
//             <Bookmark className={cn('w-4 h-4', plant.isBookmarked && 'fill-current')} />
//           </Button>
//         </div>

//         {/* Location */}
//         <div className="absolute bottom-3 left-3 flex items-center gap-1 text-primary-foreground/90 text-xs">
//           <MapPin className="w-3 h-3" />
//           <span>{plant.location.region}</span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
//           {plant.name}
//         </h3>
//         <p className="text-sm text-muted-foreground italic mb-2">{plant.botanicalName}</p>
//         <p className="text-sm text-foreground/80 line-clamp-2 mb-3">{plant.medicinalUse}</p>

//         <div className="flex flex-wrap gap-1 mb-3">
//           {plant.ayushSystem?.map((sys) => (
//             <Badge key={sys} variant="secondary" className="text-xs">
//               {sys}
//             </Badge>
//           ))}
//         </div>

//         <div className="flex items-center gap-1 text-muted-foreground text-sm">
//           <Heart className="w-4 h-4" />
//           <span>{plant.likes} likes</span>
//         </div>
//       </div>

//       {/* Modal */}
//       {openModal && <Modal plant={plant} onClose={() => setOpenModal(false)} />}
//     </motion.div>
//   );
// };

// // Separate Modal Component
// const Modal: React.FC<{ plant: Plant; onClose: () => void }> = ({ plant, onClose }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
//       <div className="absolute inset-0" onClick={onClose} />

//       <div className="relative z-50 max-w-4xl w-full p-6 bg-white rounded-xl shadow-lg overflow-y-auto max-h-[90vh]">
//         <img
//           src={plant.imageUrl}
//           alt={plant.name}
//           className="w-full object-contain mb-4 rounded-lg"
//         />
//         <h2 className="font-serif text-2xl font-bold mb-1">{plant.name}</h2>
//         <p className="italic text-sm mb-2">{plant.botanicalName}</p>
//         <p className="text-base mb-3">{plant.medicinalUse}</p>

//         <div className="flex flex-wrap gap-2 mb-3">
//           {plant.ayushSystem?.map((sys) => (
//             <Badge key={sys} variant="secondary">
//               {sys}
//             </Badge>
//           ))}
//         </div>

//         <div className="flex items-center justify-between text-sm text-muted-foreground">
//           <span>📍 {plant.location.region}</span>
//           <span>❤️ {plant.likes} likes</span>
//         </div>

//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-xl font-bold"
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PlantCard;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Bookmark, MapPin } from 'lucide-react';
import { Plant } from '@/types';
import { getCategoryColor } from '@/data/plants';
import { cn } from '@/lib/utils';
import { useApp } from '@/context/AppContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PlantCardProps {
  plant: Plant;
  variant?: 'default' | 'compact';
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, variant = 'default' }) => {
  const { toggleLikePlant, toggleBookmarkPlant, isAuthenticated } = useApp();
  const categoryColor = getCategoryColor(plant.category);

  const [openModal, setOpenModal] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAuthenticated) toggleLikePlant(plant.id);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAuthenticated) toggleBookmarkPlant(plant.id);
  };

  // Compact variant
  if (variant === 'compact') {
    return (
      <motion.div
        className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-muted/50 cursor-pointer transition-colors border border-border"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <img
          src={plant.imageUrl}
          alt={plant.name}
          className="w-16 h-16 rounded-lg object-cover cursor-pointer"
          onClick={() => setOpenModal(true)}
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground truncate">{plant.name}</h4>
          <p className="text-sm text-muted-foreground truncate">{plant.botanicalName}</p>
        </div>
        <Badge className="shrink-0 text-xs" style={{ backgroundColor: categoryColor, color: 'white' }}>
          {plant.category}
        </Badge>

        {/* Modal */}
        {openModal && <PlantModal plant={plant} onClose={() => setOpenModal(false)} />}
      </motion.div>
    );
  }

  // Default variant
  return (
    <>
      <motion.div
        className="group relative bg-card rounded-xl overflow-hidden card-shadow border border-border/50 cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        onClick={() => setOpenModal(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={plant.imageUrl}
            alt={plant.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

          <Badge
            className="absolute top-3 left-3 text-xs font-medium"
            style={{ backgroundColor: categoryColor, color: 'white' }}
          >
            {plant.category}
          </Badge>

          {/* Actions */}
          <div className="absolute top-3 right-3 flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              className={cn(
                'w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background',
                plant.isLiked && 'text-destructive'
              )}
              onClick={handleLike}
            >
              <Heart className={cn('w-4 h-4', plant.isLiked && 'fill-current')} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className={cn(
                'w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background',
                plant.isBookmarked && 'text-accent'
              )}
              onClick={handleBookmark}
            >
              <Bookmark className={cn('w-4 h-4', plant.isBookmarked && 'fill-current')} />
            </Button>
          </div>

          {/* Location */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-primary-foreground/90 text-xs">
            <MapPin className="w-3 h-3" />
            <span>{plant.location.region}</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {plant.name}
          </h3>
          <p className="text-sm text-muted-foreground italic mb-2">{plant.botanicalName}</p>
          <p className="text-sm text-foreground/80 line-clamp-2 mb-3">{plant.medicinalUse}</p>

          <div className="flex flex-wrap gap-1">
            {plant.ayushSystem?.map((sys) => (
              <Badge key={sys} variant="secondary" className="text-xs">
                {sys}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-1 mt-3 text-muted-foreground text-sm">
            <Heart className="w-4 h-4" />
            <span>{plant.likes} likes</span>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {openModal && <PlantModal plant={plant} onClose={() => setOpenModal(false)} />}
    </>
  );
};

// Modal component
const PlantModal: React.FC<{ plant: Plant; onClose: () => void }> = ({ plant, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-50 max-w-4xl w-full p-6 bg-white rounded-xl shadow-lg overflow-y-auto max-h-[90vh]">
        <img src={plant.imageUrl} alt={plant.name} className="w-full object-contain mb-4 rounded-lg" />
        <h2 className="font-serif text-2xl font-bold mb-1">{plant.name}</h2>
        <p className="italic text-sm mb-2">{plant.botanicalName}</p>
        <p className="text-base mb-3">{plant.medicinalUse}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {plant.ayushSystem?.map((sys) => (
            <Badge key={sys} variant="secondary">{sys}</Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>📍 {plant.location.region}</span>
          <span>❤️ {plant.likes} likes</span>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default PlantCard;

