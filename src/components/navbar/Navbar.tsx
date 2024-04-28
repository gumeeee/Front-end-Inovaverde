import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../contexts/AuthContext.tsx";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../avatar/Avatar.tsx";
import ModalCartProduto from "../produtos/modalProduto/ModalCartProduto.tsx";
import Produto from "../../models/Produto.ts";

const navigation = [
  { name: "Criar Conta", to: "/cadastro", current: false },
  { name: "Login", to: "/login", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  const [produtos, setProdutos] = useState<Produto[]>([]);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  return (
    <Disclosure as="nav" className="bg-green-900">
      {({ open }) => (
        <>
          <div className="relative flex h-16 items-center justify-between pl-16 pr-10">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-green-400 hover:bg-green-700 hover:text-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div
                className="flex flex-shrink-0 items-center"
                style={{ color: "white", fontSize: "24px" }}
              >
                <Link to="/login" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => logout()}>Inova Verde</Link>

              </div>
              {usuario.id == 0 && (
                <div className="hidden sm:flex absolute right-6">
                  <div className="flex justify-end w-full">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-green-900 text-white"
                            : "text-white hover:bg-green-700",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {usuario.id !== 0 && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex justify-center items-center">
                  <div className="relative py-2 pr-2">
                    <div>
                      <ModalCartProduto />
                    </div>
                  </div>
                </div>
                <a className="text-xs text-white bg-green-800 rounded-md px-3 py-1 font-medium">
                  @{usuario.nome}
                </a>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 z-0">
                  <div className="z-2">
                    <Menu.Button className="z-2 relative flex rounded-full bg-green-800 text-sm hover:border-green-300 hover:border-2">
                      <span className="z-2 absolute -inset-1.5" />
                      <span className="sr-only z-2">Open user menu</span>
                      <Avatar foto={usuario.foto} bordercolour="black" size="small"/>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-2 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/perfil"
                            className={classNames(
                              active ? "bg-green-100" : "",
                              "block px-4 py-2 text-sm text-green-700 border-t border-b"
                            )}
                          >
                            <div
                              className={classNames(
                                active ? "bg-green-100" : "",
                                "flex items-center justify-center px-4 py-2"
                              )}
                            >
                              <div className="flex flex-col items-center pb-1 pt-2">
                                {" "}
                                {/* Flex container para organizar elementos em colunas */}
                                <Link to="/perfil">
                                  <Avatar
                                    foto={usuario.foto}
                                    size="big"
                                    bordercolour="black"
                                  />
                                </Link>
                                <span>{usuario.usuario}</span>
                                <span className="font-bold">Créditos: {usuario.creditoCarbono}</span>
                              </div>
                            </div>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/home"
                            className={classNames(
                              active ? "bg-green-100" : "",
                              "block px-4 py-2 text-sm text-green-700 border-t border-b"
                            )}
                          >
                            Home
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/produtos"
                            className={classNames(
                              active ? "bg-green-100" : "",
                              "block px-4 py-2 text-sm text-green-700 border-t border-b"
                            )}
                          >
                            Produtos
                          </Link>
                        )}
                      </Menu.Item>

                      {usuario.id === 1 && (
  <Menu.Item>
    {({ active }) => (
      <Link
        to="/cadastroProduto"
        className={classNames(
          active ? "bg-green-100" : "",
          "block px-4 py-2 text-sm text-green-700 border-t border-b"
        )}
      >
        Criar Produto
      </Link>
    )}
  </Menu.Item>
)}

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/categorias"
                            className={classNames(
                              active ? "bg-green-100" : "",
                              "block px-4 py-2 text-sm text-green-700 border-t border-b"
                            )}
                          >
                            Categorias
                          </Link>
                        )}
                      </Menu.Item>

                      {usuario.id === 1 && (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/cadastroCategoria"
                            className={classNames(
                              active ? "bg-green-100" : "",
                              "block px-4 py-2 text-sm text-green-700 border-t border-b"
                            )}
                          >
                            Criar Categoria
                          </Link>
                        )}
                      </Menu.Item>
                      )}

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/contato"
                            className={classNames(
                              active ? "bg-green-100" : "",
                              "block px-4 py-2 text-sm text-green-700 border-t border-b"
                            )}
                          >
                            Contato
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/integrantes"
                            className={classNames(
                              active ? "bg-green-100" : "",
                              "block px-4 py-2 text-sm text-green-700 border-t border-b"
                            )}
                          >
                            Integrantes
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/sobre"
                            className={classNames(
                              active ? "bg-green-100" : "",
                              "block px-4 py-2 text-sm text-green-700 border-t border-b"
                            )}
                          >
                            Sobre
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/"
                            className={classNames(
                              active ? "bg-green-100" : "",
                              "block px-4 py-2 text-sm text-green-700 border-t border-b"
                            )}
                            onClick={() => logout()}
                          >
                            Sair
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            )}
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link} // Use o componente Link aqui
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-green-900 text-white"
                      : "text-green-300 hover:bg-green-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
