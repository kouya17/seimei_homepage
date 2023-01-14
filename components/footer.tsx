import React, { FunctionComponent } from "react";
import { FaTwitter, FaGithub, FaLink } from 'react-icons/fa';

const Footer: FunctionComponent = ({}) => (
    <footer>
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-300">
                        清明ソフト開発
                    </span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols3">
                <div>
                    <h2 className="mb-6 test-sm font-semibold text-gray-900 uppercase dark:text-gray-200">
                        サービス
                    </h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4 hover:underline">
                            <a href="/fullfree">
                                Fullfreeカスタマイズ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">清明ソフト開発</a>
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="https://twitter.com/aoki_kouya"><FaTwitter size={20} color="gray"/></a>
                <a href="https://github.com/kouya17"><FaGithub size={20} color="gray"/></a>
                <a href="https://kouya17.com"><FaLink size={20} color="gray"/></a>
            </div>
        </div>
    </footer>
);

export default Footer;