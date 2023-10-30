import React from 'react';
import { Link } from 'react-router-dom';

export default function Formation() {
  return (
    <>
        <div class="nk-content ">
                <div class="container-fluid">
                    <div class="nk-content-inner">
                        <div class="nk-content-body">
                            <div class="nk-block-head nk-block-head-sm">
                                <div class="nk-block-between">
                                    <div class="nk-block-head-content">
                                        <h3 class="nk-block-title page-title">Formation(s)</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="nk-block pt-4">
                                <div class="row g-gs">
                                    <div class="col-sm-12 col-lg-12 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="row g-gs" >
                                                    <div class="col-lg-3">
                                                        <div class="form-group">
                                                            <div class="form-control-wrap ">
                                                                <select class="form-control  js-select2" >
                                                                    <option value="default_option">
                                                                        Domaine
                                                                    </option>
                                                                    <option value="option_select_name"> 
                                                                        Option select name
                                                                    </option>
                                                                    <option value="option_select_name">
                                                                        Option select name
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-3">
                                                        <div class="form-group">
                                                            <div class="form-control-wrap ">
                                                                <select class="form-control  js-select2" >
                                                                    <option value="default_option">
                                                                        Durée
                                                                    </option>
                                                                    <option value="option_select_name"> 
                                                                        Option select name
                                                                    </option>
                                                                    <option value="option_select_name">
                                                                        Option select name
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-3">
                                                        <div class="form-group">
                                                            <div class="form-control-wrap ">
                                                                <select class="form-control  js-select2" >
                                                                    <option value="default_option">
                                                                        Niveau
                                                                    </option>
                                                                    <option value="option_select_name"> 
                                                                        Option select name
                                                                    </option>
                                                                    <option value="option_select_name">
                                                                        Option select name
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-3">
                                                        <div class="form-group">
                                                            <div class="form-control-wrap">
                                                                <input type="text" class="form-control" placeholder="Recherche specifique" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 text-center">
                                                        <button class="btn btn-primary text-center">
                                                            <i class="ni ni-search me-2" ></i>
                                                            <span>Recherche</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head"><a href="apps-kanban.html" class="project-title">
                                                            <div class="user-avatar sq bg-purple"><span>DD</span></div>
                                                            <div class="project-info">
                                                                <h6 class="title">Titre de la formation</h6><span class="sub-text">Domaine</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>bref résumé de la fomation</p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <ul class="project-users g-1">
                                                                    <li>
                                                                        <em><b>Date d'edittion : </b></em>
                                                                        <span class="me-2" > 10/08/2023</span>
                                                                    </li>
                                                                    <li>
                                                                        <em><b>Durée : </b></em>
                                                                        <span class="me-2" > 3 heure(s)</span>
                                                                    </li>
                                                                    <li>
                                                                        <em><b>lieu : </b></em>
                                                                        <span class="me-2" > Plateau</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <Link to="/formation details" class="btn btn-primary btn-dim">
                                                                    <span class="me-2" >Savoir plus</span>
                                                                    <em class="ni ni-arrow-right"></em>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head"><a href="apps-kanban.html" class="project-title">
                                                            <div class="user-avatar sq bg-purple"><span>DD</span></div>
                                                            <div class="project-info">
                                                                <h6 class="title">Titre de la formation</h6><span class="sub-text">Domaine</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>bref résumé de la fomation</p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <ul class="project-users g-1">
                                                                    <li>
                                                                        <em><b>Date d'edittion : </b></em>
                                                                        <span class="me-2" > 15/08/2023</span>
                                                                    </li>
                                                                    <li>
                                                                        <em><b>Durée : </b></em>
                                                                        <span class="me-2" > 2 heure(s)</span>
                                                                    </li>
                                                                    <li>
                                                                        <em><b>lieu : </b></em>
                                                                        <span class="me-2" > Plateau</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <Link to="/formation details" class="btn btn-primary btn-dim">
                                                                    <span class="me-2" >Savoir plus</span>
                                                                    <em class="ni ni-arrow-right"></em>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head"><a href="apps-kanban.html" class="project-title">
                                                            <div class="user-avatar sq bg-purple"><span>DD</span></div>
                                                            <div class="project-info">
                                                                <h6 class="title">Titre de la formation</h6><span class="sub-text">Domaine</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>bref résumé de la fomation</p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <ul class="project-users g-1">
                                                                    <li>
                                                                        <em><b>Date d'edittion : </b></em>
                                                                        <span class="me-2" > 19/08/2023</span>
                                                                    </li>
                                                                    <li>
                                                                        <em><b>Durée : </b></em>
                                                                        <span class="me-2" > 1 heure(s)</span>
                                                                    </li>
                                                                    <li>
                                                                        <em><b>lieu : </b></em>
                                                                        <span class="me-2" > Plateau</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <Link to="/formation details" class="btn btn-primary btn-dim">
                                                                    <span class="me-2" >Savoir plus</span>
                                                                    <em class="ni ni-arrow-right"></em>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-12 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <nav>    
                                                    <ul class="pagination justify-content-center">        
                                                        <li class="page-item ">
                                                            <a class="page-link" href="#">Prev</a>
                                                        </li>        
                                                        <li class="page-item">
                                                            <a class="page-link" href="#">1</a>
                                                        </li>        
                                                        <li class="page-item">
                                                            <a class="page-link" href="#">2</a>
                                                        </li>        
                                                        <li class="page-item">
                                                            <a class="page-link" href="#">3</a>
                                                        </li>        
                                                        <li class="page-item">
                                                            <a class="page-link" href="#">Next</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  );
}