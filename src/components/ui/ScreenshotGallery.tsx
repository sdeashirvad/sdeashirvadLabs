import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface ScreenshotGalleryProps {
  images: string[];
  productName: string;
}

export function ScreenshotGallery({
  images,
  productName,
}: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeIndex !== null) {
      dialog.showModal();
      closeButtonRef.current?.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [activeIndex]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="content-gap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group image-hover overflow-hidden rounded-lg border border-border bg-background text-left card-hover focus-visible:outline-offset-4"
            aria-label={`View ${productName} screenshot ${i + 1}`}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={src}
                alt={`${productName} screenshot ${i + 1}`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
                width={640}
                height={360}
              />
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="max-w-[min(90vw,1200px)] border-0 bg-transparent p-0 backdrop:bg-black/80"
        aria-modal="true"
        aria-label={`${productName} screenshot preview`}
        onClose={() => setActiveIndex(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setActiveIndex(null);
        }}
      >
        {activeIndex !== null && (
          <div className="relative">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground hover:border-border-hover"
              aria-label="Close screenshot preview"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={images[activeIndex]}
              alt={`${productName} screenshot ${activeIndex + 1}`}
              className="max-h-[85vh] w-full rounded-lg border border-border object-contain"
            />
          </div>
        )}
      </dialog>
    </>
  );
}
