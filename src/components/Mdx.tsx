// src/components/Mdx.tsx
import { MDXRemote } from "next-mdx-remote/rsc";

export function ImageRow({ images }: { images: string[] }) {
  return (
    <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-3">
      {images.map((src) => (
        <img key={src} src={src} className="rounded-lg object-cover" alt="" />
      ))}
    </div>
  );
}

export function TextWithImage({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 grid items-center gap-8 md:grid-cols-2">
      <div>{children}</div>
      <img src={image} className="rounded-xl object-cover" alt="" />
    </div>
  );
}

export default function Mdx({
  source,
  imageClass = "my-6 mx-auto w-full max-w-lg rounded-xl border border-black/20 shadow",
  pClass = "mb-4 leading-relaxed opacity-90",
  h2Class = "mt-10 mb-3 text-2xl font-semibold",
}: {
  source: string;
  imageClass?: string;
  pClass?: string;
  h2Class?: string;
}) {
  return (
    <MDXRemote
      source={source}
      components={{
        p: (props) => <p className={pClass} {...props} />,
        h2: (props) => <h2 className={h2Class} {...props} />,
        img: (props) => <img {...props} className={imageClass} />,
        a: (props) => <a {...props} className="underline" />,
        ul: (props) => <ul className="mb-4 list-disc pl-6 space-y-1" {...props} />,
        ImageRow,
        TextWithImage,
      }}
    />
  );
}