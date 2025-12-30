import { ImageIcon } from 'lucide-react';

const ImageGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
        <ImageIcon className="h-4 w-4" />
        {title}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((imageId, index) => (
          <div
            key={imageId}
            className="aspect-square rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 flex items-center justify-center overflow-hidden group relative"
          >
            <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-gray-900/10 transition-colors" />
            <div className="text-center p-3 relative z-10">
              <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-xs text-gray-600 font-medium truncate">
                Image {index + 1}
              </p>
              <p className="text-[10px] text-gray-400 truncate mt-1">
                ID: {imageId.slice(0, 8)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
