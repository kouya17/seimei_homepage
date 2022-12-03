import Link from "next/link";
import React, { FunctionComponent } from "react";
import { MenuItem } from "../lib/models";

interface NavigationProps {
  title: string;
  menu: MenuItem[];
}

const Navigation: FunctionComponent<NavigationProps> = ({ title, menu }) => (
  <nav className="bg-white border-b border-gray-200 dark:border-gray-600 px-2 py-2.5 dark:bg-gray-900 sticky top-0 z-50">
    <div className="container px-5 flex flex-wrap justify-between items-center mx-auto">
      <Link href="/">
        <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TOP</span>
        </a>
      </Link>
      <div className="block w-auto">
        <ul className="flex border-gray-100 flex-row space-x-8 mt-0 text-sm font-medium border-0 dark:bg-gray-900">
          {menu.map((e, i) => {
            return (
              <li key={i}>
                <Link href={e.path}>
                  <a className="bg-blue-700 rounded bg-transparent text-blue-700 p-0 dark:text-white">{e.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;