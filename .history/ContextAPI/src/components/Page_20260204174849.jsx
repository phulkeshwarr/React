import Navbar from './Navbar';

/**
 * Page Component - A container component that renders the main page content.
 *
 * This component demonstrates how child components can be structured within
 * the theme context. The Navbar component (which uses theme context) is rendered here.
 * Other page-specific content can be added as needed.
 */
const Page = () => {
  return (
    <div className="page">
      <Navbar />
      {/* Additional page content can be added here */}
    </div>
  );
};

export default Page;