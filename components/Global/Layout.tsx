import ThemeMode from '@/components/Global/ThemeMode';

interface Props {
	children: JSX.Element | JSX.Element[] | string | string[];
}

const Layout = (props: Props) => {

  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-900 px-[1rem] py-[2rem] overflow-hidden h-screen">
        <ThemeMode/>
        <div className="flex flex-col gap-[1rem] bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 shadow-lg rounded-[0.8rem] p-[2rem] overflow-scroll h-[calc(100%-40px)] md:w-[37.5rem] md:max-w-full md:mx-auto lg:h-full">
          { props.children }
        </div>
      </div>
    </>
  )
};

export default Layout;
