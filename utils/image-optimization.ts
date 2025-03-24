import Image, { type ImageProps as NextImageProps } from "next/image"

type OptimizedImageProps = {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  isHero?: boolean
  className?: string
  sizes?: string
} & Omit<NextImageProps, "src" | "alt" | "width" | "height" | "priority" | "className" | "sizes">

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  isHero = false,
  className = "",
  sizes,
  ...props
}: OptimizedImageProps) {
  // Calculate aspect ratio for proper sizing
  const aspectRatio = width / height

  // Determine sizes attribute based on image role
  const sizesProp =
    sizes || (isHero ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw")

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      sizes={sizesProp}
      priority={priority || isHero}
      quality={isHero ? 90 : 85}
      className={className}
      {...props}
    />
  )
}

