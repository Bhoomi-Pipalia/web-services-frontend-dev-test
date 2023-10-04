interface Props {
	children: JSX.Element | JSX.Element[] | string | string[];
}

const Layout = (props: Props) => {

  return (
    <>{ props.children }</>
  )
};

export default Layout;
