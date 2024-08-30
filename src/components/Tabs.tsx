"use client";
import React from "react";
import { Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DashboardTabs: React.FC = () => {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <Tabs
        variant="underline"
        className="customTabs"
        color="indigo-600"
        ref={tabsRef}
        onActiveTabChange={(tab) => setActiveTab(tab)}
      >
        <Tabs.Item active title="Domestik">
          <div className="flex gap-4">
            <div>
              <label
                htmlFor="kota-asal"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Kota Asal
              </label>
              <div className="mt-2">
                <input
                  id="kota-asal"
                  name="kota-asal"
                  placeholder="Yogyakarta"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="kota-tujuan"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Kota Tujuan
              </label>
              <div className="mt-2">
                <input
                  id="kota-tujuan"
                  name="kota-tujuan"
                  type="text"
                  placeholder="Jakarta Barat"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="berat"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Berat
              </label>
              <div className="mt-2">
                <input
                  id="berat"
                  name="berat"
                  type="text"
                  required
                  placeholder="Gram"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
              type="submit"
              className="self-end h-9  rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Periksa Ongkir
            </button>
          </div>
        </Tabs.Item>

        <Tabs.Item title="Internasional">
          <div className="flex gap-4">
            <div>
              <label
                htmlFor="kota-asal"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Kota Asal
              </label>
              <div className="mt-2">
                <input
                  id="kota-asal"
                  name="kota-asal"
                  placeholder="Yogyakarta"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="kota-tujuan"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Kota Tujuan
              </label>
              <div className="mt-2">
                <input
                  id="kota-tujuan"
                  name="kota-tujuan"
                  type="text"
                  placeholder="Jakarta Barat"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="berat"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Berat
              </label>
              <div className="mt-2">
                <input
                  id="berat"
                  name="berat"
                  type="text"
                  required
                  placeholder="Gram"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
              type="submit"
              className=" self-end h-9  rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Periksa Ongkir
            </button>
          </div>
        </Tabs.Item>

        <Tabs.Item title="Lacak Paket">
          <div className="flex gap-4">
            <div>
              <label
                htmlFor="kota-asal"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                No. Resi
              </label>
              <div className="mt-2">
                <input
                  id="no-resi"
                  name="no-resi"
                  placeholder="Masukan nomor resi pengiriman"
                  type="text"
                  required
                  className="block min-w-96 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="kota-tujuan"
                className="block text-sm mb-[8px] font-medium leading-6 text-gray-900"
              >
                Kurir
              </label>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    JNE
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        JNE
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        TIKI
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        NINJA
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        JNT
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>

            <button
              type="submit"
              className="self-end h-9  rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Lacak Paket
            </button>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default DashboardTabs;
