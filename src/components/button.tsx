const ButtonCTA = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      href={href}
      className="bg-[#0097b2] text-white px-4 py-2 text-md tracking-wider font-normal hover:bg-[#007c91] transition w-fit text-xs text-center md:text-md"
    >
      {text}
    </a>
  );
};

export default ButtonCTA;
