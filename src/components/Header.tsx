import { Fragment, useState } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
import { Menu, X, ChevronDown, Mail, Phone } from 'lucide-react';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Quienes somos', href: '/quienes-somos' },
  {
    name: 'Servicios',
    href: '/servicios',
    submenu: [
      { name: 'Hosting E-commerce', href: '/servicios/hosting-woocommerce' },
      { name: 'Hosting Softland ERP', href: '/servicios/hosting-softland-erp' },
      { name: 'Sincronización', href: '/servicios/sincronizacion' },
      { name: 'Soporte Softland ERP', href: '/servicios/soporte-softland-erp' },
    ]
  },
  { name: 'Casos de éxito', href: '/casos-de-exito' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-lg bg-white/95">
      {/* Top contact bar - Fixed, only visible on desktop */}
      <div className="bg-black border-b border-gray-800 hidden md:block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-end items-center py-2 space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="h-4 w-4" />
              <a href="mailto:contacto@hostingsistemas.cl" className="hover:text-white transition-colors duration-200">
                contacto@hostingsistemas.cl
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="h-4 w-4" />
              <a href="tel:800914659" className="hover:text-white transition-colors duration-200">
                800 914 659
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hosting Sistemas</span>
            <img 
              src="https://hostingsistemas.cl/wp-content/uploads/2023/11/Hosting-Sistemas-Vector-File.png" 
              alt="Hosting Sistemas" 
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu ? (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-hs-blue transition-colors duration-200">
                        {item.name}
                        <ChevronDown
                          className={clsx(
                            'h-4 w-4 transition-transform duration-200',
                            open ? 'rotate-180' : ''
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Disclosure.Panel className="absolute left-1/2 z-10 mt-3 flex w-screen max-w-max -translate-x-1/2 px-4">
                          <div className="w-screen max-w-sm flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                              {item.submenu.map((subItem) => (
                                <div key={subItem.name} className="group relative flex gap-x-6 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-150">
                                  <div>
                                    <a href={subItem.href} className="font-medium text-gray-900 hover:text-hs-blue transition-colors duration-200">
                                      {subItem.name}
                                      <span className="absolute inset-0" />
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ) : (
                <a href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-hs-blue transition-colors duration-200">
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </nav>
      
      {/* Mobile menu - Optimized */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/20" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hosting Sistemas</span>
              <img 
                src="https://hostingsistemas.cl/wp-content/uploads/2023/11/Hosting-Sistemas-Vector-File.png" 
                alt="Hosting Sistemas" 
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-3 pl-3 pr-3.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50 transition-colors duration-150">
                              {item.name}
                              <ChevronDown
                                className={clsx(
                                  'h-5 w-5 flex-none transition-transform duration-200',
                                  open ? 'rotate-180' : ''
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {item.submenu.map((subItem) => (
                                <Disclosure.Button
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className="block rounded-lg py-2.5 pl-6 pr-3 text-sm font-medium leading-6 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <a
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              {/* Contact info in mobile menu */}
              <div className="py-6">
                <div className="flex flex-col space-y-4">
                  <a href="tel:800914659" className="flex items-center space-x-3 text-sm text-gray-600 hover:text-hs-blue transition-colors">
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">800 914 659</span>
                  </a>
                  <a href="mailto:contacto@hostingsistemas.cl" className="flex items-center space-x-3 text-sm text-gray-600 hover:text-hs-blue transition-colors">
                    <Mail className="h-5 w-5" />
                    <span className="font-medium">contacto@hostingsistemas.cl</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}