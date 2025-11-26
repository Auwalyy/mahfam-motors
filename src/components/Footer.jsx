import { assets } from "../assets/assets";


const Footer = () => {
    return (
        <div className='px-6 md:px-16 lg:px-25 xl:px-32 mt-60 test-sm text-gray-500'>
            <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-bottom-b'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Premium car rental services with a side selection of luxury and everyday vehicles for all your driving needs.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#"><img src={assets.facebook_logo} className="h-5 w-5" alt="" /></a>
                        <a href="#"><img src={assets.instagram_logo} className="h-5 w-5" alt="" /></a>
                        <a href="#"><img src={assets.twitter_logo} className="h-5 w-5" alt="" /></a>
                        <a href="#"><img src={assets.gmail_logo} className="h-5 w-5" alt="" /></a>

                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List Your Car</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>

                 <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Help Cener</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>

                 <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li>1234 Luxury Drive</li>
                        <li>Kan0 2212, Nigeria</li>
                        <li>+234800900700</li>
                        <li>car@example.com</li>
                    </ul>
                </div>



            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">Car Rentals</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a><span> | </span></li>
                    <li><a href="#">Terms</a> <span>|</span></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    );
};


export default Footer;