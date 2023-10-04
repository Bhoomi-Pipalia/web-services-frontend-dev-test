import ThemeMode from '@/components/Global/ThemeMode';

interface Props {
	children: JSX.Element | JSX.Element[] | string | string[];
}

const Layout = (props: Props) => {

  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-900 px-[1rem] py-[2rem] overflow-hidden h-screen">
        <ThemeMode/>
        { props.children }
      </div>
    </>
  )
};

export default Layout;
