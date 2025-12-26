const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-black text-white mb-4 italic">SKILLSWAP</h2>
          <p className="text-sm leading-relaxed opacity-70">The world's leading community for skill exchange. Learn, teach, and grow together.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold mb-2 text-lg">Quick Links</h3>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div>
          <h3 className="text-white font-bold mb-2 text-lg">Newsletter</h3>
          <div className="join w-full mt-2">
            <input className="input input-bordered join-item w-full bg-gray-800 border-none focus:outline-none" placeholder="Email" />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="divider divider-neutral opacity-20 my-8"></div>
      <p className="text-center text-xs opacity-50">© 2025 SkillSwap Global. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;