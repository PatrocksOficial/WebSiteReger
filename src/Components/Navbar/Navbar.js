import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Projeto | REGER
      </NavLink>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-project-diagram">
                </i>O Projeto
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/OqueFazemos" exact>
                <i 
                className="fab fa-pagelines">
                </i>O que Fazemos
              </NavLink> 
            </li>
            

            <li className="nav-item">
              <NavLink className="nav-link" to="/ComoFazemos" exact>
                <i 
                className="fas fa-question">
                </i>Como Fazemos
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Crescemos" exact>
                <i 
                className="far fa-clone">
                </i>Crescemos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/OndeEstamos" exact>
                <i 
                className="fas fa-street-view">
                </i>Onde Estamos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Dicas" exact>
                <i 
                className="fas fa-street-view">
                </i>Dicas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/creditos" exact>
                <i 
                className="far fa-copy">
                </i>Créditos
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;