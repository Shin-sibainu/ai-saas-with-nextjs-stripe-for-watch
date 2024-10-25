const Header = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div>
      <h2 className="font-bold sm:text-3xl">{title}</h2>
      {subTitle && <p className="mt-4">{subTitle}</p>}
    </div>
  );
};

export default Header;
