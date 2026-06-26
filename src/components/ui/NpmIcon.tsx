interface NpmIconProps {
  className?: string;
}

export function NpmIcon({ className }: NpmIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zm14.337 6.851c.066.002.127.028.165.07.038.042.058.1.054.16v7.838c.004.06-.016.118-.054.16a.217.217 0 0 1-.165.071H8.502a.211.211 0 0 1-.144-.056.198.198 0 0 1-.062-.1.211.211 0 0 1-.062.1.198.198 0 0 1-.144.056H5.193V8.851h2.024v7.838h2.024V8.851h6.858z" />
    </svg>
  );
}
