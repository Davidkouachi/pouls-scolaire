import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <> 
        <div className="nk-header is-light  nk-header-fixed">
                <div className="container-fluid">
                    <div className="nk-header-wrap">
                        <div className="nk-menu-trigger me-sm-2 d-lg-none">
                            <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav">
                                <em className="icon ni ni-menu"></em>
                            </a>
                        </div>
                        <div className="nk-header-brand">
                            <a href="index-2.html" className="logo-link">
                                <img className="logo-dark logo-img" src="images/logo-dark.png" />
                            </a>
                        </div>
                        <div className="nk-header-menu ms-auto" data-content="headerNav">
                            <ul className="nk-menu nk-menu-main ui-s2">
                                <li className="">
                                    <Link to="/" className="nk-menu-link">
                                        <span className="nk-menu-text">Accueil</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="#" className="nk-menu-link">
                                        <span className="nk-menu-text">Actualités</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="#" className="nk-menu-link">
                                        <span className="nk-menu-text">Astuces & Conseils</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="#" className="nk-menu-link">
                                        <span className="nk-menu-text">Espace Etablisements</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="#" className="nk-menu-link">
                                        <span className="nk-menu-text">Suivi & encadrement</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/offre emploi" className="nk-menu-link">
                                        <span className="nk-menu-text">Offres d'emplois</span>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/formation" className="nk-menu-link">
                                        <span className="nk-menu-text">Formations</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="nk-header-tools">
                            <ul className="nk-quick-nav">
                                <li className="dropdown user-dropdown"><a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                        <div className="user-toggle">
                                            <div className="user-avatar sm">
                                                <em className="icon ni ni-user-alt"></em>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1 is-light">
                                        <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                            <div className="user-card">
                                                <div className="user-avatar"><span>AB</span></div>
                                                <div className="user-info"><span className="lead-text">Abu Bin Ishtiyak</span><span className="sub-text">info@softnio.com</span></div>                                            </div>
                                        </div>
                                        <div className="dropdown-inner">
                                            <ul className="link-list">
                                                <li>
                                                    <a href="user-profile-regular.html">
                                                        <em className="icon ni ni-user-alt"></em>
                                                        <span>Voir profile</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="user-profile-setting.html">
                                                        <em className="icon ni ni-setting-alt"></em>
                                                        <span>Paramettre</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown-inner">
                                            <ul className="link-list">
                                                <li><a href="#"><em className="icon ni ni-signout"></em><span>Se deconnecter</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown user-dropdown"><a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                        <div className="user-toggle">
                                            <div className="user-avatar sm">
                                                <em className="icon ni ni-user-alt"></em>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1 is-light">
                                        <div className="dropdown-inner">
                                            <ul className="link-list">
                                                <li>
                                                    <a href="user-profile-regular.html">
                                                        <em className="icon ni ni-user-alt"></em>
                                                        <span> Connexion</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="user-profile-setting.html">
                                                        <em className="icon ni ni-user-add"></em>
                                                        <span>Inscription</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    </>
  );
}
