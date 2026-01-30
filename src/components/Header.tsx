import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
import { Menu, X, ChevronDown, Mail, Phone, MessageCircle } from 'lucide-react';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Quienes somos', href: '/quienes-somos' },
  {
    name: 'Servicios',
    href: '/servicios',
    submenu: [
      { name: 'Hosting E-commerce', href: '/servicios/hosting-woocommerce', description: 'WooCommerce, PrestaShop, Magento' },
      { name: 'Hosting Softland ERP', href: '/servicios/hosting-softland-erp', description: 'Servidores Windows dedicados' },
      { name: 'Sincronización', href: '/servicios/sincronizacion', description: 'ERPSync - Integración automática' },
      { name: 'Soporte Softland ERP', href: '/servicios/soporte-softland-erp', description: 'Asistencia técnica especializada' },
    ]
  },
  { name: 'Casos de éxito', href: '/casos-de-exito' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-lg bg-white/95">
      {/* Top contact bar - Desktop only */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 hidden md:block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span className="text-green-400 text-xs font-medium px-2 py-0.5 bg-green-400/10 rounded-full">
                20+ años de experiencia
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:contacto@hostingsistemas.cl"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>contacto@hostingsistemas.cl</span>
              </a>
              <a
                href="tel:800914659"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">800 914 659</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hosting Sistemas</span>
            <img
              src="/logo-header.png"
              alt="Hosting Sistemas Chile - Especialistas en Softland ERP y E-commerce"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu ? (
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <button
                    className={clsx(
                      'flex items-center gap-x-1 text-sm font-semibold leading-6 transition-colors duration-200 py-2',
                      isActive(item.href)
                        ? 'text-hs-blue'
                        : 'text-gray-900 hover:text-hs-blue'
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={clsx(
                        'h-4 w-4 transition-transform duration-200',
                        openDropdown ? 'rotate-180' : ''
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Dropdown menu */}
                  <Transition
                    show={openDropdown}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <div className="absolute left-1/2 z-10 mt-0 flex w-screen max-w-md -translate-x-1/2 px-4">
                      <div className="w-full flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-xl ring-1 ring-gray-900/5">
                        <div className="p-3">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className={clsx(
                                'group flex gap-x-4 rounded-lg p-3 transition-colors duration-150',
                                isActive(subItem.href)
                                  ? 'bg-hs-blue/5 text-hs-blue'
                                  : 'hover:bg-gray-50'
                              )}
                            >
                              <div>
                                <p className={clsx(
                                  'font-semibold',
                                  isActive(subItem.href) ? 'text-hs-blue' : 'text-gray-900 group-hover:text-hs-blue'
                                )}>
                                  {subItem.name}
                                </p>
                                <p className="mt-0.5 text-xs text-gray-500">
                                  {subItem.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-4 py-3">
                          <a
                            href="/servicios"
                            className="text-sm font-medium text-hs-blue hover:text-hs-blue-light transition-colors"
                          >
                            Ver todos los servicios →
                          </a>
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
              ) : (
                <a
                  href={item.href}
                  className={clsx(
                    'text-sm font-semibold leading-6 transition-colors duration-200 py-2 relative',
                    isActive(item.href)
                      ? 'text-hs-blue'
                      : 'text-gray-900 hover:text-hs-blue'
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-hs-blue rounded-full" />
                  )}
                </a>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <a
            href="/contacto"
            className="ml-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-hs-blue to-hs-blue-light px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:from-hs-blue-light hover:to-hs-blue transform hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="h-4 w-4" />
            Contáctanos
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-5 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hosting Sistemas</span>
              <img
                src="/logo-header.png"
                alt="Hosting Sistemas Chile"
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className={clsx(
                              'flex w-full items-center justify-between rounded-lg py-3 pl-3 pr-3.5 text-base font-semibold leading-7 transition-colors duration-150',
                              isActive(item.href)
                                ? 'text-hs-blue bg-hs-blue/5'
                                : 'text-gray-900 hover:bg-gray-50'
                            )}>
                              {item.name}
                              <ChevronDown
                                className={clsx(
                                  'h-5 w-5 flex-none transition-transform duration-200',
                                  open ? 'rotate-180' : ''
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-1 pl-4">
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={clsx(
                                    'block rounded-lg py-2.5 pl-4 pr-3 text-sm font-medium leading-7 transition-colors duration-150',
                                    isActive(subItem.href)
                                      ? 'text-hs-blue bg-hs-blue/5'
                                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                  )}
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <a
                        href={item.href}
                        className={clsx(
                          '-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 transition-colors duration-150',
                          isActive(item.href)
                            ? 'text-hs-blue bg-hs-blue/5'
                            : 'text-gray-900 hover:bg-gray-50'
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button Mobile */}
              <div className="py-6">
                <a
                  href="/contacto"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-hs-blue to-hs-blue-light px-5 py-3 text-base font-semibold text-white shadow-md"
                >
                  <MessageCircle className="h-5 w-5" />
                  Contáctanos
                </a>
              </div>

              {/* Contact info in mobile menu */}
              <div className="py-6">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-4">Contacto directo</p>
                <div className="flex flex-col space-y-4">
                  <a href="tel:800914659" className="flex items-center space-x-3 text-gray-700 hover:text-hs-blue transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">800 914 659</p>
                      <p className="text-xs text-gray-500">Llámanos</p>
                    </div>
                  </a>
                  <a href="mailto:contacto@hostingsistemas.cl" className="flex items-center space-x-3 text-gray-700 hover:text-hs-blue transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">contacto@hostingsistemas.cl</p>
                      <p className="text-xs text-gray-500">Respuesta en 24h</p>
                    </div>
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
