import React, { FunctionComponent } from "react";
import { FaTwitter, FaGithub, FaLink } from 'react-icons/fa';

const Footer: FunctionComponent = ({}) => (
    <div>
        <div className="flex justify-center">
            <a href="https://twitter.com/aoki_kouya"><FaTwitter size={32} color="gray" className="mx-2"/></a>
            <a href="https://github.com/kouya17"><FaGithub size={32} color="gray" className="mx-2"/></a>
            <a href="https://kouya17.com"><FaLink size={32} color="gray" className="mx-2"/></a>
        </div>
        <div className="pt-3 pb-6 px-4 w-100 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-300">&copy; 2022 清明ソフト開発</span>
        </div>
    </div>
);

export default Footer;