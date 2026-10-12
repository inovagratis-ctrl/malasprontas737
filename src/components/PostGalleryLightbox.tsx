"use client";

import { useState, useEffect, useCallback } from "react";
import {
  MapPin,
  Compass,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Expand
} from "lucide-react";

interface GalleryItem {
  url: string;
  caption: string;
}

interface PostGalleryLightboxProps {
  coverImage: string;
  destination: string;
  stateCountry: string;
  postTitle: string;
  gallery: GalleryItem[];
}

export default function PostGalleryLightbox({
  coverImage,
  destination,
  stateCountry,
  postTitle,
  gallery
}: PostGalleryLightboxProps) {
  // Deduplicate: filter out gallery items that have the exact same URL as coverImage
  const filteredGallery = (gallery || []).filter(item => item.url !== coverImage);

  const allImages: GalleryItem[] = [
    {
      url: coverImage,
      caption: `${destination} — ${stateCountry} (${postTitle})`
    },
    ...filteredGallery
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    document.body.style.overflow = "unset";
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [allImages.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [allImages.length]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPanPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const toggleDoubleZoom = () => {
    if (zoomLevel > 1) {
      handleResetZoom();
    } else {
      setZoomLevel(2);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
      if (e.key === "0") handleResetZoom();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  // Mouse pan handlers when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsPanning(true);
    setStartPan({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning || zoomLevel <= 1) return;
    setPanPosition({
      x: e.clientX - startPan.x,
      y: e.clientY - startPan.y
    });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const currentPhoto = allImages[currentIndex];

  return (
    <>
      {/* 1. FOTO PRINCIPAL EM DESTAQUE */}
      <div className="rounded-3xl overflow-hidden border border-stone-200/90 shadow-lg mb-12 bg-stone-100 group">
        <div
          onClick={() => openLightbox(0)}
          className="relative h-72 sm:h-96 w-full cursor-zoom-in overflow-hidden"
          role="button"
          tabIndex={0}
          aria-label="Ampliar foto de destaque"
        >
          <img
            src={coverImage}
            alt={postTitle}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Hover Zoom Badge */}
          <div className="absolute top-4 right-4 bg-black/75 hover:bg-black/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20 transition-all group-hover:scale-105">
            <Expand className="w-3.5 h-3.5 text-orange-400" />
            <span>Clique para ampliar foto</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium flex items-center justify-between drop-shadow-md">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span>
                {destination} — {stateCountry}
              </span>
            </div>
            <span className="hidden sm:inline-block text-[11px] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              Foto 1 de {allImages.length}
            </span>
          </div>
        </div>
      </div>

      {/* 2. GALERIA DE FOTOS DO DESTINO */}
      {filteredGallery && filteredGallery.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-orange-600" />
              Galeria de Fotos do Destino
            </h2>
            <span className="text-xs text-stone-700 font-medium bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
              {filteredGallery.length} fotos exclusivas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredGallery.map((photo, i) => {
              const imageIndex = i + 1; // cover is index 0
              return (
                <div
                  key={i}
                  onClick={() => openLightbox(imageIndex)}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 group cursor-zoom-in"
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver foto ampliada: ${photo.caption}`}
                >
                  <div className="relative h-64 overflow-hidden bg-stone-100">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                    {/* Hover Zoom Overlay Badge */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-stone-900/85 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                        <ZoomIn className="w-4 h-4 text-orange-400" />
                        <span>Ver foto completa</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-stone-50 text-xs text-stone-700 font-medium flex items-center justify-between gap-2 border-t border-stone-100">
                    <span className="line-clamp-2 leading-relaxed">{photo.caption}</span>
                    <span className="text-[10px] text-stone-700 font-bold shrink-0 bg-white px-2 py-0.5 rounded-md border border-stone-200">
                      {imageIndex + 1}/{allImages.length}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 3. MODAL LIGHTBOX COM ZOOM TOTAL & DESIGN ELEGANTE */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col justify-between select-none animate-in fade-in duration-200"
          onMouseUp={handleMouseUp}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {/* FLOATING TOP-RIGHT CLOSE BUTTON (SEMPRE VISÍVEL E FIXO NO TOPO DIREITO) */}
          <button
            onClick={closeLightbox}
            className="fixed top-3 right-3 sm:top-5 sm:right-6 z-[999999] flex items-center gap-2 bg-stone-900/95 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-stone-600/90 shadow-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Fechar foto (ESC)"
            aria-label="Fechar visualizador"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            <span>Fechar</span>
          </button>

          {/* Top Bar with Clean Minimalist Controls */}
          <div className="relative z-[100000] flex items-center justify-between gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 bg-stone-950/95 border-b border-stone-800/80 text-white shrink-0 pr-24 sm:pr-32">
            {/* Destination Tag & Counter */}
            <div className="flex items-center gap-2 min-w-0">
              <span className="bg-orange-600 text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider truncate max-w-[110px] sm:max-w-none">
                {destination}
              </span>
              <span className="text-xs sm:text-sm text-stone-300 font-medium whitespace-nowrap">
                {currentIndex + 1} de {allImages.length}
              </span>
            </div>

            {/* Controls: Zoom In/Out, Percentage, Reset */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-1.5 sm:p-2 rounded-xl bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 disabled:opacity-30 border border-stone-800 transition-colors cursor-pointer"
                title="Diminuir Zoom (-)"
                aria-label="Diminuir Zoom"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="text-[11px] sm:text-xs font-mono font-bold text-stone-300 w-9 sm:w-11 text-center">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-1.5 sm:p-2 rounded-xl bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 disabled:opacity-30 border border-stone-800 transition-colors cursor-pointer"
                title="Aumentar Zoom (+)"
                aria-label="Aumentar Zoom"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={handleResetZoom}
                disabled={zoomLevel === 1}
                className="p-1.5 sm:p-2 rounded-xl bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 disabled:opacity-30 border border-stone-800 transition-colors cursor-pointer hidden md:inline-flex"
                title="Ajustar Tamanho Original (0)"
                aria-label="Ajustar Tamanho Original"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Viewport & Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center overflow-hidden p-2 sm:p-6 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeLightbox();
              }
            }}
          >
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-stone-900/85 hover:bg-orange-600 text-white backdrop-blur-md border border-white/10 shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer"
              title="Foto Anterior (Seta Esquerda)"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-stone-900/85 hover:bg-orange-600 text-white backdrop-blur-md border border-white/10 shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer"
              title="Próxima Foto (Seta Direita)"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Zoomable Image Container */}
            <div
              className="relative max-w-full max-h-[72vh] flex items-center justify-center transition-transform duration-100 ease-out"
              style={{
                transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`
              }}
              onDoubleClick={toggleDoubleZoom}
              title="Duplo clique para alternar zoom"
            >
              <img
                key={currentPhoto.url}
                src={currentPhoto.url}
                alt={currentPhoto.caption}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] sm:max-h-[74vh] max-w-[92vw] object-contain rounded-xl shadow-2xl pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Lightbox Footer & Thumbnail Strip */}
          <div className="relative z-[100000] bg-stone-950/95 border-t border-stone-800/80 px-4 py-3 sm:py-4 flex flex-col items-center gap-3 shrink-0">
            {/* Caption with close hint */}
            <div className="flex items-center justify-between gap-4 max-w-3xl w-full px-2">
              <p className="text-stone-200 text-xs sm:text-sm font-medium text-center flex-1 leading-relaxed line-clamp-2">
                {currentPhoto.caption}
              </p>
              <button
                onClick={closeLightbox}
                className="hidden md:flex items-center gap-1.5 text-xs text-stone-300 hover:text-white bg-stone-900 hover:bg-stone-800 px-3 py-1 rounded-lg border border-stone-700 transition-colors shrink-0 cursor-pointer font-semibold"
                title="Fechar visualizador"
              >
                <X className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>ESC ou clique fora para fechar</span>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 px-2 scrollbar-thin">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setZoomLevel(1);
                    setPanPosition({ x: 0, y: 0 });
                  }}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    idx === currentIndex
                      ? "border-orange-500 scale-105 shadow-md shadow-orange-500/30 ring-2 ring-orange-500/20"
                      : "border-stone-700 opacity-60 hover:opacity-100 hover:border-stone-500"
                  }`}
                  aria-label={`Ir para foto ${idx + 1}`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
