const Footer: React.FC = () => {
  return (
    <footer className="mt-10 bg-slate-800 relative text-gray-200 dark:text-gray-200">
      <div className="container relative">
        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container relative text-center">
            <div className="grid items-center">
              <div className="text-center">
                <p className="mb-0">
                  © {new Date().getFullYear()} E-com. Design with{" "}
                  <i className="mdi mdi-heart text-red-600"></i> by Repliq
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
