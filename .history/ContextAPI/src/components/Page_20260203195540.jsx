import Navbar from './Navbar';

const Page = () => {
    // Import your context here
    // const { data } = useContext(YourContext);

    return (
        <div className="page">
            <h1>Page Component</h1>
            <Navbar />
            {/* Add your content here */}
        </div>
    );
};

export default Page;