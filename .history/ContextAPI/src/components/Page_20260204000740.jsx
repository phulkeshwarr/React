import Navbar from './Navbar';

const Page = (children, props) => {

    console.log(props.theme);
    

    return (
        <div className="page">
            <Navbar theme = {props.theme}/>
        </div>
    );
};

export default Page;