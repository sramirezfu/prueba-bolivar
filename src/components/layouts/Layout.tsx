import Navbar from "../ui/Navbar";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default Layout;
