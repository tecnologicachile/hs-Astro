import { Fragment, useState, useEffect } from 'react';
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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top contact bar */}
      <div className="bg-gray-900 hidden md:block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-center py-1.5">
            <span className="text-xs text-gray-500">
              Especialistas en Softland ERP desde 2005
            </span>
            <div className="flex items-center gap-5">
              <a
                href="mailto:contacto@hostingsistemas.cl"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-3 w-3" />
                contacto@hostingsistemas.cl
              </a>
              <a
                href="tel:800914659"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-3 w-3" />
                <span className="font-medium">800 914 659</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hosting Sistemas</span>
            <img
              src="/logo-header.png"
              alt="Hosting Sistemas Chile"
              className="h-9 w-auto"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-7">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu ? (
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <a
                    href={item.href}
                    className={clsx(
                      'flex items-center gap-x-1 text-sm font-medium leading-6 transition-colors duration-200 py-2',
                      isActive(item.href)
                        ? 'text-hs-blue'
                        : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={clsx(
                        'h-3.5 w-3.5 transition-transform duration-200',
                        openDropdown ? 'rotate-180' : ''
                      )}
                      aria-hidden="true"
                    />
                  </a>

                  {/* Dropdown menu */}
                  <Transition
                    show={openDropdown}
                    as={Fragment}
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <div className="absolute left-1/2 z-10 mt-1 flex w-screen max-w-sm -translate-x-1/2">
                      <div className="w-full overflow-hidden rounded-lg bg-white text-sm shadow-lg ring-1 ring-gray-200">
                        <div className="p-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className={clsx(
                                'group block rounded-md px-3 py-2.5 transition-colors duration-200',
                                isActive(subItem.href)
                                  ? 'bg-hs-blue/5'
                                  : 'hover:bg-gray-50'
                              )}
                            >
                              <p className={clsx(
                                'text-sm font-medium',
                                isActive(subItem.href) ? 'text-hs-blue' : 'text-gray-900 group-hover:text-hs-blue'
                              )}>
                                {subItem.name}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {subItem.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
              ) : (
                <a
                  href={item.href}
                  className={clsx(
                    'text-sm font-medium leading-6 transition-colors duration-200 py-2 relative',
                    isActive(item.href)
                      ? 'text-hs-blue'
                      : 'text-gray-600 hover:text-gray-900'
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-hs-blue" />
                  )}
                </a>
              )}
            </div>
          ))}

          {/* CTA */}
          <a
            href="/contacto"
            className="ml-3 rounded-lg bg-hs-blue px-4 py-2 text-sm font-medium text-white hover:bg-hs-blue-light transition-colors duration-200"
          >
            Contáctanos
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/20" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-5 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hosting Sistemas</span>
              <img
                src="/logo-header.png"
                alt="Hosting Sistemas Chile"
                className="h-9 w-auto"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-lg p-2.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className={clsx(
                              'flex w-full items-center justify-between rounded-md py-2.5 pl-3 pr-3 text-sm font-medium transition-colors duration-200',
                              isActive(item.href)
                                ? 'text-hs-blue'
                                : 'text-gray-900 hover:bg-gray-50'
                            )}>
                              {item.name}
                              <ChevronDown
                                className={clsx(
                                  'h-4 w-4 flex-none transition-transform duration-200 text-gray-400',
                                  open ? 'rotate-180' : ''
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-1 space-y-0.5 pl-4">
                              <a
                                href={item.href}
                                className="block rounded-md py-2 pl-3 pr-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                              >
                                Ver todos los servicios
                              </a>
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={clsx(
                                    'block rounded-md py-2 pl-3 pr-3 text-sm transition-colors duration-200',
                                    isActive(subItem.href)
                                      ? 'text-hs-blue font-medium'
                                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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
                          '-mx-3 block rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200',
                          isActive(item.href)
                            ? 'text-hs-blue'
                            : 'text-gray-900 hover:bg-gray-50'
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="py-6">
                <a
                  href="/contacto"
                  className="block w-full text-center rounded-lg bg-hs-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-hs-blue-light transition-colors duration-200"
                >
                  Contáctanos
                </a>
              </div>

              {/* Contact */}
              <div className="py-6 space-y-3">
                <a href="tel:800914659" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <Phone className="h-4 w-4 text-gray-400" />
                  800 914 659
                </a>
                <a href="mailto:contacto@hostingsistemas.cl" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <Mail className="h-4 w-4 text-gray-400" />
                  contacto@hostingsistemas.cl
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
