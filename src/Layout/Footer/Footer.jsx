const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Book App. All rights reserved.</p>
        <div className="mt-4">
          <a href="/about" className="mx-2 text-sm text-gray-400 hover:text-white">About Us</a>
          <a href="/contact" className="mx-2 text-sm text-gray-400 hover:text-white">Contact</a>
          <a href="/privacy" className="mx-2 text-sm text-gray-400 hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
