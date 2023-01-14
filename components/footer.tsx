import Link from "next/link";
import React, { FunctionComponent } from "react";
import { FaTwitter, FaGithub, FaLink } from 'react-icons/fa';

const Footer: FunctionComponent = ({ }) => (
  <footer>
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <Link href="/">
          <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-300">
              清明ソフト開発
            </span>
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols3">
        <div>
          <h2 className="mb-6 test-sm font-semibold text-gray-900 uppercase dark:text-gray-200">
            サービス
          </h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-4 hover:underline">
              <Link href="/fullfree">
                <a>Fullfreeカスタマイズ</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-4" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/"><a className="hover:underline">清明ソフト開発</a></Link>
      </span>
      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <Link href="https://twitter.com/aoki_kouya">
          <a>
            <FaTwitter size={20} color="gray" />
            <span className="sr-only">Twitter account</span>
          </a>
        </Link>
        <Link href="https://github.com/kouya17">
          <a>
            <FaGithub size={20} color="gray" />
            <span className="sr-only">GitHub account</span>
          </a>
        </Link>
        <Link href="https://kouya17.com">
          <a>
            <FaLink size={20} color="gray" />
            <span className="sr-only">Blog</span>
          </a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;