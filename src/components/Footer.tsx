// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} TechX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
