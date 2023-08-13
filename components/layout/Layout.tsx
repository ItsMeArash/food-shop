import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="flex justify-between max-w-[900px] m-auto align-center py-5 text-base lg:text-lg xl:text-xl sm:p-3 md:p-5">
        <div>
          <Link href="/" className="text-header font-semibold ">
            IMA Food
          </Link>
        </div>
        <div>
          <Link href="/menu" className="ml-4 text-dimgrey font-medium">
            Menu
          </Link>
          <Link href="/categories" className="ml-4 text-dimgrey font-medium">
            Categories
          </Link>
        </div>
      </header>
      <div className="min-h-[1000px]">{children}</div>
      <footer className="bg-green-400 text-white text-center py-2 mt-8">
        <a
          href="https://github.com/ItsMeArash"
          target="_blank"
          rel="noreferrer"
          className="text-green-900"
        >
          Github Profile
        </a>
      </footer>
    </>
  );
};

export default Layout;
