import Navbar from './Navbar';

const Page = (children, props) => {

    return (
        <div className="page">
            <Navbar theme = {props.theme}/>
        </div>
    );
};

export default Page;