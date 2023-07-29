import Link from 'next/link';
import { GitHub, Linkedin, Mail } from 'react-feather';

const Home = () => {
    return (
        <div className="grid content-center gap-3 place-items-center h-screen bg-primary">
            <Link href="https://github.com/pallabbarman" target="_blank">
                <button className="flex items-center justify-center gap-2 bg-red-800 px-6 py-3 mx-2 text-white font-semibold bg-gradient-to-r from-gray-700 to-gray-600 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-opacity-50 w-40">
                    <GitHub size={20} /> Github
                </button>
            </Link>
            <Link
                href="https://www.linkedin.com/in/pallabbarman"
                target="_blank"
            >
                <button className="flex items-center justify-center gap-2 bg-red-800 px-6 py-3 mx-2 text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-opacity-50 w-40">
                    <Linkedin size={20} /> Linkedin
                </button>
            </Link>
            <Link href="mailto:pallab.cse.bubt@gmail.com">
                <button className="flex items-center justify-center gap-2 bg-red-800 px-6 py-3 mx-2 text-white font-semibold bg-gradient-to-r from-red-500 to-red-400 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-opacity-50 w-40">
                    <Mail size={20} /> Email
                </button>
            </Link>
        </div>
    );
};

export default Home;
