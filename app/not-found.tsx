import {CgDanger} from "react-icons/cg";
import Link from "next/link";
import {FaArrowLeft} from "react-icons/fa";
const NotFound = () => {
    return (
        <div className={'w-screen h-screen flex items-center justify-center'}>
            <div
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center gap-4">
                <CgDanger className={'text-3xl'}/>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">La page que vous recherchez n'existe pas </p>
                <Link href="/"
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-2">
                    Revenir en lieu sur
                    <FaArrowLeft/>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;