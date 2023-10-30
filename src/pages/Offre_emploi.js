import React from 'react';
import { Link } from 'react-router-dom';

export default function Offre_emploi() {
  return (
    <>
        <div class="nk-content ">
                <div class="container-fluid">
                    <div class="nk-content-inner">
                        <div class="nk-content-body">
                            <div class="nk-block-head nk-block-head-sm">
                                <div class="nk-block-between">
                                    <div class="nk-block-head-content">
                                        <h3 class="nk-block-title page-title">Offre(s) d'emploi(s)</h3>
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
                                                                        Secteur
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
                                                                        Localisation
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
                                                                        Type de post
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
                                                                <h6 class="title">Titre offre</h6><span class="sub-text">secteur d'activité</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>bref résumé du post</p>
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
                                                                        <em><b>Date limite : </b></em>
                                                                        <span class="me-2" > 20/08/2023</span>
                                                                    </li>
                                                                    <li>
                                                                        <em><b>lieu : </b></em>
                                                                        <span class="me-2" > Plateau</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-primary">
                                                            <div class="progress-bar" data-progress="100"></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <Link to="/details offre emploi" class="btn btn-primary btn-dim">
                                                                    <span class="me-2" >Savoir plus</span>
                                                                    <em class="ni ni-arrow-right"></em>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <span class="badge bg-success ">
                                                            <span>Type d'offre</span>
                                                        </span>
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
                                                                <h6 class="title">Titre offre</h6><span class="sub-text">secteur d'activité</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>bref résumé du post</p>
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
                                                                        <em><b>Date limite : </b></em>
                                                                        <span class="me-2" > 20/08/2023</span>
                                                                    </li>
                                                                    <li>
                                                                        <em><b>lieu : </b></em>
                                                                        <span class="me-2" > Plateau</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-primary">
                                                            <div class="progress-bar" data-progress="100"></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <Link to="/details offre emploi" class="btn btn-primary btn-dim">
                                                                    <span class="me-2" >Savoir plus</span>
                                                                    <em class="ni ni-arrow-right"></em>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <span class="badge bg-danger ">
                                                            <span>Type d'offre</span>
                                                        </span>
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
                                                                <h6 class="title">Titre offre</h6><span class="sub-text">secteur d'activité</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>bref résumé du post</p>
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
                                                                        <em><b>Date limite : </b></em>
                                                                        <span class="me-2" > 20/08/2023</span>
                                                                    </li>
                                                                    <li>
                                                                        <em><b>lieu : </b></em>
                                                                        <span class="me-2" > Plateau</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-primary">
                                                            <div class="progress-bar" data-progress="100"></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <Link to="/details offre emploi" class="btn btn-primary btn-dim">
                                                                    <span class="me-2" >Savoir plus</span>
                                                                    <em class="ni ni-arrow-right"></em>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <span class="badge bg-warning ">
                                                            <span>Type d'offre</span>
                                                        </span>
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
