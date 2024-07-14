import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? 60 : 90;
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        src="/svgRehat.svg"
        alt="Rehat Logo"
        width={size}
        height={size}
        className="mr-1"
      />
    </span>
  );
};

export { Logo };
