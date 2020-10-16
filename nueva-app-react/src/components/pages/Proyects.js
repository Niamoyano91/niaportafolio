import React from 'react';
import '../../App.css';
import '../pages/Proyects.css'

export default function Proyects() {
    return (
        <div className="containerProyects">
            <h1 className='titleProyects'>PROYECTOS</h1>
            <figure class="snip0015">
                <img src="https://i.ibb.co/crydFp4/burguer.png" alt="Untitled1" border="0" />
                <figcaption>
                    <h2>BURGUER<span><h3>QUEEN</h3></span></h2>
                    <p>Aplicación para servicios de Restaurant. </p>
                    <a href="https://burger-queen-2bad6.web.app/"></a>
                </figcaption>
            </figure>
            <figure class="snip0015">
                <img src="https://i.ibb.co/ScNF7Xr/Hackaton1.jpg" alt="sample39" />
                <figcaption>
                    <h2>SIS<span><h3>SISTER</h3></span></h2>
                    <p>Red de aprendizaje sobre la Violencia Obstétrica</p>
                    <a href="https://hackathon2020-6329e.firebaseapp.com/"></a>
                </figcaption>
            </figure>
            <figure class="snip0015">
                <img src="https://i.ibb.co/zfvWMnN/Old1.jpg" alt="sample40" />
                <figcaption>
                    <h2>OLD<span>BEAT</span>
                        <h3>RED-<span>SOCIAL</span></h3></h2>
                    <p>Red social enfocada en amantes de la década de los 80’s</p>
                    <a href="https://niamoyano91.github.io/SCL013-social-network/src/index.html"></a>
                </figcaption>
            </figure>
            <figure class="snip0015">
                <img src="https://i.ibb.co/tZgzTGj/Pokemon1.jpg" alt="sample40" />
                <figcaption>
                    <h2>DATA<span>POKEMON</span><span></span></h2>
                    <p>Aplicación de búsqueda de pokemones de la primera generación</p>
                    <a href="https://niamoyano91.github.io/SCL013-data-lovers/src/index.html"></a>
                </figcaption>
            </figure>
        </div>
    );
}