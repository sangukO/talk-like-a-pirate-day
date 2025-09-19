const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#EAE1B8] p-4 text-center border-t-2 border-[#D1C6A4]">
      <div className="text-sm text-[#6B5B3B] space-y-1">
        <p>
          &copy; {currentYear}{" "}
          <a
            href="https://github.com/sangukO"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline"
          >
            sangukO
          </a>
          <br />
          Inspired by International Talk Like a Pirate Day, Sep 19, 2025.
          <br />
          Crafted with Google Gemini API & a bottle of grog.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
