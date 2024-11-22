//curso
import React from 'react'
function CourseList() {
    return(
        <main>
            <div className='cursomain'>
                <h1>Cursos</h1>
            </div>

            <div className='cursoBorda'>
                <p>Eletromecânica</p>
                <img src='eletromecanica.png' alt='eletromecanica'/>
            </div>

            <div className='cursoBorda'>
                <p>Inteligencia Artificial</p>
                <img src='inteligencia_artificial.png' alt='IA'/>
                <br/>
                <img src='flecha_cima_vazia.svg' alt='flecha cima vazia'/>
                <p>0</p>
                <br/>
                <img src='chat.svg' alt='chat'/>
                <p>0</p>
            </div>
        </main>
    );
}

export default CourseList;